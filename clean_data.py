import pandas as pd

def clean_participant(filepath):
    """
    Cleans a raw jsPsych CSV from the counterfactual bandit experiment.

    The raw CSV has a column-shifting bug: do_trial rows have 30 fields
    while the header has 28, causing pandas to drop them entirely.
    This script parses do_trial rows manually and reconstructs a clean
    dataframe with correctly mapped columns.

    Returns a DataFrame with one row per real task trial (learn + judgement),
    plus summary rows for pick_best and pick_secondBest responses.
    """

    # ------------------------------------------------------------------ #
    # 1. Parse do_trial rows manually from raw file                        #
    # ------------------------------------------------------------------ #
    # Field indices in a raw do_trial line:
    # 1  = trial_type
    # 2  = trial_index
    # 3  = time_elapsed
    # 4  = internal_node_id
    # 5  = rt
    # 11 = response (key: 49=pirate1, 50=pirate2, 51=pirate3)
    # 12 = choice_outcomes (was chosen pirate the best? 1/0)
    # 13 = context_n (island index 0-5)
    # 14 = context_img_id
    # 15 = trial_n (trial number within island, learn only)
    # 16 = context_im (island name, learn only)
    # 17 = pR_red or trial_n (learn=pR_red, judgement=trial_n_global)
    # 18 = pR_white (learn only)
    # 19 = pR_black (learn only)
    # 21 = outcome (1=coin, 0=no coin)
    # 22 = phase ('learn' or 'judgement')

    do_trial_rows = []

    with open(filepath, 'r') as f:
        for line in f:
            if 'do_trial' not in line:
                continue
            fields = line.strip().split(',')
            if len(fields) < 23:
                continue
            phase = fields[22]
            if phase not in ('learn', 'judgement'):
                continue

            rt = fields[5] if fields[5] not in ('', 'null') else None
            response = fields[11] if fields[11] not in ('', 'null') else None
            outcome = fields[21] if fields[21] in ('0', '1') else None

            # Convert key press to pirate label
            pirate_map = {'49': 'red', '50': 'white', '51': 'black'}
            chosen_pirate = pirate_map.get(response, None)

            row = {
                'trial_index':    int(fields[2]),
                'time_elapsed':   float(fields[3]),
                'phase':          phase,
                'context_n':      int(fields[13]) if fields[13] else None,
                'context_im':     fields[16] if fields[16] else None,
                'trial_n':        int(fields[15]) if fields[15] else None,
                'rt':             float(rt) if rt else None,
                'chosen_pirate':  chosen_pirate,
                'choice_optimal': int(fields[12]) if fields[12] in ('0','1') else None,
                'outcome':        int(outcome) if outcome is not None else None,
                'pR_red':         float(fields[18]) if fields[18] else None,
                'pR_white':       float(fields[19]) if fields[19] else None,  # note: shifted
                'pR_black':       float(fields[20]) if fields[20] else None,  # note: shifted
            }
            do_trial_rows.append(row)

    trial_df = pd.DataFrame(do_trial_rows)

    # ------------------------------------------------------------------ #
    # 2. Parse do_pick_best and do_pick_secondBest from pandas            #
    # (these rows align correctly with the header)                        #
    # ------------------------------------------------------------------ #
    raw = pd.read_csv(filepath, on_bad_lines='skip')

    pick_cols = ['trial_type', 'trial_index', 'rt', 'response', 'context_n', 'context_im']
    pick_df = raw[raw['trial_type'].isin(['do_pick_best_pirate', 'do_pick_secondBest_pirate'])][pick_cols].copy()
    pick_df = pick_df.rename(columns={'response': 'chosen_pirate_key'})
    pirate_map = {49.0: 'red', 50.0: 'white', 51.0: 'black'}
    pick_df['chosen_pirate'] = pick_df['chosen_pirate_key'].map(pirate_map)
    pick_df = pick_df.drop(columns=['chosen_pirate_key'])

    # ------------------------------------------------------------------ #
    # 3. Extract subject_id                                                #
    # ------------------------------------------------------------------ #
    subject_id = raw['subject_id'].dropna().iloc[0] if raw['subject_id'].notna().any() else 'unknown'
    trial_df['subject_id'] = subject_id
    pick_df['subject_id'] = subject_id

    return trial_df, pick_df


# ------------------------------------------------------------------ #
# Batch processing                                                     #
# ------------------------------------------------------------------ #
if __name__ == '__main__':
    import glob
    import os

    input_dir = "data"
    output_dir = "data/cleaned"
    os.makedirs(output_dir, exist_ok=True)

    files = glob.glob(os.path.join(input_dir, "final_S*.csv"))
    print(f"Found {len(files)} files to process\n")

    summary_rows = []

    for filepath in sorted(files):
        filename = os.path.basename(filepath)
        try:
            trials, picks = clean_participant(filepath)
            subject_id = trials['subject_id'].iloc[0]

            # Save cleaned files
            stem = filename.replace('.csv', '')
            trials.to_csv(f"{output_dir}/{stem}_trials.csv", index=False)
            picks.to_csv(f"{output_dir}/{stem}_picks.csv", index=False)

            n_learn      = len(trials[trials['phase'] == 'learn'])
            n_judgement  = len(trials[trials['phase'] == 'judgement'])
            total_coins  = int(trials['outcome'].sum())

            summary_rows.append({
                'subject_id':    subject_id,
                'file':          filename,
                'n_learn':       n_learn,
                'n_judgement':   n_judgement,
                'total_coins':   total_coins,
            })

            print(f"✓ {subject_id:<25} | learn={n_learn} | judgement={n_judgement} | coins={total_coins}")

        except Exception as e:
            print(f"✗ {filename}: {e}")
            summary_rows.append({
                'subject_id':  'ERROR',
                'file':        filename,
                'n_learn':     None,
                'n_judgement': None,
                'total_coins': None,
            })

    # Save summary
    summary_df = pd.DataFrame(summary_rows)
    summary_df.to_csv(f"{output_dir}/summary.csv", index=False)
    print(f"\nDone. Cleaned files saved to '{output_dir}/'")
    print(f"Summary saved to '{output_dir}/summary.csv'")
    print(f"\n{summary_df.to_string(index=False)}")
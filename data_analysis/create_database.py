import pandas as pd
from glob import glob

def format_list(data,variable,data_type):
    arr = data[variable].iloc[-1].split(",")
    arr = list(map(data_type,arr))
    return arr

def make_sub_dict(data):
    sub_dict = {}
    all_vars = ["contextArray_ind", "validImageProbes","invalidImageProbes","availableForMemProbe","choice_blocks",
           "pRew_Red","pRew_White","pRew_Black"]

    for var in all_vars:
        if "pRew" in var:
            data_type = float
        else:
            data_type = int
        sub_dict[var] = format_list(data,var,data_type)
    return sub_dict

files = glob("../data/*2022-03-06_*csv") 
#files = glob("../data/*2021-11-02_*csv")
db = dict()

for f in files:
    try:
        print(f)
        df = pd.read_csv(f)
        participant_id = int(df.participant_id.dropna().reset_index().participant_id[0])
        print(participant_id)
        sub_dict = make_sub_dict(df)
        db[participant_id] = sub_dict
    except:
        continue
print(db.keys())


with open('day_1_exp_struc.js', 'w', encoding='utf-8') as f:
    f.write("let exp_struc = ")
    f.write(str(db))

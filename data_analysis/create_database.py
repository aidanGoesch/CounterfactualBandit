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

files = glob("../data/*csv")
db = dict()

for f in files:
    print(f)
    df = pd.read_csv(f)
    subject_id = df.subject_id.dropna().reset_index().subject_id[0]
    sub_dict = make_sub_dict(df)
    db[subject_id] = sub_dict


with open('day_1_exp_struc.js', 'w', encoding='utf-8') as f:
    f.write("let exp_struc = ")
    f.write(str(db))

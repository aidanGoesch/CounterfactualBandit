string = [123,161,81,168,127,120,164,87,124,169,88,49,85,86,44,84,43,46,45,121,202,205,207,126,125,208,40,80,122,47,166,42,206,160,128,48,167,200,165,162,89,203,209,163,201,82,129,41,83,204]
string = [i-10 for i in string]

new_string =""
for i in range(len(string)):
    new_string+= str(string[i]) + ","
print(new_string)
print(len(string))

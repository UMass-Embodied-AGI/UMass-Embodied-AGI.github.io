import os
import json

task = 'cook_inference'
dirs = sorted(os.listdir(task))
js = []
for d in dirs:
    js_t = {"_initial_frame": os.path.join(task, d, "init.png")}
    for e in os.listdir(os.path.join(task, d)):
        if not os.path.isdir(os.path.join(task, d, e)):
            continue
        with open(os.path.join(task, d, e, "goal.txt"), "r") as f:
            goal = json.loads(f.readline().replace("'", "\""))
        js_t["\n".join(goal)] = os.path.join(task, d, e)
    js.append(js_t)
print(json.dumps(js, indent=4))
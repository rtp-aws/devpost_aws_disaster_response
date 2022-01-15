import numpy as np

# ctrl-shift-b

dosage_schedule = np.array([3,2,1,0,0,0,0,0])

num_new_patients = np.array([1,2,1,0,0])

dosages_given = np.array([0, 0, 0, 0, 0, 0, 0])

print("dosage_schedule is {}" .format(dosage_schedule))
print("num_new_patients is {}" .format(num_new_patients))

for d in range(5):
    a_sum = 0
    for k in range(-3, 3):
        a_sum = a_sum + num_new_patients[k] * dosage_schedule[d-k]
    dosages_given[d] = a_sum;
    print("dosages_given[day={0}] = {1}" .format(d,dosages_given[d]))

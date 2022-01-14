import numpy as np

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




# for d=0:5
#     a_sum = 0;
#     % This cruft is because I need to rewrite for matlab syntax which
#     % uses first array index as 1, instead of 0 as I prefer.
#     % hashtag python_rocks
#     d2 = d+1;
#     if d2 < 1
#         % no need to modify a_sum by zero.
#        continue
#     end
#
#     for k=-3:3
#         % This cruft is because I need to rewrite for matlab syntax which
#         % uses first array index as 1, instead of 0 as I prefer.
#         % hashtag python_rocks
#         k2 = k+1;
#         if k2 < 1 | (d2-k2) < 1
#             % no need to modify a_sum by zero.
#            continue
#         end
#         a_sum = a_sum + num_new_patients(k2) * dosage_schedule(d2 - k2);
#     end
#     dosages_given(d2) = a_sum;
#     fprintf('dosages_given[day = %i] = %d \n', d2, dosages_given(d2))
# end

#% unfsck the index starting at one thing
#dosages_given = circshift(dosages_given,  [0, -1]);

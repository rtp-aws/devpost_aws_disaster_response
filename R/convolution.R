
# create a dataframe with dosage_schedule and num_new_patients

df <- data.frame(
  dosage_schedule = c(3, 2, 1, 0, 0), 
  num_new_patients = c(1, 2, 1, 0, 0)
)


dosages_given = convolve(df$dosage_schedule,df$num_new_patients,type="open")

#print(dosages_given_o)
print(paste("num_doses_given = ", dosages_given))
cat("num_doses_given = ", dosages_given)

# R, not sure why it has two padded 0's
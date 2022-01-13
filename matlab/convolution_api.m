% convolution
%
% based on this guide
% https://betterexplained.com/articles/intuitive-convolution/


% Create a 1x3 matrix to represent dosage schedule
dosage_schedule = [3 2 1 0 0];  

% Create a 1x3 matrix to represet num new patients 
% each day
num_new_patients = [1 2 1 0 0];  

% how much dosages do you do each day?
dosages_given = conv(dosage_schedule, num_new_patients);


% output

dosages_given




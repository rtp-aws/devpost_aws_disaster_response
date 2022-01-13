% convolution
%
% based on this guide
% https://betterexplained.com/articles/intuitive-convolution/


% Create a 1x3 matrix to represent dosage schedule
% dosage = [3 2 1]

% Create a 1x3 matrix to represet num new patients 
% each day
% num_new_patients = [1 2 1]

% how much dosages do you do each day?

% dosage varies by day
% num_patients varies by day
% day varies from 0 to 10

% dosage schedule by day   3 2 1
% new people per day       1 2 1       


% day 1 
% day 1 patient has three doses    = 3
%                            ----------
%                      total doses = 3


% day 2
% day 1 patient has two doses      = 2
% day 2 patient 1 has three doses  = 3
% day 2 patient 2 has three doses  = 3
%                            ----------
%                      total doses = 8

% day 3
% day 1 patient has one doses      = 1
% day 2 patient 1 has two doses    = 2
% day 2 patient 2 has two doses    = 2
% day 3 patient has three doses    = 3
%                            ----------
%                      total doses = 8

% day 4
% day 1 patient has zero doses     = 0
% day 2 patient 1 has one dose     = 1
% day 2 patient 2 has one dose     = 1
% day 3 patient has two doses      = 2
%                            ----------
%                      total doses = 4

% day 5
% day 1 patient has zero doses     = 0
% day 2 patient 1 has zero doses   = 0
% day 2 patient 2 has zero doses   = 0
% day 3 patient has one dose       = 1
%                            ----------
%                      total doses = 1

%
% As we worked through the calculations, it looks like we
% are sliding the people array through the dosage schedule array,
% as we advance by day.
%
% NOTE: FWIW, If I remember my linear systems from EE
% you can actually do either way. slide x through y
% or slide y through x.
% Its intutitave given the problem above but looking at
% an old text book shows a property of a linear system
% to be
% 
% x(lamda)delta(t-lambda) = x(t)delta(t-lambda)
% 
% delta function is a kind of a weird concept, but its basically
% this.  Consider a function with parameter alpha, delta(a)
% which is the derivative of u(alpha) which is the unit step function.
% The unit step funciton is dimensionless.  It is 0 for all alpha <= 0
% and 1 for all alpha >0.
%
% If you take derivative of unit step function you get a spike of height
% alpha and width 0.  If you multipy it by some constant a, its not height
% a its a unit step(alpha).  "Its the area bounded by the impulse and time
% axis.
%
% I am going off into weeds here.

% so, if we wanted to do this programatically,
%
%
% day = [1 2 3 4 5]
%
% Assuming we only have positive days. And our first day is
% the first entry in the list then, it would look like this.
% num_new_patients(day) = [1 2 1 0 0]  
%
% For sake of argument, 
%
% It could be represented by [0   0   0  0 1 2 1 0 0 0] where
%                      index  -3 -2  -1  0 1 2 3 4 5 6
%
% and furthermore, we could add infintie zeros to either side.
%
% However, we could also set restrictions on our results as we
% did manually above.  Just make the matrix/array start at day 1,
% and for sake of getting through our slide, add zeros to end
% and just specify earlier values are zero so no need to
% multiply by dosage_schedule[day] * num_people[day] = 0 whenever
% day is less than 1 or day greater than num days in schedule
% or num people in num_people per day.
%
% Assuming, we are going to maintain zero day dosages
% dosage[day] = [3 2 1 0 0]  
%
%
% Ok, back to a linear systems book, "the periodic
% convolution of two signals x(t) and x2(t) with common
% period To"
%
%
%  y(t) = int over To of x1(Tau)x2(t-Tau) dTau
%
% The book uses saw tooth and pulse singls with both
% have period To
%
%
% Later the book does discrete periodic convolution
% the two signals are the same waveforms but instead
% of contnious they are beats.
%
% Now, it switches from integrals to Summations
%
%  y[n] = sum over Natural numbers
%
% I'm thinking <N> is Natural numbers is ..-3 -2 -1 0 1 2 3 ...
%
%
% In another book they have a neat figure where 
% they take input signal, overlay it with time 
% reversed impulse response centered around time,sample number =0
%
% consider the input signal drawn with x 
% and 
% the time reveresed impulse response drawn with +
% and
% where they intersetc *
%                                                    +
%                         +                        +   
%   xxxx*xx             xxxxxxx                  *xxxx         
%    +     x           *     +  x              +x      
%  +--+--+--+------+-----------+------------+----------------  
%  t=-100   *    *   x    t=0     +x     +  x      t=150
%            x*xxxxx                xx*xxxx      
%                                   +     
% The output sample is the sum of products of overlapping 
% signals.  I'll revisit this.  He also mentions an intuitave 
% method for knowing the number of past weights to include.
%
% Perhaps what he is alluding to is that the reverse impulse
% starts at t=150.  Remember the impulse response is greatest 
% as soon as the impulse is applied, so its a max at this point
% and ossosolates within a decaying envelope.  So, if you want
% response at t=150, this is where the signal starts in reverse.
% when the signal is near zero around t=-100 that means you need
% to start your tau at -100.  I think I know what he means, but
% I don't fully grok it to state clearly.  The struggle is real.
%
%
% From yet another textbook
%
%  y[n] = sum k from -inf to +inf (  x[k] * g[n-k]  )
%  
%
%
%                  k=+3
% dosages[day] = sum( num_new_patients[k]  *  dosage_schedule[day - k]    )
%                  k=-3  <- we know that the impulse response is 3 days long
%
%
% dosage_schedule[day] = [3 2 1 0 0]  
% num_new_patients(day) = [1 2 1 0 0]  
%
%
% using a first index of 1
%
% dosages[day=1] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=1] = sum k:-3,3( num_new_patients[k] * dosage_schedule[1 - k] )
%          
% dosages[1]       [1 2 1 0 0]           [3 2 1 0 0]
%   = k = -3 -> num_new_patients[-3] * dosage_schedule[1+3 = 4] = 0 * 0 = 0 <- insert zero for '-index' 
%   = k = -2 -> num_new_patients[-2] * dosage_schedule[1+2 = 3] = 0 * 1 = 0 <- insert zero for '-index'   
%   = k = -1 -> num_new_patients[-1] * dosage_schedule[1+1 = 2] = 0 * 2 = 0 <- insert zero for '-index'
%   = k =  0 -> num_new_patients[ 0] * dosage_schedule[1+0 = 1] = 0 * 3 = 0 <- insert zero for '-index'
%   = k =  1 -> num_new_patients[ 1] * dosage_schedule[1-1 = 0] = 1 * 0 = 0 <- insert zero for '-index'
%   = k =  2 -> num_new_patients[ 2] * dosage_schedule[1-2 =-1] = 2 * 0 = 0 <- insert zero for '-index' 
%   = k =  3 -> num_new_patients[ 3] * dosage_schedule[1-3 =-2] = 1 * 0 = 0 <- insert zero for '-index' 
%  
% NOTE: when insert zero for '-index', consider if the arrays had zeroes
% padded for entires at these -indexes or indexes greater than the array 
% bounds. ie. for dosage_schedule[index<0] = 0 or
%                 dosage_schedule[index>4] = 0
%
%
% using a first index of 0
%
%
% day = 0
%
% dosages[day=0] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=0] = sum k:-3,3( num_new_patients[k] * dosage_schedule[0 - k] )
%
% dosages[0]       [1 2 1 0 0]           [3 2 1 0 0]
%     k = -3 -> num_new_patients[-3] * dosage_schedule[0+3 = 3] = 0 * 0 = 0 <- insert zero for '-index' 
%     k = -2 -> num_new_patients[-2] * dosage_schedule[0+2 = 2] = 0 * 1 = 0 <- insert zero for '-index'   
%     k = -1 -> num_new_patients[-1] * dosage_schedule[0+1 = 1] = 0 * 2 = 0 <- insert zero for '-index'
%     k =  0 -> num_new_patients[ 0] * dosage_schedule[0+0 = 0] = 1 * 3 = 3 
%     k =  1 -> num_new_patients[ 1] * dosage_schedule[0-1 =-1] = 2 * 0 = 0 <- insert zero for '-index'
%     k =  2 -> num_new_patients[ 2] * dosage_schedule[0-2 =-2] = 1 * 0 = 0 <- insert zero for '-index' 
%     k =  3 -> num_new_patients[ 3] * dosage_schedule[0-3 =-3] = 0 * 0 = 0 <- insert zero for '-index' 
%                                                                -----------
%                                                                   sum = 3
%
% This works.  How about for next interval?
%
%
% day = 1
%
% dosages[day=1] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=1] = sum k:-3,3( num_new_patients[k] * dosage_schedule[1 - k] )
%
%
% dosages[1]       [1 2 1 0 0]           [3 2 1 0 0]
%     k = -3 -> num_new_patients[-3] * dosage_schedule[1+3 = 4] = 0 * 0 = 0 <- insert zero for '-index' 
%     k = -2 -> num_new_patients[-2] * dosage_schedule[1+2 = 3] = 0 * 0 = 0 <- insert zero for '-index'   
%     k = -1 -> num_new_patients[-1] * dosage_schedule[1+1 = 2] = 0 * 1 = 0 <- insert zero for '-index'
%     k =  0 -> num_new_patients[ 0] * dosage_schedule[1+0 = 1] = 1 * 2 = 2 
%     k =  1 -> num_new_patients[ 1] * dosage_schedule[1-1 = 0] = 2 * 3 = 6 
%     k =  2 -> num_new_patients[ 2] * dosage_schedule[1-2 =-1] = 1 * 0 = 0 <- insert zero for '-index' 
%     k =  3 -> num_new_patients[ 3] * dosage_schedule[1-3 =-2] = 0 * 0 = 0 <- insert zero for '-index' 
%                                                                -----------
%                                                                   sum = 8
%
%
%
% day = 2
%
% dosages[day=2] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=2] = sum k:-3,3( num_new_patients[k] * dosage_schedule[2 - k] )
%
%
% dosages[2]       [1 2 1 0 0]           [3 2 1 0 0]
%     k = -3 -> num_new_patients[-3] * dosage_schedule[2+3 = 5] = 0 * 0 = 0 <- insert zero for '-index' 
%     k = -2 -> num_new_patients[-2] * dosage_schedule[2+2 = 4] = 0 * 0 = 0 <- insert zero for '-index'   
%     k = -1 -> num_new_patients[-1] * dosage_schedule[2+1 = 3] = 0 * 0 = 0 <- insert zero for '-index'
%     k =  0 -> num_new_patients[ 0] * dosage_schedule[2+0 = 2] = 1 * 1 = 1 
%     k =  1 -> num_new_patients[ 1] * dosage_schedule[2-1 = 1] = 2 * 2 = 4 
%     k =  2 -> num_new_patients[ 2] * dosage_schedule[2-2 = 0] = 1 * 3 = 3  
%     k =  3 -> num_new_patients[ 3] * dosage_schedule[2-3 =-1] = 0 * 0 = 0 <- insert zero for '-index' 
%                         ^                              ^            ^  -----------
%                         |                              |            |   8 = sum    
%           have you picked up yet this is fixed?        +------------+
%                                                        |
%                                          and this is sliding?
%
% day = 3
%
% dosages[day=3] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=3] = sum k:-3,3( num_new_patients[k] * dosage_schedule[3 - k] )
%
%
% dosages[3]       [1 2 1 0 0]           [3 2 1 0 0]
%     k = -3 -> num_new_patients[-3] * dosage_schedule[3+3 = 6] = 0 * 0 = 0 <- insert zero for '-index' 
%     k = -2 -> num_new_patients[-2] * dosage_schedule[3+2 = 5] = 0 * 0 = 0 <- insert zero for '-index'   
%     k = -1 -> num_new_patients[-1] * dosage_schedule[3+1 = 4] = 0 * 0 = 0 <- insert zero for '-index'
%     k =  0 -> num_new_patients[ 0] * dosage_schedule[3+0 = 3] = 1 * 0 = 0 
%     k =  1 -> num_new_patients[ 1] * dosage_schedule[3-1 = 2] = 2 * 1 = 2 
%     k =  2 -> num_new_patients[ 2] * dosage_schedule[3-2 = 1] = 1 * 2 = 2  
%     k =  3 -> num_new_patients[ 3] * dosage_schedule[3-3 = 0] = 0 * 3 = 0  
%                                                                -----------
%                                                                   sum = 4
%
%
% day = 4
%
% dosages[day=4] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% dosages[day=4] = sum k:-3,3( num_new_patients[k] * dosage_schedule[4 - k] )
%
%
% dosages[4]       [1 2 1 0 0]           [3 2 1 0 0]
%     k = -3 -> num_new_patients[-3] * dosage_schedule[4+3 = 7] = 0 * 0 = 0 <- insert zero for '-index' 
%     k = -2 -> num_new_patients[-2] * dosage_schedule[4+2 = 6] = 0 * 0 = 0 <- insert zero for '-index'   
%     k = -1 -> num_new_patients[-1] * dosage_schedule[4+1 = 5] = 0 * 0 = 0 <- insert zero for '-index'
%     k =  0 -> num_new_patients[ 0] * dosage_schedule[4+0 = 4] = 1 * 0 = 0 
%     k =  1 -> num_new_patients[ 1] * dosage_schedule[4-1 = 3] = 2 * 0 = 0 
%     k =  2 -> num_new_patients[ 2] * dosage_schedule[4-2 = 2] = 1 * 1 = 1  
%     k =  3 -> num_new_patients[ 3] * dosage_schedule[4-3 = 1] = 0 * 2 = 0  
%                                                                -----------
%                                                                   sum = 1
%
% super this matches the other method
%
%








% lets baby step this approach
% patients 
%
% dosages[day=d] = sum k:-3,3( num_new_patients[k] * dosage_schedule[day - k] 
% keep in mind, all indexes need to be bumped by 1

% inputs
% dosage_schedule[day] = [3 2 1 0 0]  
% num_new_patients[day] = [1 2 1 0 0]  

dosage_schedule = [3 2 1 0 0]  
num_new_patients = [1 2 1 0 0]  

% output
dosages_given = [0 0 0 0 0 0 0]

for d=0:5
    a_sum = 0;
    % This cruft is because I need to rewrite for matlab syntax which
    % uses first array index as 1, instead of 0 as I prefer.
    % hashtag python_rocks
    d2 = d+1;
    if d2 < 1 
        % no need to modify a_sum by zero. 
       continue
    end

    for k=-3:3
        % This cruft is because I need to rewrite for matlab syntax which
        % uses first array index as 1, instead of 0 as I prefer.
        % hashtag python_rocks
        k2 = k+1;
        if k2 < 1 | (d2-k2) < 1
            % no need to modify a_sum by zero. 
           continue
        end                
        a_sum = a_sum + num_new_patients(k2) * dosage_schedule(d2 - k2); 
    end
    dosages_given(d2) = a_sum;
    fprintf('dosages_given[day = %i] = %d \n', d2, dosages_given(d2))
end

% unfsck the index starting at one thing
dosages_given = circshift(dosages_given,  [0, -1]);

% dump output
dosages_given




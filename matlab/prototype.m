% prototype code for the smallHD software task assignment to advance
% in the interview process
% 2017/02/22

% octave runtime requirement
%pkg load signal

% in octave this takes ~13 minutes to run when I am doing simulataneous 
% build and debug in visual studio.
disp('start');

tic; % to measure time
% load the image data as 0-255 data
u8Kitten=imread('kitten.pgm');
%u8Kitten=imread('kitten_tiny.pgm');
%u8Kitten=imread('kitten_small.pgm');
%u8Kitten=imread('kitten_medium.pgm');
dKitten=im2double(u8Kitten);  % convert to double
[m,n] = size(dKitten);
disp(['num rows= ',num2str( m ),' num cols= ',num2str( n )]);


% display the image
figure('Name','using 8-bt');
imshow(u8Kitten);


% Create a test input of all ones.
dOnes1x9 = ones(1,9);

% Create a low pass filter.
% Looking at my img processing class hw, I did this 
% when I was making a 3x3 and 5x5 filter.  I can't remember why
% also in that case I transformed the output using the imfilter routine
% where all ones 3x3 was a low pass filter.
dOnes1x9_prime = ones(1,9)*(double(1/9));


% what does dct provide?
y1=dct(dOnes1x9);
y2=dct(dOnes1x9_prime);

% y1 is [3, 0, 0, .... 0]  nine values. same size as input
% y2 is [0.3333, 0, 0, ... 0]


% what happens if use an array of which corresponds to something like this:
% 
%  0    128    0
%  128  255   128
%  0    128    0
%
% Note, I'm converting these to double 0..1
u8Test=[0, 128, 0, 128, 255, 128, 0, 128, 0];
dTest=u8Test/255;
y3=dct(dTest);   % y3 = [1.0026, 0,  -0.5973, -0.0000,  0.3170,  0,   -0.7080, 0, -0.2099]
%
% If I count the number of non zero pixels, I would get
% 5
% 
% If I were to threshold the frequencies with an abs > 0.5 and then count, I would get
% y3 = [1.0026, 0,  -0.5973, -0.0000,  0,  0,   -0.7080, 0, 0]
% 3

% what happens if use an array of which corresponds to something like this:
% 
%  128    128   128
%  128    255   128
%  128    128   128
%
% Note, I'm converting these to double 0..1
u8Test=[128, 128, 128, 128, 255, 128, 128, 128, 128];
dTest=u8Test/255;
y3=dct(dTest);   % y3 = [1.6719, 0.0000, -0.2348, -0.0000, 0.2348, -0.0000, -0.2348, 0, 0.2348]
% If I count the number of non zero pixels, I would get
% 5
% 
% If I were to threshold the frequencies with an abs > 0.5 and then count, I would get
% y3 = [1.6719, 0, 0, 0, 0, 0, 0, 0, 0]
% 1

% Hmm. This looks like it would distinguish pixels who have similar
% neighbors.  Perhaps the threshold could be used to as some sort of
% variable to mainpulate the pixel modification.  Let try this on the input
% data.

% ignoring matlabisms for operations on arrays since I'm going to have to
% implement this in C afterwards anyway.
% create a sliding window of neighbor pixesl in the array
% Also ignoring how the arrays are stored in memory, so i have a 50/50 shot
% of the data being in cache.
%
% Since I'll be using calculated values for the pixels, I'll use variables
% to keep track of the neighbors.  I'll use compass directions for the
% names.
%
%              NW          N           NE
%              W   pixel of interest   E
%              SW          S           SE
%
% m = num rows, 1275
% n = num cols, 1920
%
% Iterate left to right, top to bottom for simplicity
for j = 1:3:n  % col iteration
    for i = 1:3:m  % row iteration
        % for cases where a neighbor does not exist, simply set to zero
        % ie. if first pixel, it has no neighbor to top or left.
        %
        % Get value for NW pixel, if it does not exist set to zero.
        
        if ( i>1 && j>1 ) 
            NW = dKitten(i-1,j-1);  % index with A(row,col)
        else
            NW = 0;
        end
        % Get value for N pixel, if it does not exist set to zero.
        if ( i>1 ) 
           N = dKitten(i-1,j);
        else
           N = 0;
        end
        % Get value for NE pixel, if it does not exist set to zero.
        if ( i>1 && j<(n-1) ) 
           NE = dKitten(i-1,j+1);
        else
           NE = 0;
        end
        % Get value for W pixel, if it does not exist set to zero.
        if ( j>1 )  % fix was j > 1; orig was i>1
           W = dKitten(i,j-1);  % fix was i, j-1; orig was i-1,j
        else
           W = 0;
        end
        % Get value for E pixel, if it does not exist set to zero.
        if ( j<(n-1) ) 
           E = dKitten(i,j+1);
        else
           E = 0;
        end
        % Get value for SW pixel, if it does not exist set to zero.
        if ( i<(m-1) && j>1 ) 
           SW = dKitten(i+1,j-1);
        else
           SW = 0;
        end
        % Get value for S pixel, if it does not exist set to zero.
        if ( i<(m-1)  ) 
           S = dKitten(i+1,j);
        else
           S = 0;
        end
        % Get value for SE pixel, if it does not exist set to zero.
        if ( i<(m-1) && j<(n-1)  ) 
           SE = dKitten(i+1,j+1);
        else
           SE = 0;
        end
        
        pixel = dKitten(i,j);
        
        % Now we can build the neighborhood of pixels
        neighborhood = [ NW, N, NE, W, pixel, E, SW, S, SE];
        % removing this was a fix. its already scaled
        %neighborhood=neighborhood/255;
        dctNeigh=dct(neighborhood);  
        % these are tiny numbers, use a threshold of 0.0005
        % this will create a new array where any values less than threshold
        % are set to zero.
        %dctNeigh_threshold(abs(dctNeigh) < 0.0005) = 0;
        %
        % This will create a logical array where one is a value greater
        % than the threshold. 0 if less.
%        gtThreshold = (abs(dctNeigh))>0.05;
%        gtThreshold = (abs(dctNeigh))>0.005;
        gtThreshold = (abs(dctNeigh))>0.01;
        %  This will count the number of ones
        num_gtThreshold = sum(gtThreshold);
%        if (num_gtThreshold < 2)  % if just two major freq componets 
        if (num_gtThreshold >= 2)  % if just two major freq componets 
            dKitten(i,j) = 1;     % mod the pixel as all white
        end
        

    end
    
    % get an idea how fast this is working
    %disp(['finished rolumn ', num2str(j)]);


end
disp('stop')
figure('Name','Threshold and low freq count');
imshow(dKitten);

% to measure run time
toc
% roughly six minutes to run

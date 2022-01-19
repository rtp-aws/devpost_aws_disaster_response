
# its been a while since I have done R just relearning some things
# https://rstudio-education.github.io/hopr/

# this is from a websites daily stats challenge. I loathe this
# website.  However, i thought I would try it again.  As you
# can see its light on stats and heavy on pedantic io.

# Yes they choose this way to get input. Not
# a built in vector.  Not read a csv file. Not
# read a file.  Read from stdin.
#
# read from stdin
#
#x = scan(file("stdin"))

# the code in the challenge is on two lines
# first line is single number, 10 which means how many values on next
# line of input.

# method from 
# https://stackoverflow.com/questions/30191232/use-stdin-from-within-r-studio
x = readLines(stdin(), n=2)


# print x a few ways
# since we are running from stdin, this will do nothing.
x
# this allows mixed strings and variable results
# It also does an "x = foo" for each element in the vector
print(paste("x = ", x))
# This will flatten the vector and dump the entire vector
# compare this with above and the value shown in environment pane
# in RStudio
# cat does recognize \n
cat("x = ", x, "\n")
# using sprintf is like cat, it does for each element in the vector
message(sprintf("x is %s\n",x))
# can also write to stdout ike this
write("prints to stdout", stdout())

# print type of x
# keep in mind, R has no scalars.  Everything is a vector so 
# class(x) shows its a character vector
#print(class(x))

# number of values is first element
# R is like matlab, first array element is 1 and not 0
num_values = as.numeric(x[1])
message(sprintf("num_values is %d\n", num_values))

# get the values
the_values_as_str_list = strsplit(x[2], ' ')
the_values_as_str_list
the_values = as.numeric(unlist(the_values_as_str_list))
for(i in 1:num_values) message(sprintf("the_values[%d] is %d\n", i, the_values[i]))


# no mode() builtin function. the existing mode()
# routine is for what mode storage is in.
getmode = function(v) {
  uniqv = unique(v)
#  uniqv[which.max(tabulate(match(v, uniqv)))]
  print(tabulate(match(v, uniqv)))
}

#print(getmode(the_values))
#getmode(the_values)

uniqv = unique(the_values)
the_matches= match(the_values, uniqv)
the_tab = tabulate(the_matches)
the_max_count = max(the_tab)
which_indexes = which(the_tab %in% the_max_count)
min(uniqv[which_indexes])

 # In order to pass the challenge, this is the code variant i used
# Enter your code here. Read input from STDIN. Print output to STDOUT
x = scan(file("stdin"))


num_values = as.numeric(x[1])

the_values = c(x[1:num_values+1])
#write(the_values, stdout())
write(mean(the_values),stdout())
write(median(the_values),stdout())

uniqv = unique(the_values)
the_matches= match(the_values, uniqv)
the_tab = tabulate(the_matches)
the_max_count = max(the_tab)
which_indexes = which(the_tab %in% the_max_count)
write(min(uniqv[which_indexes]),stdout())






# python libs
import mxnet as mx
# mxnet NDarray shortcut
from mxnet import nd

# file io
import os
import math # for pi

# script parameters
import sys

#
# for writing tensor back to file
#
import matplotlib.pyplot as plt

###########################################
# print based upon log level
#
# TODO: add loglevel besides true/false
#
def my_print(verbose=False, *args):
    if (verbose):
        print(args)




###########################################
# build rotate matrix given angle
#
def build_rot_matrix(angle):
    
    # calculate terms
    a = math.cos(x)
    b = -math.sin(x)
    c = math.sin(x)
    d = math.cos(x)

    # build nd array
    nd_array = nd.array([
        [a,b],
        [c,d]
    ])
    
    return nd_array



###########################################
# make an image square H=W
#
# TODO: make blanks be an enum
#
def make_square(input_image_batch, blanks=0, verbose=False):
    # NDArrayIter(data, label=None, batch_size=1, shuffle=False, 
    #            last_batch_handle='pad', data_name='data', 
    #            label_name='softmax_label')
    #
    # Ignore the label parameter.
    dataiter = mx.io.NDArrayIter(input_image_batch, batch_size=1, shuffle=False, last_batch_handle='discard')
    for batch in dataiter:

        my_print(verbose, 'loop entry - a single batch - a single image in batch.data[0] from what is in in_data')
        
        
        # Does this copy or get an alias to the input image?
        a_img_batch = batch.data[0]
        my_print(verbose, 'a_img_batch = ', a_img_batch)
        my_print(verbose, 'a_img_batch.shape = ', a_img_batch.shape)

        (num_rows, num_cols) = in_img_batch[0].shape
        
        rect_dim = max(num_rows,num_cols)

        # I need a 0 when its 2x3
        # I need a 1 when its 3x2
        #
        # By extensions, I need a 1 when num_rows > num_cols
        #
        # I don't know any other way to do this.
        if num_rows > num_cols:
            mod_axis = 1
        else:
            mod_axis = 0


        #
        # pad only works with 4-d and 5d?
        #
        # nd.pad(in_img, mode='constant', constant_value=0,pad_width=(rect_dim,rect_dim))
        #

        new_vals = nd.zeros(rect_dim)

        #new_vals2 = nd.expand_dims(new_vals,axis=1) # 3x2 works
        #new_vals2 = nd.expand_dims(new_vals,axis=0) # 2x3 works
        new_vals2 = nd.expand_dims(new_vals,axis=mod_axis) 

        
        #
        # Don't know how to do this without a loop either
        #
        # There is a contrib api called nd.contrib.while_loop()
        #

        out_img = in_img_batch[0]
        
        the_diff = abs(num_rows - num_cols)
        my_print(verbose, "the_diff = ", the_diff)
        while (the_diff > 0):
            
            # if blanks = 0, append blank lines to bottom
            # ......... = 1, prepend ....
            # ......... = 2, alternate 
            
            if (0 == blanks):
                out_img = nd.concat(out_img, new_vals2, dim=mod_axis) 
            
            if (1 == blanks):
                out_img = nd.concat(new_vals2, out_img,dim=mod_axis) 
            
            if (2 == blanks):
                # alternate the appends front and back
                if (the_diff % 2 == 0):
                    out_img = nd.concat(out_img, new_vals2, dim=mod_axis) 
                else:
                    out_img = nd.concat(new_vals2, out_img,dim=mod_axis) 
            
            
            
            the_diff = the_diff - 1
        
        
        out_img_batch = out_img.expand_dims(axis=0)
        return out_img_batch





####################################################
# rotate an image square based upon rotation matrix
#
def my_rotate(input_image_batch, rotate_matrix, verbose=False):
    # NDArrayIter(data, label=None, batch_size=1, shuffle=False, 
    #            last_batch_handle='pad', data_name='data', 
    #            label_name='softmax_label')
    #
    # Ignore the label parameter.
    dataiter = mx.io.NDArrayIter(input_image_batch, batch_size=1, shuffle=False, last_batch_handle='discard')
    for batch in dataiter:

        my_print(verbose, 'loop entry - a single batch - a single image in batch.data[0] from what is in in_data')
        
        
        # Does this copy or get an alias to the input image?
        a_img_batch = batch.data[0]
        my_print(verbose, 'a_img_batch = ', a_img_batch)
        my_print(verbose, 'a_img_batch.shape = ', a_img_batch.shape)

        #
        # Remember the dims so we can reshare the flattened array back to rectangular
        orig_dims = a_img_batch[0].shape
        
        #
        # Get the indices
        #
        a_img_indexes = mx.nd.contrib.index_array(a_img_batch, axes=(1, 2))
        my_print(verbose, 'a_img_indexes  ', a_img_indexes)
        my_print(verbose, 'a_img_indexes.shape ', a_img_indexes.shape)



        # Try to assign input data to output data based upon indicies
        #
        # Need to reshape so that rows=size of image sans batch
        # 2x2-> 4,2
        # 3x3-> 9,2
        #
        num_rows = a_img_batch[0].size
        my_print(verbose,'num_rows = ', num_rows)
        orig_indexes = mx.nd.reshape(a_img_indexes, shape=(num_rows,2))
        my_print(verbose, 'orig_indexes ', orig_indexes)
        orig_indexes = orig_indexes.astype("float32")

        #
        # do the rotate
        #
        new_indexes = nd.dot(orig_indexes, rotate_matrix) 
        my_print(verbose, 'new_indexes = ', new_indexes)
        new_indexes = new_indexes.round()
        my_print(verbose, 'new_indexes(rounded) = ', new_indexes)
        new_indexes = new_indexes.astype('int64')
        my_print(verbose, 'new_indexes(int) = ', new_indexes)
        
        
        #
        # shift to lower right quadrant. shift so that index axes is 0,0 in top left
        #
        # find the min row value
        min_row = new_indexes.min(axis=0)[0]
        my_print(verbose, 'min_row = ', min_row)
        adj_row = nd.abs(min_row).asscalar()
        my_print(verbose, 'adj_row = ', adj_row)
        
        # find the min col value
        min_col = new_indexes.min(axis=0)[1]
        my_print(verbose, 'min_col = ', min_col)
        adj_col = nd.abs(min_col).asscalar()
        my_print(verbose, 'adj_col = ', adj_col)
        

        
        # adjust based upon min row/col
        # with rotate 90 for 3x3 its [0,2]
        new_indexes = new_indexes + nd.array(nd.array([adj_row, adj_col])).astype('int64')
        my_print(verbose, 'new_indexes after shift to positive', new_indexes)

        #
        # clip indices to max value of source 
        #
        my_print(verbose, 'orig_dims = ', orig_dims[0], orig_dims[1])
        new_indexes = nd.clip(new_indexes, 0, orig_dims[1]-1)
        my_print(verbose, 'new_indexes after clip', new_indexes)
        
        #
        # Determine the max dim in array
        # 
        # find the min row value
        max_row = new_indexes.max(axis=0)[0].asscalar() + 1
        my_print(verbose, 'max_row = ', max_row)
        
        # find the min col value
        max_col = new_indexes.max(axis=0)[1].asscalar() + 1
        my_print(verbose, 'max_col = ', max_col)

        # This only works for square images rotated in 90 degree increments
        #output_image_batch = nd.zeros(input_image_batch.size).reshape(input_image_batch.shape)
        # Use new max col and max row
        output_image_batch = nd.zeros(input_image_batch.size).reshape([1, max_row, max_col])
        new_dims = max(max_row, max_col)
        my_print(verbose, 'new_dims = ', new_dims)
        #output_image_batch = nd.zeros(new_dims*new_dims).reshape([1, new_dims, new_dims])
        output_image = output_image_batch[0]
        my_print(verbose, 'output_image.shape = ', output_image.shape)

        

        #
        # Assign values from input image with new indices to output image
        #
    
        output_image = a_img_batch[0][new_indexes[:,0],new_indexes[:,1]]
        my_print(verbose, 'output_image ', output_image)
                
        output_image = output_image.reshape( max_row, max_col)    
        #output_image = output_image.reshape( new_dims, new_dims)    
        
        my_print(verbose, 'output_image ', output_image)
        output_image_batch = nd.expand_dims(output_image, axis=0)
        my_print(verbose, 'output_image_batch ', output_image_batch)
        
        return output_image_batch




#####################################
#
# main entry point
#
#####################################



#
# Read script parameters
#


num_params = len(sys.argv)

print('num params = ', num_params)
if (1 == num_params):
    print('need to specify filename')
    exit 



#
# setup file system locations
#
# 
# yes, this should use os file path TODO: fix it
TOP_DIR='../'
my_print(False, 'TOP_DIR = ', TOP_DIR)
ICY_BRIDGE_DIR = TOP_DIR + 'icy-bridge/'
my_print(False, 'TOP_DIR = ', ICY_BRIDGE_DIR)
MODEL_NAME = 'c6'
MODEL_TOP_DIR = ICY_BRIDGE_DIR + MODEL_NAME + '/'
my_print(False, 'MODEL_TOP_DIR = ', MODEL_TOP_DIR)
MODEL_RAW_IMAGE_DIR = MODEL_TOP_DIR + 'raw/'
MODEL_POST_IMAGE_DIR = MODEL_TOP_DIR + 'post_rotate_crop/'
my_print(False, 'MODEL_RAW_IMAGE_DIR = ', MODEL_RAW_IMAGE_DIR)
my_print(False, 'MODEL_POST_IMAGE_DIR = ', MODEL_POST_IMAGE_DIR)





###################################
#
# Load image from file, convert to grayscale, rotate
# image by specified angle and write back to
# new filename.
#
###################################

# Load image from file into tensor
# a_file_name = MODEL_RAW_IMAGE_DIR + 'BUS40_SALEM_20220114Z1255.jpg'
a_file_name = MODEL_RAW_IMAGE_DIR + sys.argv[1]
print('using ', a_file_name, ' as input file')

nd_array_uint8_HWC3 = mx.image.imread(a_file_name)
nd_array_f32_HWC3 = nd_array_uint8_HWC3.astype("float32")
nd_array_f3201_HWC3 = nd_array_f32_HWC3/255


# make it gray
gray_aug = mx.image.RandomGrayAug(p=1)

# Use the RandomGrayAug Image Augment routine to convert to Grayscale
aug = mx.image.RandomGrayAug(p=1)
nd_array_f3201_HWC3 = aug(nd_array_f3201_HWC3)
# This just sets all three channels to same value.
my_print(False, 'nd_array_f3201_HWC3.shape = ', nd_array_f3201_HWC3.shape)

nd_array_f3201_HWC1 = nd_array_f3201_HWC3[:,:,0] # can pick any channel
my_print(False, 'nd_array_f3201_HWC1.shape = ', nd_array_f3201_HWC1.shape)

# make batch
in_img_batch = nd_array_f3201_HWC1.expand_dims(axis=0)

# make square
in_img_batch = make_square(in_img_batch, blanks=1)

#
# rotate XX.x degree matrix
#

# make a rotate matrix
x=0.20*math.pi
rotate_variable_angle = build_rot_matrix(x)
my_print(False, 'rotate variable angle nd array is ', rotate_variable_angle)


# Rotate image
out_img_batch = my_rotate(in_img_batch, rotate_variable_angle, False)


# write the rotated image as a png with GR suffix.
a_file_name = a_file_name.replace('.jpg', 'GR.png')
#image.save('foo.png')
#plt.imsave('foo.png', out_img_batch[0].asnumpy(), cmap='Greys')
plt.imsave(a_file_name, out_img_batch[0].asnumpy(), cmap='gray')


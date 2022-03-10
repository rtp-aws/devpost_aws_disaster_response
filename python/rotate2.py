
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
TOP_DIR='/home/davis/progs/devpost_aws_disaster_response/'
my_print(False, 'TOP_DIR = ', TOP_DIR)
ICY_BRIDGE_DIR = TOP_DIR + 'icy-bridge/'
my_print(False, 'TOP_DIR = ', ICY_BRIDGE_DIR)
MODEL_NAME = 'c6'
MODEL_TOP_DIR = ICY_BRIDGE_DIR + MODEL_NAME + '/'
my_print(False, 'MODEL_TOP_DIR = ', MODEL_TOP_DIR)
MODEL_RAW_IMAGE_DIR = MODEL_TOP_DIR + 'raw/'
MODEL_POST_IMAGE_DIR = MODEL_TOP_DIR + 'post_rotate/'
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

# Make CHW
nd_array_f3201_C3HW = nd.moveaxis(nd_array_f3201_HWC3, 2, 0)


# make batch
in_img_batch = nd_array_f3201_C3HW.expand_dims(axis=0)
print('in_img_batch.shape = ', in_img_batch.shape)




# rotate angle
#the_angle = 0.20*math.pi/180
the_angle = 0.20*180

out_img_batch = mx.image.imrotate(in_img_batch, the_angle, zoom_out=True)





# write the rotated image as a png with R2 suffix to the post rotate crop dir
a_file_name = MODEL_POST_IMAGE_DIR + sys.argv[1]
a_file_name = a_file_name.replace('.jpg', 'R2.png')
print('using ', a_file_name, ' as output file')

# matplotlib requires HWC3 or HWC1
out_img = nd.moveaxis(out_img_batch[0], 0, 2)


#plt.imsave(a_file_name, out_img_batch[0].asnumpy(), cmap='gray')
plt.imsave(a_file_name, out_img.asnumpy())



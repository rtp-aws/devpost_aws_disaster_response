# time to convert with my low level code versus imagemagick


```
$ time convert-im6 ~/progs/devpost_aws_disaster_response/icy-bridge/c6/raw/BUS40_SALEM_20220117Z1740.jpg -rotate 45 -grayscale average foo.png

real	0m0.245s
user	0m0.473s
sys	0m0.017s
```


```
$ time python gray_rotate.py BUS40_SALEM_20220117Z1740.jpg
num params =  2
using  ../icy-bridge/c6/raw/BUS40_SALEM_20220117Z1740.jpg  as input file

real	0m2.251s
user	0m2.350s
sys	0m0.186s
```

image magick doubles the file size and shows the entire image with four white triangles.


Using mx.image.imrotate() api

$ time python gray_rotate2.py BUS40_SALEM_20220117Z1740.jpg
num params =  2
using  ../icy-bridge/c6/raw/BUS40_SALEM_20220117Z1740.jpg  as input file

real	0m2.073s
user	0m2.053s
sys	0m0.191s


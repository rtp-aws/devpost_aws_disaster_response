# Baby steps with the server

After sshing into the server, these are the basic tests


# Activate the conda environment for mxnet_p36

```
source activate mxnet_p36
```

# Test mxnet installation

At bash prompt

```
python
import mxnet as mx
a = mx.nd.array([1,2,3])
a.square()
```

The result is:

```
[1. 4. 9.]
<NDArray 3 @cpu(0)>
```

Exit the interpeter

```
exit()
```

# Start a jupyter notebook

```
jupyter notebook
```

Open the link with the provided access token in the log

# Stop notebook and shutdown the server

Shutdown the server to avoid cpu runtime charges.  Still charged for server size.

* On main page click **stop**
* On instance page in EC2 instance list
    *  Select the instance
    *  Click Actions->State->Stop

# Terminate the server to avoid storage charges.


* On instance page in EC2 instance list
    *  Select the instance
    *  Click Actions->State->terminate




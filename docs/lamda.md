# lambda functions

Rather than try to do this in javascript, lets try to make a python lambda function.

# Intersection over union

## urls

https://stackoverflow.com/questions/25349178/calculating-percentage-of-bounding-box-overlap-for-image-detector-evaluation

https://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection

https://towardsdatascience.com/intersection-over-union-iou-calculation-for-evaluating-an-image-segmentation-model-8b22e2e84686


# Adding numpy to a lambda function

https://stackoverflow.com/questions/46185297/using-numpy-in-aws-lambda

 https://stackoverflow.com/questions/39061041/using-an-api-key-in-amazon-api-gateway


Add a layer and select scipy


# rest api

I'm not worried about this api key being leaked since the lambda function is deleted.
I'm still going to get a warning from github I imagine.

The rest api endpoint:

````
 https://sl9yff7gd9.execute-api.us-east-2.amazonaws.com/default/intersection_over_union
 ```

The api key and form:

```
x-api-key=vjV0eLJT9MLvX8pUAgnT42ZTggO4hI8AvWGqTPh0
```

The sample input data:

```
{
  "at": 1,
  "al": 1,
  "ab": 3,
  "ar": 3,
  "bt": 2,
  "bl": 2,
  "bb": 4,
  "br": 4
}
```

The generic  form for a curl:

```
$ curl -X POST -H "x-api-key:theKey" -H "Content-Type:application/json" -d '{"key":"val"}' https://[api-id].execute-api.[region].amazonaws.com
```

The specific curl format for this rest api:

```
curl -X POST -H "x-api-key:vjV0eLJT9MLvX8pUAgnT42ZTggO4hI8AvWGqTPh0" \
-H "Content-Type:application/json" \
-d '{ "at": 1, "al": 1, "ab": 3, "ar": 3, "bt": 2, "bl": 2, "bb": 4, "br": 4 }' \
https://sl9yff7gd9.execute-api.us-east-2.amazonaws.com
```








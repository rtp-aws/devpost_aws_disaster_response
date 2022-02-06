# lambda functions

Rather than trying to implement `Intersection over union`, in Javascript, lets try to make a python lambda function.

## Intersection over union

IOU is where you calculate the percentage overlap of two bounding boxes.  I intend to use this as a first pass to see if there is ice in the vicinity of the seam or bridge.

### URLs

https://stackoverflow.com/questions/25349178/calculating-percentage-of-bounding-box-overlap-for-image-detector-evaluation

https://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection

https://towardsdatascience.com/intersection-over-union-iou-calculation-for-evaluating-an-image-segmentation-model-8b22e2e84686

## The lambda function proper

Created by choosing the blueprint hello-world-python.

When created it said this:

>Lambda will create an execution role named intersection_over_union-role-906j30uj, 
with permission to upload logs to Amazon CloudWatch Logs.

- [ ] Add destination
- [x] Add trigger for API Gateway

API Type was left at default of `HTTP API`.  The first time I did `REST API`.  According to docs, `HTTP API` is the new thing.  

For security I left it as open.  It has an option for JWT, but I'll revisit after
the hackathon deadline.

Additional API Gateway settings as so:

- [x] Cross-origin resource sharing (CORS)
      
      CORS is required to call your API from a webpage that isn’t hosted on the same domain. This option enables cross-origin resource sharing (CORS) from any domain by adding the Access-Control-Allow-Origin header to all responses.

- [ ] Enable detailed metrics

Lambda will add the necessary permissions for Amazon API Gateway to invoke your Lambda function from this trigger. [Learn more](https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html) about the Lambda permissions model.


### URLs

#### Using an api key

This only applies to the first attempt which was a lambda function of the REST API type.

https://stackoverflow.com/questions/39061041/using-an-api-key-in-amazon-api-gateway


#### Adding numpy to a lambda function

This requires adding a layer and selecting AWS Layer, AWSLambda-Python37-SciPy1x





# REST and the api key

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

The curl for this one is

 https://8n3aw73a3m.execute-api.us-east-1.amazonaws.com/default/intersection_over_union
 
``` 
curl -H "Content-Type:application/json" \
-d '{ "at": 1, "al": 1, "ab": 3, "ar": 3, "bt": 2, "bl": 2, "bb": 4, "br": 4 }' \
https://8n3aw73a3m.execute-api.us-east-1.amazonaws.com/default/intersection_over_union

```



for rest api, no CORScheckbox. 

```
To enable CORS for a REST API, set the Access-Control-Allow-Origin header in the response object that you return from your function code.
```
## REST API version

### Model Schema

```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "at": {
      "description": "a top",
      "type": "integer"
    },
    "al": {
      "description": "a  left",
      "type": "integer"
    },
    "ar": {
      "description": "a right",
      "type": "integer"
    },
    "ab": {
      "description": "a bottom",
      "type": "integer"
    },
    "bt": {
      "description": "b top",
      "type": "integer"
    },
    "bl": {
      "description": "b  left",
      "type": "integer"
    },
    "br": {
      "description": "b r",
      "type": "integer"
    },
    "bb": {
      "description": "b  b",
      "type": "integer"
    }
  },
  "required": [ "at", "al", "ab", "ar", "bt", "bl","bb", "br" ]

}

```

### Code

```
import json

print('Loading function')


def lambda_handler(event, context):


    a_top    = event['at']
    a_left   = event['al']
    a_bottom = event['ab']
    a_right =  event['ar']

    b_top    = event['bt']
    b_left   = event['bl']
    b_bottom = event['bb']
    b_right =  event['br']



    print("a_top = ",a_top)
    print("a_left = ", a_left)
    print("a_bottom = " + str(a_bottom))
    print("a_right = " + str(a_right))

    print("b_top = " + str(b_top))
    print("b_left = " + str(b_left))
    print("b_bottom = " + str(b_bottom))
    print("b_right = " + str(b_right))

    # up is positive
    #result = not ( b_left > a_right or b_right < a_left or b_top < a_bottom or b_bottom > a_top)
    # down is positive
    result = not ( b_left > a_right or b_right < a_left or b_top > a_bottom or b_bottom < a_top)

    print('result is ', result)

    return result

```







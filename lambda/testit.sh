#!/bin/bash

# This will send two bounding boxes
curl https://z94of9zpk4.execute-api.us-east-1.amazonaws.com/dev/overlap/boundingboxes \
-d '[{"top":1,"left":1,"bottom":3,"right":3},{"top":2,"left":2,"bottom":4,"right":4}]' \
-H "Content-Type:application/json"

echo ""


// These are snippets for various tasks


// To get tools.js
// const tools = require('./tools.js')

function data_uri_to_blob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)],{
        type: 'image/png'
    });
}

function get_id() {
    var newDate = new Date();
    return '' + parseInt(newDate.getMonth() + 1) + '-' + newDate.getDate() + '-' + newDate.getFullYear() + '-' + newDate.getTime()
}

function loadXHR(url) {

    return new Promise(function(resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onerror = function() {
                reject("Network error.")
            }
            ;
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject("Loading error:" + xhr.statusText)
                }
            }
            ;
            xhr.send();
        } catch (err) {
            reject(err.message)
        }
    }
    );
}



// To get the string back out from the blob
//
// This requires and async function
// const text = await new Response(blob1).text();
// Console.log(text);
//

download_test_three() {
    console.log('download_test_three()');
    console.log('blob test 1');

}


//
//
//
//

upload_blob() {
    // hack
    console.log('hook to see if we upload to s3');
    var blobData = this.the_blob;
    var fileName = "pix." + get_id() + ".png";
    var params = {
        Key: fileName,
        ContentType: 'image/png',
        Body: blobData
    };

    this.s3.upload(params, function(err, data) {
        console.log(data);
        console.log(err ? 'ERROR!' : 'UPLOADED.');

        var params = {
            Image: {
                S3Object: {
                    Bucket: this.albumBucketName,
                    Name: fileName
                }
            },
            Attributes: ["ALL"]
        };
    })

}

// Turn the canvas image into a dataURL that can be used as a src for our photo.
//var dataURL = hidden_canvas.toDataURL('image/png');
var dataURL = this.camera_feed_img.src;

var img = new Image;
var c = document.createElement("canvas");
var ctx = c.getContext("2d");

img.onload = function() {
    c.width = this.naturalWidth;
    // update canvas size to match image
    c.height = this.naturalHeight;
    ctx.drawImage(this, 0, 0);
    // draw in image
    c.toBlob(function(blob) {
        // get content as JPEG blob
        // here the image is a blob
        this.the_blob = blob;
    }, "image/jpeg", 0.75);
}
;
img.crossOrigin = "Access-Control-Allow-Origin";
// if from different origin
img.src = dataURL;

// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

var blobData = loadXHR('https://cors-anywhere.herokuapp.com/' + dataURL).then(function(blob) {
    // here the image is a blob
    return blob;
});

// Give it up.  Do it this way
// https://stackoverflow.com/questions/42471755/convert-image-into-blob-using-javascript
// using the canvas method
//

var blobData = fetch(dataURL)
                    .then(function(response) {
                        return response.blob()
                    })
                    .then(function(blob) {
                        // here the image is a blob
                        var fileName = "pix." + get_id() + ".png";
                        var params = {
                            Key: fileName,
                            ContentType: 'image/png',
                            Body: blobData
                        };
                        this.s3.upload(params, function(err, data) {
                            console.log(data);
                            console.log(err ? 'ERROR!' : 'UPLOADED.');

                            var params = {
                                Image: {
                                    S3Object: {
                                        Bucket: this.albumBucketName ,
                                        Name: fileName
                                    }
                                },
                                Attributes: ["ALL"]
                            };

                        var rekognition = new AWS.Rekognition();
                        rekognition.detectLabels(params, function(err, data) {
                            if (err)
                                console.log(err, err.stack);
                            else {
                                //rek.innerHTML = myglobals.myApp.library.json.prettyPrint(data);
                                console.log(data);

            //                     const css = [
            //                         "background-image: url(https://example.com)",
            //                         "background-size: cover",
            //                         "height: 100px",
            //                         "padding: 15px",
            //                         "width: 100px"
            //                     ];
            //                     console.log("%cI'm An Image!", css.join(";"));
                            }
                        });

                        return blob;
                                });

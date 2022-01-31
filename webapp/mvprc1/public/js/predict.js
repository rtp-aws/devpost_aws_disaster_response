var AWS = require("aws-sdk");

// function data_uri_to_blob(dataURI) {
//     var binary = atob(dataURI.split(',')[1]);
//     var array = [];
//     for (var i = 0; i < binary.length; i++) {
//         array.push(binary.charCodeAt(i));
//     }
//     return new Blob([new Uint8Array(array)],{
//         type: 'image/png'
//     });
// }

// function get_id() {
//     var newDate = new Date();
//     return '' + parseInt(newDate.getMonth() + 1) + '-' + newDate.getDate() + '-' + newDate.getFullYear() + '-' + newDate.getTime()
// }

// // function loadXHR(url) {

// //     return new Promise(function(resolve, reject) {
// //         try {
// //             var xhr = new XMLHttpRequest();
// //             xhr.open("GET", url);
// //             xhr.responseType = "blob";
// //             xhr.onerror = function() {
// //                 reject("Network error.")
// //             }
// //             ;
// //             xhr.onload = function() {
// //                 if (xhr.status === 200) {
// //                     resolve(xhr.response)
// //                 } else {
// //                     reject("Loading error:" + xhr.statusText)
// //                 }
// //             }
// //             ;
// //             xhr.send();
// //         } catch (err) {
// //             reject(err.message)
// //         }
// //     }
// //     );
// // }

class MvpRc1Predict {

    // These are public object variables?
    // I don't know javascript.  Down below I get them? WTF?
    slider;
    canvas;
    ctx;
    camera_feed_img;
    //    s3;
    //    the_blob;

    /////////////////////////////////////////////////////////////////
    // PREDICT radio buttons
    /////////////////////////////////////////////////////////////////
    //
    // hmm, you can't specify var or const but you can specify and assign
    // in one step.  Then not use this.  Is this the method for specifying
    // a class variable in javascript?

    TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
    I40W_MM8 = document.getElementById("I40W_MM8");
    I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
    I26_BROADWAY = document.getElementById("I26_BROADWAY");
    TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
    TOLL147_NC54 = document.getElementById("TOLL147_NC54");
    TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");

    // I had these original as global const.  I wonder how to do this
    // with the pedantic class member variables above?
    slider = document.getElementById("slider");
    canvas = document.getElementById("my_canvas");
    predict_btn = document.getElementById('predict-btn');

    // This was a var and not a const?
    ctx = this.canvas.getContext("2d");

    // The camera feed img
    // This was a var and not a const?
    camera_feed_img = document.getElementsByClassName("camera_feed")[0];

    // the constructor
    constructor() {
        console.log("MvpRc1Predict:Constructor() ");
        this.add_listeners();
    }

    // erase the canvas
    erase_canvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
    // erase_canvas end

    add_listeners() {

        TOLL147_DAVIS_DR.addEventListener('click', button => {
            console.log("TOLL147_DAVIS_DR: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
            this.erase_canvas();
        }
        );

        I40W_MM8.addEventListener('click', button => {
            console.log("I40W_MM8: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg"
            this.erase_canvas();
        }
        );

        I440_US64_Bypass.addEventListener('click', button => {
            console.log("I440_US64_Bypass: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG"
            this.erase_canvas();
        }
        );

        I26_BROADWAY.addEventListener('click', button => {
            console.log("I26_BROADWAY: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
            this.erase_canvas();
        }
        );

        TOLL147_HOPSON_RD.addEventListener('click', button => {
            console.log("TOLL147_HOPSON_RD: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG"
            this.erase_canvas();
        }
        );

        TOLL147_NC54.addEventListener('click', button => {
            console.log("TOLL147_NC54: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG"
            this.erase_canvas();
        }
        );

        TOLL54_APEXBBQ.addEventListener('click', button => {
            console.log("TOLL54_APEXBBQ: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG"
            this.erase_canvas();
        }
        );

        TOLL540_TOLL147.addEventListener('click', button => {
            console.log("TOLL540_TOLL147: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Toll147.JPG"
            this.erase_canvas();
        }
        );

        TOLL540_NC55.addEventListener('click', button => {
            console.log("TOLL540_NC55: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC55.JPG"
            this.erase_canvas();
        }
        );

        TOLL540_MCCRIMMON.addEventListener('click', button => {
            console.log("TOLL540_MCCRIMMON: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_McCrimmonRd.jpg"
            this.erase_canvas();
        }
        );

        I40_DAVIS_DR.addEventListener( 'click', button => {
            console.log("I40_DAVIS_DR: click() %o ", button);
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg"
            this.erase_canvas();
        }
        );

        // Control is the slider
        this.slider.addEventListener('click', button =>{
            console.log("slider: click() value is %o %o", this.slider.checked, button);
            if (this.slider.checked) {
                this.camera_feed_img.style.maxWidth = "";
                this.camera_feed_img.style.maxHeight = "";

            } else {
                this.camera_feed_img.style.maxWidth = "200px";
                this.camera_feed_img.style.maxHeight = "200px";
            }
            this.erase_canvas();
        }
        );
        // slider end

    }
    // add_listeners end

    // json version
    async fetch_myconfig() {

        console.log('MyApp: getJSON()');
        return await fetch('/myconfig').then((response)=>response.json()).then((responseJson)=>{
            this.bucketRegion = responseJson.bucketRegion;
            this.identityPoolId = responseJson.identityPoolId;
            this.albumBucketName = responseJson.albumBucketName;
            console.log("region: %s  poolId: %s  bucket: %s", this.bucketRegion, this.identityPoolId, this.albumBucketName);

            AWS.config.update({
                region: this.bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: this.identityPoolId
                })
            });

            this.s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {
                    Bucket: this.albumBucketName
                }
            });

            console.log("Region: ", AWS.config.region);

            return responseJson;
        }
        ); // then END
    };

    async do_my_init() {
        console.log('MyApp: do_init()')

        var msg = await this.fetch_myconfig();
        console.log(msg);
    }
    // do_my)init END



    download_test_one() {
        console.log('download_test_one()');

        //var the_url = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg';
        // This url fails with:
        // Access to fetch at
        //  'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg'
        //  from origin 'https://mvprc1.rtp-aws.org' has been blocked by
        //  CORS policy: No 'Access-Control-Allow-Origin'
        //  header is present on the requested resource.
        //  If an opaque response serves your needs,
        //  set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
        //
        //  predict_bundle.js:255660 GET https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg
        //  net::ERR_FAILED 200

        var the_url = 'https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg';
        // This url works though:

        // Gets the response and returns it as a blob
        fetch(the_url).then(res=>res.blob()).then(blob=>{
            // Here's where you get access to the blob
            // And you can use it for whatever you want
            // Like calling ref().put(blob)

            // Here, I use it to make an image appear on the page
            let objectURL = URL.createObjectURL(blob);
            let myImage = new Image();
            myImage.src = objectURL;
            document.getElementById('predict_img').appendChild(myImage);
        }
        );
    }
    // download test end

    download_test_two() {
        console.log('download_test_two()');

    }
    // download test end


}
// class end


        // from this website
        // https://javascript.info/blob

        // Create a Blob from a string
//         let blob0 = new Blob(["<html>...</html>"],{
//             type: 'text/html'
//         });
        // please note: the first argument must be an array [..]

        // create a Blob from a typed array and strings
//         let hello = new Uint8Array([72, 101, 108, 108, 111]);
//         // Hello in decimal Ascii
//         let blob1 = new Blob([hello, ' ', 'world'],{
//             type: 'text/plain'
//         });
        // we can extract Blob slices with:
        //blob.slice([byteStart],[byteEnd],[contentType])
        //
        // byteStart - starting byte. defaul is 0
        // byteEnd - the last byte (exclusive, by default is till end)
        // contentType - the type of new blob, by default identicial as source
        //
        // The args are similar to array.slice, negative numbers are allowed too
        //
        // Blob objects are immutable
        // We can’t change data directly in a Blob, but we can slice parts of a
        // Blob, create new Blob objects from them, mix them into a new Blob
        // and so on.
        //
        // This behavior is similar to JavaScript strings: we can’t change a
        // character in a string, but we can make a new corrected string.

        // To get the string back out from the blob
        //
        // This requires and async function
        //const text = await new Response(blob1).text();
        //Console.log(text);
        //
        // These require the function in this class.
        //
        //console.log(this.blob_to_string(blob0));
        //console.log(this.blob_to_string(blob1));







//     download_test_three() {
//         console.log('download_test_three()');
//         console.log('blob test 1');

//     }
    // download test end








// //     upload_blob() {
// //         // hack
// //         console.log('hook to see if we upload to s3');
// //         var blobData = this.the_blob;
// //         var fileName = "pix." + get_id() + ".png";
// //         var params = {
// //             Key: fileName,
// //             ContentType: 'image/png',
// //             Body: blobData
// //         };

// //         this.s3.upload(params, function(err, data) {
// //             console.log(data);
// //             console.log(err ? 'ERROR!' : 'UPLOADED.');

// //             var params = {
// //                 Image: {
// //                     S3Object: {
// //                         Bucket: this.albumBucketName,
// //                         Name: fileName
// //                     }
// //                 },
// //                 Attributes: ["ALL"]
// //             };
// //         })

// //     }

//             // Turn the canvas image into a dataURL that can be used as a src for our photo.
//             //var dataURL = hidden_canvas.toDataURL('image/png');
//             var dataURL = this.camera_feed_img.src;

//             var img = new Image;
//             var c = document.createElement("canvas");
//             var ctx = c.getContext("2d");

//             img.onload = function() {
//                 c.width = this.naturalWidth;
//                 // update canvas size to match image
//                 c.height = this.naturalHeight;
//                 ctx.drawImage(this, 0, 0);
//                 // draw in image
//                 c.toBlob(function(blob) {
//                     // get content as JPEG blob
//                     // here the image is a blob
//                     this.the_blob = blob;
//                 }, "image/jpeg", 0.75);
//             }
//             ;
//             img.crossOrigin = "Access-Control-Allow-Origin";
//             // if from different origin
//             img.src = dataURL;

// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

//             var blobData = loadXHR('https://cors-anywhere.herokuapp.com/' + dataURL).then(function(blob) {
//                 // here the image is a blob
//                 return blob;
//             });

// Give it up.  Do it this way
// https://stackoverflow.com/questions/42471755/convert-image-into-blob-using-javascript
// using the canvas method
//

//             var blobData = fetch(dataURL)
//                                 .then(function(response) {
//                                     return response.blob()
//                                 })
//                                 .then(function(blob) {
//                                     // here the image is a blob
//                                     var fileName = "pix." + get_id() + ".png";
//                                     var params = {
//                                         Key: fileName,
//                                         ContentType: 'image/png',
//                                         Body: blobData
//                                     };
//                                     this.s3.upload(params, function(err, data) {
//                                         console.log(data);
//                                         console.log(err ? 'ERROR!' : 'UPLOADED.');

//                                         var params = {
//                                             Image: {
//                                                 S3Object: {
//                                                     Bucket: this.albumBucketName ,
//                                                     Name: fileName
//                                                 }
//                                             },
//                                             Attributes: ["ALL"]
//                                         };

//                                     var rekognition = new AWS.Rekognition();
//                                     rekognition.detectLabels(params, function(err, data) {
//                                         if (err)
//                                             console.log(err, err.stack);
//                                         else {
//                                             //rek.innerHTML = myglobals.myApp.library.json.prettyPrint(data);
//                                             console.log(data);

//                         //                     const css = [
//                         //                         "background-image: url(https://example.com)",
//                         //                         "background-size: cover",
//                         //                         "height: 100px",
//                         //                         "padding: 15px",
//                         //                         "width: 100px"
//                         //                     ];
//                         //                     console.log("%cI'm An Image!", css.join(";"));
//                                         }
//                                     });

//                                     return blob;
//                                 });

// control is the predict button
//         this.predict_btn.addEventListener('click', button=>{
//             console.log("predict_btn: click() value is %o", this.predict_btn);

//             //this.download_test_one();
//             //this.download_test_two();
//             this.download_test_three();
//             //this.download_test_one();
//             //this.download_test_one();
//             //this.download_test_one();

//         }
//         )
// predict_btn on click end

//     //     blob_to_string(b) {
//     //         var u, x;
//     //         u = URL.createObjectURL(b);
//     //         x = new XMLHttpRequest();
//     //         x.open('GET', u, false); // although sync, you're not fetching over internet
//     //         x.send();
//     //         URL.revokeObjectURL(u);
//     //         return x.responseText;
//     //     }

// Build class with some of these specified?
const mvprc1predict = new MvpRc1Predict();
mvprc1predict.do_my_init();

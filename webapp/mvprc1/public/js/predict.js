var AWS = require("aws-sdk");

// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//   }
// });

// hmm, so the environment variables do not work
console.log("Region: ", AWS.config.region);
//console.log("Access key:", AWS.config.credentials.accessKeyId);


function display_error_message(error_msg, error) {
    error = error || "";
    if (error) {
        console.error(error);
    }

    error_message.innerText = error_msg;

    hideUI();
    error_message.classList.add("visible");
}

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
            xhr.onerror = function() {reject("Network error.")};
            xhr.onload = function() {
                if (xhr.status === 200) {resolve(xhr.response)}
                else {reject("Loading error:" + xhr.statusText)}
            };
            xhr.send();
        }
        catch(err) {reject(err.message)}
    });
}




class MvpRc1Predict {

    // These are public object variables?
    // I don't know javascript.  Down below I get them? WTF?
    slider;
    canvas;
    ctx;
    camera_feed_img;
    s3;

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

    add_listeners() {

        TOLL147_DAVIS_DR.addEventListener('click', button=>{
            console.log("TOLL147_DAVIS_DR: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
            this.erase_canvas();
        }
        )

        I40W_MM8.addEventListener('click', button=>{
            console.log("I40W_MM8: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg"
            this.erase_canvas();
        }
        )

        I440_US64_Bypass.addEventListener('click', button=>{
            console.log("I440_US64_Bypass: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG"
            this.erase_canvas();
        }
        )

        I26_BROADWAY.addEventListener('click', button=>{
            console.log("I26_BROADWAY: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
            this.erase_canvas();
        }
        )

        TOLL147_HOPSON_RD.addEventListener('click', button=>{
            console.log("TOLL147_HOPSON_RD: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG"
            this.erase_canvas();
        }
        )

        TOLL147_NC54.addEventListener('click', button=>{
            console.log("TOLL147_NC54: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG"
            this.erase_canvas();
        }
        )

        TOLL54_APEXBBQ.addEventListener('click', button=>{
            console.log("TOLL54_APEXBBQ: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_TOLL147.addEventListener('click', button=>{
            console.log("TOLL540_TOLL147: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Toll147.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_NC55.addEventListener('click', button=>{
            console.log("TOLL540_NC55: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC55.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_MCCRIMMON.addEventListener('click', button=>{
            console.log("TOLL540_MCCRIMMON: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_McCrimmonRd.jpg"
            this.erase_canvas();
        }
        )

        I40_DAVIS_DR.addEventListener('click', button=>{
            console.log("I40_DAVIS_DR: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg"
            this.erase_canvas();

            // Turn the canvas image into a dataURL that can be used as a src for our photo.
            //var dataURL = hidden_canvas.toDataURL('image/png');
            var dataURL = this.camera_feed_img.src;


            // https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

//             var blobData = loadXHR('https://cors-anywhere.herokuapp.com/' + dataURL).then(function(blob) {
//                 // here the image is a blob
//                 return blob;
//             });


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




//             //var blobData = data_uri_to_blob(dataURL);
//             var fileName = "pix." + get_id() + ".png";
//             var params = {
//                 Key: fileName,
//                 ContentType: 'image/png',
//                 Body: blobData
//             };
//             this.s3.upload(params, function(err, data) {
//                 console.log(data);
//                 console.log(err ? 'ERROR!' : 'UPLOADED.');

//                 var params = {
//                     Image: {
//                         S3Object: {
//                             Bucket: this.albumBucketName ,
//                             Name: fileName
//                         }
//                     },
//                     Attributes: ["ALL"]
//                 };

//             var rekognition = new AWS.Rekognition();
//             rekognition.detectLabels(params, function(err, data) {
//                 if (err)
//                     console.log(err, err.stack);
//                 else {
//                     //rek.innerHTML = myglobals.myApp.library.json.prettyPrint(data);
//                     console.log(data);


// //                     const css = [
// //                         "background-image: url(https://example.com)",
// //                         "background-size: cover",
// //                         "height: 100px",
// //                         "padding: 15px",
// //                         "width: 100px"
// //                     ];
// //                     console.log("%cI'm An Image!", css.join(";"));
//                 }
//             });

        });


        }
        )

        // Control is the slider
        this.slider.addEventListener('click', button=>{
            console.log("slider: click() value is %o", this.slider.checked);
            if (this.slider.checked) {
                this.camera_feed_img.style.maxWidth = "";
                this.camera_feed_img.style.maxHeight = "";

            } else {
                this.camera_feed_img.style.maxWidth = "200px";
                this.camera_feed_img.style.maxHeight = "200px";
            }
            this.erase_canvas();
        }
        )
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
        );
    }

    async do_my_init() {
        console.log('MyApp: do_init()')

        var msg = await this.fetch_myconfig();
        console.log(msg);
    }

}
// class end

// Build class with some of these specified?
const mvprc1predict = new MvpRc1Predict()
mvprc1predict.do_my_init();

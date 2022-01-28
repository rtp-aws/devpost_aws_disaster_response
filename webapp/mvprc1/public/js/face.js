// this is a comment


var myglobals = {
  // video is a variable
  video: true

}

//var video;
var image;
var start_camera;
var controls;
var take_photo_btn;
var delete_photo_btn;
var download_photo_btn;
var error_message;
var rek;





function setWidgets() {

  // References in the myglobals struct/namespace
  myglobals.video = document.querySelector('#camera-stream');

  // References in the global namespace
  //video = document.querySelector('#camera-stream');
  image = document.querySelector('#snap');
  start_camera = document.querySelector('#start-camera');
  controls = document.querySelector('.controls');
  take_photo_btn = document.querySelector('#take-photo');
  delete_photo_btn = document.querySelector('#delete-photo');
  download_photo_btn = document.querySelector('#download-photo');
  error_message = document.querySelector('#error-message');
  rek = document.querySelector('#rek');



  // The getUserMedia interface is used for handling camera input.
  // Some browsers need a prefix so here we're covering all the options
  navigator.getMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);


  if (!navigator.getMedia) {
      displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
      return;
  }

  // Request the camera.
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  navigator.getMedia({
          // This is a parameter constraint. it can be video and/or audio
          video: true,
      },
      // Success Callback
      function(stream) {
          //var video = document.querySelector('#camera-stream');

          // Create an object URL for the video stream and
          // set it as src of our HTLM video element.
          //video.src = window.URL.createObjectURL(stream);

          //updated (and tested) to run on Chrome Version 76.0.3809.132 (Official Build) (64-bit)
          myglobals.video.srcObject = stream;

          // Play the video element to start the stream.
          myglobals.video.play();
          myglobals.video.onplay = function() {
              showVideo();
          };

      },
      // Error Callback
      function(err) {
          displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
      }




  );  // SetWidgets.navigator.getMedia



} // SetWidgets



function modify_library() {
  if (!library) {
    var library = {};
  }

  library.json = {
      replacer: function(match, pIndent, pKey, pVal, pEnd) {
          var key = '<span class=json-key>';
          var val = '<span class=json-value>';
          var str = '<span class=json-string>';
          var r = pIndent || '';
          if (pKey)
              r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
          if (pVal)
              r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
          return r + (pEnd || '');
      },
      prettyPrint: function(obj) {
          var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
          return JSON.stringify(obj, null, 3)
              .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
              .replace(/</g, '&lt;').replace(/>/g, '&gt;')
              .replace(jsonLine, library.json.replacer);
      }
  };

}

function showVideo() {
    // Display the video stream and the controls.

    hideUI();
    myglobals.video.classList.add("visible");
    controls.classList.add("visible");
}


function hideUI() {
    // Helper function for clearing the app UI.

    controls.classList.remove("visible");
    start_camera.classList.remove("visible");
    myglobals.video.classList.remove("visible");
    snap.classList.remove("visible");
    error_message.classList.remove("visible");
}




function  startCamera() {
  // Mobile browsers cannot play video without user input,
  // so here we're using a button to start it manually.
  this.start_camera.addEventListener("click", function(e) {

      e.preventDefault();

      // Start video playback manually.
      video.play();
      showVideo();

  });

}







///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// class
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


class MyApp {

  albumBucketName;
  bucketRegion;
  identityPoolId;


  constructor() {
    console.log('MyApp: constructor()')
    this.albumBucketName = '';
    this.bucketRegion = '';
    this.identityPoolId = '';
  }

  async getJSON() {
      console.log('MyApp: getJSON()');
      return await fetch('/config.json')
          .then((response)=>response.json())
          .then((responseJson)=>{return responseJson});
  }


  async caller() {
    console.log('MyApp: caller()');
    const json = await this.getJSON();  // command waits until completion
    //const json = await readJSON2();  // command waits until completion
    //console.log(json.hello);            // hello is now available
    console.log(json);            // hello is now available
  }

  doit4(jsonthing) {
    console.log("MyApp: doit4()")
    while(false) {
      //sleep(5);
      console.log(jsonthing);
    }
  }



  doit() {
    console.log('MyApp: doit()')

    var jsonthing = this.caller();
    setWidgets();
    console.log(jsonthing);
    this.doit4(jsonthing);
  }








  //const sleep = (seconds) => {
  //    const waitUntil = new Date().getTime() + seconds * 1000
  //    while(new Date().getTime() < waitUntil) {
  //        // do nothing
  //    }
  //}

} // MyApp



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// entry point
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {

  console.log("wait1");
  console.log("wait2");
  console.log("wait3");


  const myApp = new MyApp();
  myApp.doit();

});

/*
  function doit() {
    //var albumBucketName = // 'S3_BUCKET_NAME_HERE';
    //var bucketRegion = // 'S3_BUCKET_REGION_HERE';
    //var IdentityPoolId = // 'IDENTITYPOOLID_HERE';

    var albumBucketName = 'cloudacademy-rek'; // 'S3_BUCKET_NAME_HERE';
    var bucketRegion = 'us-east-1'; // 'S3_BUCKET_REGION_HERE';
    var IdentityPoolId = 'us-east-1:44456c50-199b-4fe8-8ec5-8337b329051b';   // 'IDENTITYPOOLID_HERE';




    //AWS.config.loadFromPath('aws-config1.json');
    //AWS.CognitoIdentityCredentials.loadFromPath('aws-config2.json');
    //AWS.S3.loadFromPath('aws-config3.json')


  //  AWS.config.update({
  //      region: bucketRegion,
  //      credentials: new AWS.CognitoIdentityCredentials({
  //          IdentityPoolId: IdentityPoolId
  //      })
  //  });

    var s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: albumBucketName }
    });







    take_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        var snap = takeSnapshot();

        // Show image.
        image.setAttribute('src', snap);
        image.classList.add("visible");

        // Enable delete and save buttons
        delete_photo_btn.classList.remove("disabled");
        download_photo_btn.classList.remove("disabled");

        // Set the href attribute of the download button to the snap url.
        download_photo_btn.href = snap;

        // Pause video playback of stream.
        video.pause();

    });


    delete_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        // Hide image.
        image.setAttribute('src', "");
        image.classList.remove("visible");

        // Disable delete and save buttons
        delete_photo_btn.classList.add("disabled");
        download_photo_btn.classList.add("disabled");

        // Resume playback of stream.
        video.play();

    });






    function takeSnapshot() {
        // Here we're using a trick that involves a hidden canvas element.

        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');

        var width = video.videoWidth,
            height = video.videoHeight;

        if (width && height) {

            // Setup a canvas with the same dimensions as the video.
            hidden_canvas.width = width;
            hidden_canvas.height = height;

            // Make a copy of the current frame in the video on the canvas.
            context.drawImage(video, 0, 0, width, height);

            // Turn the canvas image into a dataURL that can be used as a src for our photo.
            var dataURL = hidden_canvas.toDataURL('image/png');
            var blobData = dataURItoBlob(dataURL);
            var fileName = "pix." + getId() + ".png";
            var params = { Key: fileName, ContentType: 'image/png', Body: blobData };
            s3.upload(params, function(err, data) {
                console.log(data);
                console.log(err ? 'ERROR!' : 'UPLOADED.');

                var params = {
                    Image: {
                        S3Object: {
                            Bucket: albumBucketName,
                            Name: fileName
                        }
                    },
                    Attributes: [
                        "ALL"
                    ]
                };

                var rekognition = new AWS.Rekognition();
                rekognition.detectFaces(params, function(err, data) {
                    if (err)
                        console.log(err, err.stack);
                    else {
                        rek.innerHTML = library.json.prettyPrint(data);
                    }
                });

            });

            return dataURL
        }
    }


    function displayErrorMessage(error_msg, error) {
        error = error || "";
        if (error) {
            console.error(error);
        }

        error_message.innerText = error_msg;

        hideUI();
        error_message.classList.add("visible");
    }


    function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/png' });
    }

    function getId() {
        var newDate = new Date();
        return '' + parseInt(newDate.getMonth() + 1) + '-' + newDate.getDate() + '-' + newDate.getFullYear() + '-' + newDate.getTime()
    }
}
*/

//});  // end document.addEventListener


//async function readJSON2() {
  // http://localhost:8080
  //fetch('/config/aws-config.json')
  //fetch('https://mvprc1.rtp-aws.org/config')
  //console.log("readJSON2")
  //fetch('/config.json')
  //.then(response => {
  //  console.log("one");
  //   if (!response.ok) {
  //       throw new Error("HTTP error " + response.status);
  //   }
  //   return response.json();
  //})
  //.then(json => {
  //   this.users = json;
  //   console.log("two");
  //   console.log(this.users);
  //})
  //.catch(function () {
  //   this.dataError = true;
  //   console.log("three");
  //   console.log(this.users);
  //})
//}


//  if (!jsonthing.promise) {
//    console.log('jsonthing.promise is null?')
//    jsonthing.promise = doit3();
//    jsonthing.promise.catch(() => {}).then(() => { jsonthing.promise.done = true; });
    //retVal = true;
//  }

//   if ( jsonthing.promise.done ) {
//       console.log('promise done')
//       this.promise.catch(() => {}).then(() => { this.promise.done = true; });
//       retVal = true;
//   }

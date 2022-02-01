var AWS = require('aws-sdk')

// see https://www.npmjs.com/package/node-fetch
// requires npm install node-fetch@2
const fetch = require('node-fetch')

// To get tools.js
// const tools = require('./tools.js')

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
  // the constructor
  constructor () {
    console.log('MvpRc1Predict:Constructor()')

    /// //////////////////////////////////////////////////////////////
    // PREDICT radio buttons
    /// //////////////////////////////////////////////////////////////
    //
    // hmm, you can't specify var or const but you can specify and assign
    // in one step.  Then not use this.  Is this the method for specifying
    // a class variable in javascript?
    const TOLL147_DAVIS_DR = document.getElementById('TOLL147_DAVIS_DR')
    const I40W_MM8 = document.getElementById('I40W_MM8')
    const I440_US64_BYPASS = document.getElementById('I440_US64_Bypass')
    const I26_BROADWAY = document.getElementById('I26_BROADWAY')
    const TOLL147_HOPSON_RD = document.getElementById('TOLL147_HOPSON_RD')
    const TOLL147_NC54 = document.getElementById('TOLL147_NC54')
    const TOLL54_APEXBBQ = document.getElementById('TOLL54_APEXBBQ')

    // I had these original as global const.  I wonder how to do this
    // with the pedantic class member variables above?
    const slider = document.getElementById('slider')
    var canvas = document.getElementById('my_canvas')
    // const predictBtn = document.getElementById('predict-btn')

    // This was a var and not a const?
    var ctx = canvas.getContext('2d')

    // The camera feed img
    // This was a var and not a const?
    var cameraFeedImg = document.getElementsByClassName('camera_feed')[0]

    console.log(TOLL147_DAVIS_DR)
    console.log(I40W_MM8)
    console.log(I440_US64_BYPASS)
    console.log(I26_BROADWAY)
    console.log(TOLL147_HOPSON_RD)
    console.log(TOLL147_NC54)
    console.log(TOLL54_APEXBBQ)
    console.log(slider)
    console.log(canvas)
    // console.log(predictBtn)
    console.log(ctx)
    console.log(cameraFeedImg)
    console.log()
    console.log()
    this.addListeners()
  }

  // erase the canvas
  eraseCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  // erase_canvas end

  addListeners () {
    TOLL147_DAVIS_DR.addEventListener('click', button => {
      console.log('TOLL147_DAVIS_DR: click() %o %o', button, this.TOLL147_DAVIS_DR)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG'
      this.eraseCanvas()
    }
    )

    I40W_MM8.addEventListener('click', button => {
      console.log('I40W_MM8: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg'
      this.eraseCanvas()
    }
    )

    I440_US64_Bypass.addEventListener('click', button => {
      console.log('I440_US64_Bypass: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG'
      this.eraseCanvas()
    }
    )

    I26_BROADWAY.addEventListener('click', button => {
      console.log('I26_BROADWAY: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg'
      this.eraseCanvas()
    }
    )

    TOLL147_HOPSON_RD.addEventListener('click', button => {
      console.log('TOLL147_HOPSON_RD: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG'
      this.eraseCanvas()
    }
    )

    TOLL147_NC54.addEventListener('click', button => {
      console.log('TOLL147_NC54: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG'
      this.eraseCanvas()
    }
    )

    TOLL54_APEXBBQ.addEventListener('click', button => {
      console.log('TOLL54_APEXBBQ: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG'
      this.eraseCanvas()
    }
    )

    TOLL540_TOLL147.addEventListener('click', button => {
      console.log('TOLL540_TOLL147: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Toll147.JPG'
      this.eraseCanvas()
    }
    )

    TOLL540_NC55.addEventListener('click', button => {
      console.log('TOLL540_NC55: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC55.JPG'
      this.eraseCanvas()
    }
    )

    TOLL540_MCCRIMMON.addEventListener('click', button => {
      console.log('TOLL540_MCCRIMMON: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_McCrimmonRd.jpg'
      this.eraseCanvas()
    }
    )

    I40_DAVIS_DR.addEventListener('click', button => {
      console.log('I40_DAVIS_DR: click() %o ', button)
      this.cameraFeedImg.src = 'https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg'
      this.eraseCanvas()
    }
    )

    // Control is the slider
    slider.addEventListener('click', button => {
      console.log('slider: click() value is %o %o', slider.checked, button)
      if (this.slider.checked) {
        this.cameraFeedImg.style.maxWidth = ''
        this.cameraFeedImg.style.maxHeight = ''
      } else {
        this.cameraFeedImg.style.maxWidth = '200px'
        this.cameraFeedImg.style.maxHeight = '200px'
      }
      this.eraseCanvas()
    }
    )
    // slider end
  }
  // add_listeners end

  // json version
  async fetchMyConfig () {
    console.log('MyApp: getJSON()')
    return await fetch('/myconfig').then((response) => response.json()).then((responseJson) => {
      this.bucketRegion = responseJson.bucketRegion
      this.identityPoolId = responseJson.identityPoolId
      this.albumBucketName = responseJson.albumBucketName
      console.log('region: %s  poolId: %s  bucket: %s', this.bucketRegion, this.identityPoolId, this.albumBucketName)

      AWS.config.update({
        region: this.bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: this.identityPoolId
        })
      })

      this.s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {
          Bucket: this.albumBucketName
        }
      })

      console.log('Region: ', AWS.config.region)

      return responseJson
    }
    ) // then END
  }

  async doMyInit () {
    console.log('MyApp: do_init()')

    var msg = await this.fetchMyConfig()
    console.log(msg)
  }
  // do_my)init END
}

// Build class with some of these specified?
const mvprc1predict = new MvpRc1Predict()
mvprc1predict.doMyInit()

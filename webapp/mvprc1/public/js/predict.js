var AWS = require('aws-sdk')

// see https://www.npmjs.com/package/node-fetch
// requires npm install node-fetch@2
const fetch = require('node-fetch')


/// //////////////////////////////////////////////////////////////
// PREDICT radio buttons
/// //////////////////////////////////////////////////////////////
//
// hmm, you can't specify var or const but you can specify and assign
// in one step.  Then not use   Is this the method for specifying
// a class variable in javascript?
const TOLL147_DAVIS_DR = document.getElementById('TOLL147_DAVIS_DR')
const I40W_MM8 = document.getElementById('I40W_MM8')
const I440_US64_BYPASS = document.getElementById('I440_US64_Bypass')
const I26_BROADWAY = document.getElementById('I26_BROADWAY')
const TOLL147_HOPSON_RD = document.getElementById('TOLL147_HOPSON_RD')
const TOLL147_NC54 = document.getElementById('TOLL147_NC54')
const TOLL54_APEXBBQ = document.getElementById('TOLL54_APEXBBQ')
const TOLL540_TOLL147 = document.getElementById('TOLL540_TOLL147')
const TOLL540_NC55 = document.getElementById('TOLL540_NC55')
const TOLL540_MCCRIMMON = document.getElementById('TOLL540_MCCRIMMON')
const I40_DAVIS_DR = document.getElementById('I40_DAVIS_DR')

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

const baseCameraURL = 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename='

// AWS Creds
var bucketRegion = ''
var identityPoolId = ''
var albumBucketName = ''

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

// erase the canvas
function eraseCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
// erase_canvas end

TOLL147_DAVIS_DR.addEventListener('click', button => {
  console.log('TOLL147_DAVIS_DR: click() %o %o', button, TOLL147_DAVIS_DR)
  cameraFeedImg.src = baseCameraURL + 'Toll147_DavisDr.JPG'
  eraseCanvas()
}
)

I40W_MM8.addEventListener('click', button => {
  console.log('I40W_MM8: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'I40W_mm8.jpg'
  eraseCanvas()
}
)

I440_US64_BYPASS.addEventListener('click', button => {
  console.log('I440_US64_Bypass: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'I440_I87.JPG'
  eraseCanvas()
}
)

I26_BROADWAY.addEventListener('click', button => {
  console.log('I26_BROADWAY: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'I26_Broadway.jpg'
  eraseCanvas()
}
)

TOLL147_HOPSON_RD.addEventListener('click', button => {
  console.log('TOLL147_HOPSON_RD: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll147_HopsonRd.JPG'
  eraseCanvas()
}
)

TOLL147_NC54.addEventListener('click', button => {
  console.log('TOLL147_NC54: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll147_NC54.JPG'
  eraseCanvas()
}
)

TOLL54_APEXBBQ.addEventListener('click', button => {
  console.log('TOLL54_APEXBBQ: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll540_Apex-BBQ.JPG'
  eraseCanvas()
}
)

TOLL540_TOLL147.addEventListener('click', button => {
  console.log('TOLL540_TOLL147: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll540_Toll147.JPG'
  eraseCanvas()
}
)

TOLL540_NC55.addEventListener('click', button => {
  console.log('TOLL540_NC55: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll540_NC55.JPG'
  eraseCanvas()
}
)

TOLL540_MCCRIMMON.addEventListener('click', button => {
  console.log('TOLL540_MCCRIMMON: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'Toll540_McCrimmonRd.jpg'
  eraseCanvas()
}
)

I40_DAVIS_DR.addEventListener('click', button => {
  console.log('I40_DAVIS_DR: click() %o ', button)
  cameraFeedImg.src = baseCameraURL + 'I40_DavisDr.jpg'
  eraseCanvas()
}
)

// Control is the slider
slider.addEventListener('click', button => {
  console.log('slider: click() value is %o %o', slider.checked, button)
  if (slider.checked) {
    cameraFeedImg.style.maxWidth = ''
    cameraFeedImg.style.maxHeight = ''
  } else {
    cameraFeedImg.style.maxWidth = '200px'
    cameraFeedImg.style.maxHeight = '200px'
  }
  eraseCanvas()
}
)
// slider end

async function fetchMyConfig () {
  console.log('MyApp: getJSON()')
  return await fetch('/myconfig').then((response) => response.json()).then((responseJson) => {
    bucketRegion = responseJson.bucketRegion
    identityPoolId = responseJson.identityPoolId
    albumBucketName = responseJson.albumBucketName
    //console.log('region: %s  poolId: %s  bucket: %s', bucketRegion, identityPoolId, albumBucketName)

    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId
      })
    })

    var s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {
        Bucket: albumBucketName
      }
    })

    console.log('s3: ', s3)

    console.log('Region: ', AWS.config.region)

    return responseJson
  }
  ) // then END
}

async function doMyInit () {
  console.log('MyApp: do_init()')

  var msg = await fetchMyConfig()
  console.log(msg)
}
// do_my)init END


function uploadBlob(blobData) {
    // hack
    console.log('hook to see if we upload to s3');
    //var blobData = this.the_blob;
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
// uploadBlob() end




doMyInit()

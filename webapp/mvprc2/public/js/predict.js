// AWS Creds
var bucketRegion = ''
var identityPoolId = ''
var albumBucketName = ''

// globals why not?
var s3 = null
var gFileName = null
var gParams = null
var gRekResult = null



async function fetchMyConfig() {
    console.log('MyApp: getJSON()')
    return await fetch('/myconfig').then((response)=>response.json()).then((responseJson)=>{
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

        s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: {
                Bucket: albumBucketName
            }
        })

        console.log('s3: ', s3)

        console.log('Region: ', AWS.config.region)

        return s3
    }
    )
    // then END
}
// fetchMyConfig() END




async function doMyS3Init() {
    console.log('doMyS3Init()')

    s3 = await fetchMyConfig()
    //console.log(msg)
}
// doMyInit() END




function blobToString(b) {
    var u
    var x
    u = URL.createObjectURL(b)
    x = new XMLHttpRequest()
    // although sync, you're not fetching over internet
    x.open('GET', u, false);
    x.send();
    URL.revokeObjectURL(u);
    return x.responseText;
}




function uploadCallback(err, data) {

    var params = {
        Image: {
            S3Object: {
                Bucket: albumBucketName,
                Name: gFileName
            }
        },
        MaxLabels: 100,
        MinConfidence: 70
    };
    
    performRekognition(params, data)
    
}




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

      
    console.log('s3 %o', s3)

    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

    // Set the globals
    gParams = params
    gFileName = fileName
    
    s3.upload(params, uploadCallback)

}
// uploadBlob() end

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function rekCallback(err, data) {

    if (err)
        console.log(err, err.stack)
    else {
        gRekResult = data

        var mainContainer = document.getElementById('prediction_result')
        // erase existing entries if present
        removeAllChildNodes(mainContainer)
        for (var i = 0; i < data.CustomLabels.length; i++) {
            var div = document.createElement("div");
            console.log(data.Labels[i])
            div.innerHTML = 'Label: ' + data.Labels[i].Name + ' ' + 'Confidence:' + data.Labels[i].Confidence.toFixed(3)
            mainContainer.appendChild(div)
        }
    }
    
}




function performRekognition(params, data) {
    console.log('performRekognition() %o %o', params, data)
   
    var rekognition = new AWS.Rekognition({
            apiVersion: '2016-06-27',        
    }
        
    )

    // Default Labels
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Rekognition.html#detectLabels-property
    //
    // Custom Labels
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Rekognition.html#detectCustomLabels-property

    // params will have already
    //
    // Image which is a S3 object 
    // MaxLabels which 100 
    // MinConfidence which is 70 
    // 
    // I need to add 
    //
    // ProjectVersionArn
    // MaxResults  instead of MaxLabels 
    //var params = {
    //    Key: fileName,
    //    ContentType: 'image/png',
    //    Body: blobData
    //};
    //
    // I need to remove 
    //
    // MaxLabels

    params['ProjectVersionArn'] = 'arn:aws:rekognition:us-east-1:265627204426:project/c5/version/c5.2022-02-06T08.38.41/1644154721096'
    params['MaxResults'] = 10
    delete params['MaxLabels']
    
    // This calls the default model 
    rekognition.detectCustomLabels(params, rekCallback)
    
    
}
// performRekognition() END



function get_id() {
    var newDate = new Date();
    return '' + parseInt(newDate.getMonth() + 1) + '-' + newDate.getDate() + '-' + newDate.getFullYear() + '-' + newDate.getTime()
}
// get_id() end




function imgUrlToBlob(value) {
    console.log('imgUrlToBlob()')

    var theNormalUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg'
    var img = document.getElementById('camera_feed')
    console.log('img is %o', img)
    var theNcDotUrl = img.src;
    var theUrl

    if (value == 1) {
        theUrl = theNormalUrl
    } else {
        theUrl = theNcDotUrl
    }

    // Gets the response and returns it as a blob
    fetch(theUrl).then(res=>res.blob()).then(blob8=>{
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)

        uploadBlob(blob8)
    }
    )
}
// imgUrlToBlob() end



function onClickTesty(item) {
    console.log(item)

    var selectedItem = item.options[item.selectedIndex]
    var urlSelectors = document.getElementsByClassName('url-select')

    //alert("selected item is :" + selectedItem.value)

    switch (selectedItem.value) {
    case '1':
        urlSelectors[0].style.display = 'block'
        urlSelectors[1].style.display = 'block'
        break;
    case '2':
        urlSelectors[1].style.display = 'none'
        urlSelectors[0].style.display = 'none'
        break;
    case '3':
        urlSelectors[0].style.display = 'none'
        urlSelectors[1].style.display = 'none'
        break;
    case '4':
        urlSelectors[0].style.display = 'none'
        urlSelectors[1].style.display = 'none'
        break;
    case '5':
        urlSelectors[0].style.display = 'none'
        urlSelectors[1].style.display = 'none'
        break;
    case '5':
        urlSelectors[0].style.display = 'none'
        urlSelectors[1].style.display = 'none'
        break;
    case '6':
        urlSelectors[0].style.display = 'none'
        urlSelectors[1].style.display = 'none'
        break;
    case '7':
        urlSelectors[0].style.display = 'block'
        urlSelectors[1].style.display = 'block'
        break;
    case '8':
        urlSelectors[0].style.display = 'block'
        urlSelectors[1].style.display = 'block'
        break;
    default:
        alert('Sorry, we are broken')
    }

}


function Predict() {
    console.log("predict-btn: click() ");
    alert("contest deadline ended Feb 7th. Custom model stopped to save cost. email davisjf@gmail.com to restart");
    return

    let item = document.getElementById('testy-select');
    let theUrl = document.getElementById('url-select');

    var selectedItem = item.options[item.selectedIndex]
    var selectedUrlItem = theUrl.options[theUrl.selectedIndex]

    //alert("selected item is :" + selectedItem.value)

    switch (selectedItem.value) {
    case '1':
        console.log('one')
        imgUrlToBlob(selectedUrlItem.value);
        break;
    case '2':
        console.log('two')
        downloadTestTwo();
        break;
    case '3':
        console.log('three')
        downloadTestThree();
        break;
    case '4':
        console.log('four')
        downloadTestFour();
        break;
    case '5':
        console.log('five')
        downloadTestFive();
        break;
    case '6':
        console.log('six')
        downloadTestSix();
        break;
    case '7':
        console.log('seven')
        downloadTestSeven(selectedUrlItem.value);
        break;
    case '8':
        console.log('eight')
        downloadTestEight(selectedUrlItem.value);
        break;
    default:
        alert('Sorry, we are broken')
    }

}
// Download() on click end

function Draw() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

    var img = document.getElementById('camera_feed')
    var cnvs = document.getElementById('my_canvas')
    cnvs.width = img.width
    cnvs.height = img.height

    cnvs.style.position = 'absolute'
    cnvs.style.left = img.offsetLeft + 'px'
    cnvs.style.top = img.offsetTop + 'px'

    // hmm, both settings are identical?
    console.log('width = %i', img.width)
    console.log('height = %i', img.height)
    console.log('offset width = %i', img.offsetWidth)
    console.log('offset height = %i', img.offsetHeight)

    var TOP = 0
    var BOTTOM = img.height
    var LEFT = 0
    var RIGHT = img.width

    console.log('TOP = %i', TOP)
    console.log('BOTTOM = %i', BOTTOM)
    console.log('LEFT = %i', LEFT)
    console.log('RIGHT = %i', RIGHT)

    var ctx = cnvs.getContext('2d')
    ctx.clearRect(0, 0, cnvs.width, cnvs.height)

    ctx.beginPath()
    ctx.moveTo(LEFT + 10, TOP + 10)
    // top left
    ctx.lineTo(RIGHT - 10, TOP + 10)
    // top right
    ctx.lineTo(RIGHT - 10, BOTTOM - 10)
    // bottom right
    ctx.lineTo(LEFT + 10, BOTTOM - 10)
    // bottom right
    ctx.lineTo(LEFT + 10, TOP + 10)
    // bottom right

    ctx.lineWidth = 3
    ctx.strokeStyle = '#00ff88'
    ctx.stroke()
}





///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// entry point
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

s3 = doMyS3Init()


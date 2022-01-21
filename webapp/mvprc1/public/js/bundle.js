(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){





class MvpRc1 {
  constructor() {
      console.log("MvpRc1:Constructor() ");
  }

}


// button
// https://stackoverflow.com/questions/362614/calling-onclick-on-a-radiobutton-list-using-javascript
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
const i85_churton = document.getElementById("i85_churton");
const bus40_macy = document.getElementById("bus40_macy");
const BUS40_SALEM = document.getElementById("BUS40_SALEM");
const nc147_us15501 = document.getElementById("nc147_us15501");
const US52_UNIV = document.getElementById("US52_UNIV");





i85_churton.addEventListener('click', button => {
  console.log("i85_churton: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I85_Churton.JPG"
})


bus40_macy.addEventListener('click', button => {
  console.log("bus40_macy: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Bus40_MacyGrove.jpg"
})


BUS40_SALEM.addEventListener('click', button => {
  console.log("BUS40_SALEM: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Bus40_SalemLake.jpg"
})


nc147_us15501.addEventListener('click', button => {
  console.log("nc147_us15501: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=NC147_15501.JPG"

})

US52_UNIV.addEventListener('click', button => {
 console.log("US52_UNIV: click() ");
 camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=US52_Univ.jpg"
})





/////////////////////////////////////////////////////
// ROAD
/////////////////////////////////////////////////////



const HANESMALL_JONES = document.getElementById("HANESMALL_JONES");
const HANESMALL_KESTER = document.getElementById("HANESMALL_KESTER");
const I40_MM53 = document.getElementById("I40_MM53");
const I40_MM27 = document.getElementById("I40_MM27");
const I540_US401 = document.getElementById("I540_US401");
const I540_US1 = document.getElementById("I540_US1");
const TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
const TOLL147_NC54 = document.getElementById("TOLL147_NC54");
const TOLL540_DAVIS_DR = document.getElementById("TOLL540_DAVIS_DR");
const TOLL540_DMS7 = document.getElementById("TOLL540_DMS7");
const TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");
const I26_BROADWAY = document.getElementById("I26_BROADWAY");


HANESMALL_JONES.addEventListener('click', button => {
  console.log("HANESMALL_JONES: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=HanesMall-Jonestown.jpg"
})

HANESMALL_KESTER.addEventListener('click', button => {
  console.log("HANESMALL_KESTER: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=HanesMall-KesterMill.jpg"
})

I40_MM53.addEventListener('click', button => {
 console.log("I40_MM53: click() ");
 camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_mm53.jpg"
})

I40_MM27.addEventListener('click', button => {
 console.log(": click() ");
 camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_mm27.jpg"
})

I540_US401.addEventListener('click', button => {
  console.log("I540_US401: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I540_US401.JPG"
})

I540_US1.addEventListener('click', button => {
  console.log("I540_US1: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_US1-64.jpg"
})

TOLL147_HOPSON_RD.addEventListener('click', button => {
  console.log("TOLL147_HOPSON_RD: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG"
})

TOLL147_NC54.addEventListener('click', button => {
  console.log("TOLL147_NC54: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG"
})

TOLL540_DAVIS_DR.addEventListener('click', button => {
  console.log(": click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_DavisDr.JPG"
})

TOLL540_DMS7.addEventListener('click', button => {
  console.log("TOLL540_DMS7: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_DMS7.JPG"
})

TOLL54_APEXBBQ.addEventListener('click', button => {
  console.log("TOLL54_APEXBBQ: click() ");
  camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG"
})


I26_BROADWAY.addEventListener('click', button => {
 console.log("I26_BROADWAY: click() ");
 camera_feed_road_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
})









/////////////////////////////////////////////////////////////////
// ODD ONES
/////////////////////////////////////////////////////////////////

// Weird ones
const NC147_DAVIS_DR = document.getElementById("NC147_DAVIS_DR");
const TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
const I40W_MM8 = document.getElementById("I40W_MM8");
const I440_US64_Bypass = document.getElementById("I440_US64_Bypass");

NC147_DAVIS_DR.addEventListener('click', button => {
  console.log("NC147_DAVIS_DR: click() ");
  camera_feed_odd_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
})

TOLL147_DAVIS_DR.addEventListener('click', button => {
  console.log("TOLL147_DAVIS_DR: click() ");
  camera_feed_odd_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
})

I40W_MM8.addEventListener('click', button => {
  console.log("I40W_MM8: click() ");
  camera_feed_odd_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg"
})

I440_US64_Bypass.addEventListener('click', button => {
 console.log("I440_US64_Bypass: click() ");
 camera_feed_odd_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG"
})





// The camera feed img
var camera_feed_bridge_img = document.getElementsByClassName("camera_feed_bridge")[0];
var camera_feed_road_img = document.getElementsByClassName("camera_feed_road")[0];
var camera_feed_odd_img = document.getElementsByClassName("camera_feed_odd")[0];

// Build class with some of these specified?
const mvprc1 = new MvpRc1()


//const pb = require('@dendra-science/goes-pseudo-binary');

/*
class GoesDecoder {
    constructor(format, buffer, decoder) {
        console.log("GoesDecoder() ");
        this.formatInput = format
        this.bufferInput = buffer
        this.decoderOutput = decoder

        // Add some default values
        //this.formatInput.value = 'fp2_29,fp2_29'
        //this.bufferInput.value = 'CKDS@[AKCBEO@N~@@@CQRBKEF@CAKCCET@N~@@@CQRB_DH@JAYCCEZ@N}@@@CQRB`DD@BAYCDE`@N}@@@CQRB[DK@KAICCEB@N}@@@CQRBTEF@NBOCCEE@N}@@@CQRBVCN@KBKCEEL@N~@@@CQRBFED@NAZCCEI@N}@@@CQRBFBN@IANCDEB@N~@@@CQRBTCR@KASCFED@N~@@@CQRCADL@MBMCDET@N~@@@CQRB}DW@]AICDE~@N~@@@CQRBG'
        this.formatInput.value = 'i_3'
        this.bufferInput.value = 'AhlAjPAktAmXAn|Ap`ArDAshAuLAvpAxTAyx~WT~Up~TL~Rh~QD~O`~M|~LX~Jt~IP~Gl~FH'
        this.decoderOutput.value = ''
    }

    clear() {
        console.log("clear() ");
        this.formatInput.value = ''
        this.bufferInput.value = ''
        this.decoderOutput.value = ''
    }

    performDecode() {
        console.log("performDecode()");
        let pbf;
        let ret;

        const fp2Buf = Buffer.from(this.bufferInput.value,'ascii')
        console.log(`format: ${this.formatInput.value}`);
        console.log(`buffer: ${fp2Buf}`);
        pbf = new pb.Decoder(this.formatInput.value);
        ret = pbf.decode(fp2Buf);
        ret.then((val) => {
            console.log(`result: ${val.rows.toString()}`);
            if (val.rows.toString() === "") {
                console.log("empty string");
                this.decoderOutput.value = "invalid format/buffer combination";
            } else {
                console.log("non empty string");
                console.log(`val = ${val}`);
                console.log(`val.rows = ${val.rows}`);
                this.decoderOutput.value = val.rows.toString();
            }
        });
    }

}

// Get reference to HTML elements
//
// querySelector() returns the first Element within document that
// matches the specified selector or group.  A selector is a
// DOMString containing one or more selectors to match (hence
// the array syntax
//
// querySelectorAll() returns all elements ...
//
//
// button
const allClearButton = document.querySelector('[ac-button]')
const decodeButton = document.querySelector('[decode-button]')
// text areas
const formatElement = document.querySelector('[format-ta]')
const bufferElement = document.querySelector('[buffer-ta]')
const decoderElement = document.querySelector('[output-ta]')

// Build class with some of these specified?
const goesdecoder = new GoesDecoder(formatElement, bufferElement, decoderElement)

// Hook an event listener for the AC button
allClearButton.addEventListener('click', button => {
    goesdecoder.clear()
})

// Hook an event listener for the Decode button
decodeButton.addEventListener('click', button => {
    goesdecoder.performDecode()
})

const formatEditBox = document.getElementsByClassName("textarea_e")[0];
formatEditBox.addEventListener("keyup",function(event) {
    if (event.key === "Enter") {
        //console.log("yo")
        goesdecoder.performDecode()
    }
});


*/

},{}]},{},[1]);

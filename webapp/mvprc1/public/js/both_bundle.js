(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){





class MvpRc1Both {
  constructor() {
      console.log("MvpRc1Both:Constructor() ");
  }

}


// button
// https://stackoverflow.com/questions/362614/calling-onclick-on-a-radiobutton-list-using-javascript
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/


const I40_MM53 = document.getElementById("I40_MM53");
const BUS40_MACY = document.getElementById("BUS40_MACY");
const NC147_US15501 = document.getElementById("NC147_US15501");
const US52_UNIV = document.getElementById("US52_UNIV");
const TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
const TOLL147_NC54 = document.getElementById("TOLL147_NC54");
const TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");

const baseCameraURL = 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename='


I40_MM53.addEventListener('click', button => {
 console.log("I40_MM53: click() ");
 camera_feed_both_img.src = baseCameraURL + "I40_mm53.jpg"
})

BUS40_MACY.addEventListener('click', button => {
  console.log("BUS40_MACY: click() ");
  camera_feed_both_img.src = baseCameraURL + "Bus40_MacyGrove.jpg"
})


NC147_US15501.addEventListener('click', button => {
  console.log("NC147_US15501: click() ");
  camera_feed_both_img.src = baseCameraURL + "NC147_15501.JPG"

})

US52_UNIV.addEventListener('click', button => {
 console.log("US52_UNIV: click() ");
 camera_feed_both_img.src = baseCameraURL + "US52_Univ.jpg"
})

TOLL147_HOPSON_RD.addEventListener('click', button => {
  console.log("TOLL147_HOPSON_RD: click() ");
  camera_feed_both_img.src = baseCameraURL + "Toll147_HopsonRd.JPG"
})

TOLL147_NC54.addEventListener('click', button => {
  console.log("TOLL147_NC54: click() ");
  camera_feed_both_img.src = baseCameraURL + "Toll147_NC54.JPG"
})

TOLL54_APEXBBQ.addEventListener('click', button => {
  console.log("TOLL54_APEXBBQ: click() ");
  camera_feed_both_img.src = baseCameraURL + "Toll540_Apex-BBQ.JPG"
})


//const slider = document.getElementsByClassName("slider")[0];
const slider = document.getElementById("slider");

slider.addEventListener('click', button => {
  console.log("slider: click() ", slider.checked);
  if (slider.checked) {
    camera_feed_both_img.style.maxWidth = "";
    camera_feed_both_img.style.maxHeight = "";
  } else {
    camera_feed_both_img.style.maxWidth = "200px";
    camera_feed_both_img.style.maxHeight = "200px";
  }
})









// The camera feed img
var camera_feed_both_img = document.getElementsByClassName("camera_feed_both")[0];

// Build class with some of these specified?
const mvprc1both = new MvpRc1Both()

},{}]},{},[1]);

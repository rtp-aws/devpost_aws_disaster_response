(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){





class MvpRc1Road {
  constructor() {
      console.log("MvpRc1Road:Constructor() ");
  }

}


/////////////////////////////////////////////////////
// ROAD
/////////////////////////////////////////////////////



const HANESMALL_JONES = document.getElementById("HANESMALL_JONES");
const HANESMALL_KESTER = document.getElementById("HANESMALL_KESTER");
const I40_MM27 = document.getElementById("I40_MM27");
const I540_US401 = document.getElementById("I540_US401");
const I540_US1 = document.getElementById("I540_US1");
const TOLL540_DAVIS_DR = document.getElementById("TOLL540_DAVIS_DR");
const TOLL540_DMS7 = document.getElementById("TOLL540_DMS7");

const baseCameraURL = 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename='


HANESMALL_JONES.addEventListener('click', button => {
  console.log("HANESMALL_JONES: click() ");
  camera_feed_road_img.src = baseCameraURL + "HanesMall-Jonestown.jpg"
})

HANESMALL_KESTER.addEventListener('click', button => {
  console.log("HANESMALL_KESTER: click() ");
  camera_feed_road_img.src = baseCameraURL + "HanesMall-KesterMill.jpg"
})

I40_MM27.addEventListener('click', button => {
 console.log(": click() ");
 camera_feed_road_img.src = baseCameraURL + "I40_mm27.jpg"
})

I540_US401.addEventListener('click', button => {
  console.log("I540_US401: click() ");
  camera_feed_road_img.src = baseCameraURL + "I540_US401.JPG"
})

I540_US1.addEventListener('click', button => {
  console.log("I540_US1: click() ");
  camera_feed_road_img.src = baseCameraURL + "I40_US1-64.jpg"
})

TOLL540_DAVIS_DR.addEventListener('click', button => {
  console.log(": click() ");
  camera_feed_road_img.src = baseCameraURL + "Toll540_DavisDr.JPG"
})

TOLL540_DMS7.addEventListener('click', button => {
  console.log("TOLL540_DMS7: click() ");
  camera_feed_road_img.src = baseCameraURL + "Toll540_DMS7.JPG"
})




//const slider = document.getElementsByClassName("slider")[0];
const slider = document.getElementById("slider");

slider.addEventListener('click', button => {
  console.log("slider: click() ", slider.checked);
  if (slider.checked) {
    camera_feed_road_img.style.maxWidth = "";
    camera_feed_road_img.style.maxHeight = "";

  } else {
    camera_feed_road_img.style.maxWidth = "200px";
    camera_feed_road_img.style.maxHeight = "200px";

  }
  //camera_feed_road_img.max-width = ""
  //camera_feed_road_img.max-height = ""
})




// The camera feed img
var camera_feed_road_img = document.getElementsByClassName("camera_feed_road")[0];



// Build class with some of these specified?
const mvprc1road = new MvpRc1Road()

},{}]},{},[1]);

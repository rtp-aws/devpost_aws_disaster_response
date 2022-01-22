(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){






class MvpRc1Odd {
  constructor() {
      console.log("MvpRc1Odd:Constructor() ");
  }

}















/////////////////////////////////////////////////////////////////
// ODD ONES
/////////////////////////////////////////////////////////////////

const NC147_DAVIS_DR = document.getElementById("NC147_DAVIS_DR");
const TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
const I40W_MM8 = document.getElementById("I40W_MM8");
const I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
const I26_BROADWAY = document.getElementById("I26_BROADWAY");

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



I26_BROADWAY.addEventListener('click', button => {
 console.log("I26_BROADWAY: click() ");
 camera_feed_odd_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
})



const slider = document.getElementById("slider");

slider.addEventListener('click', button => {
  console.log("slider: click() ", slider.checked);
  if (slider.checked) {
    camera_feed_odd_img.style.maxWidth = "";
    camera_feed_odd_img.style.maxHeight = "";

  } else {
    camera_feed_odd_img.style.maxWidth = "200px";
    camera_feed_odd_img.style.maxHeight = "200px";

  }
})




// The camera feed img
var camera_feed_odd_img = document.getElementsByClassName("camera_feed_odd")[0];

// Build class with some of these specified?
const mvprc1odd = new MvpRc1Odd()

},{}]},{},[1]);

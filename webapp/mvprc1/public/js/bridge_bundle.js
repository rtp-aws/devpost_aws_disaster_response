(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){





class MvpRc1Bridge {
  constructor() {
      console.log("MvpRc1Bridge:Constructor() ");
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









// The camera feed img
var camera_feed_bridge_img = document.getElementsByClassName("camera_feed_bridge")[0];

// Build class with some of these specified?
const mvprc1bridge = new MvpRc1Bridge()

},{}]},{},[1]);

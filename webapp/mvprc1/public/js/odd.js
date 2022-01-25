





class MvpRc1Odd {
  constructor() {
      console.log("MvpRc1Odd:Constructor() ");
  }

}















/////////////////////////////////////////////////////////////////
// ODD ONES
/////////////////////////////////////////////////////////////////

const TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
const I40W_MM8 = document.getElementById("I40W_MM8");
const I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
const I26_BROADWAY = document.getElementById("I26_BROADWAY");


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
const canvas = document.getElementById("my_canvas");

slider.addEventListener('click', button => {
  console.log("slider: click() ", slider.checked);
  if (slider.checked) {
    camera_feed_odd_img.style.maxWidth = "";
    camera_feed_odd_img.style.maxHeight = "";

  } else {
    camera_feed_odd_img.style.maxWidth = "200px";
    camera_feed_odd_img.style.maxHeight = "200px";

  }

  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})




// The camera feed img
var camera_feed_odd_img = document.getElementsByClassName("camera_feed_odd")[0];

// Build class with some of these specified?
const mvprc1odd = new MvpRc1Odd()

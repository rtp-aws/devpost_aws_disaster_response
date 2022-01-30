


class MvpRc1Predict {
  constructor() {
      console.log("MvpRc1Predict:Constructor() ");
  }

}















/////////////////////////////////////////////////////////////////
// PREDICT ONES
/////////////////////////////////////////////////////////////////

const TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
const I40W_MM8 = document.getElementById("I40W_MM8");
const I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
const I26_BROADWAY = document.getElementById("I26_BROADWAY");
const TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
const TOLL147_NC54 = document.getElementById("TOLL147_NC54");
const TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");





TOLL147_DAVIS_DR.addEventListener('click', button => {
  console.log("TOLL147_DAVIS_DR: click() ");
  camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
})

I40W_MM8.addEventListener('click', button => {
  console.log("I40W_MM8: click() ");
  camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg"
})

I440_US64_Bypass.addEventListener('click', button => {
 console.log("I440_US64_Bypass: click() ");
 camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG"
})



I26_BROADWAY.addEventListener('click', button => {
 console.log("I26_BROADWAY: click() ");
 camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
})

TOLL147_HOPSON_RD.addEventListener('click', button => {
  console.log("TOLL147_HOPSON_RD: click() ");
  camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG"
})

TOLL147_NC54.addEventListener('click', button => {
  console.log("TOLL147_NC54: click() ");
  camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG"
})

TOLL54_APEXBBQ.addEventListener('click', button => {
  console.log("TOLL54_APEXBBQ: click() ");
  camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG"
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
var camera_feed_img = document.getElementsByClassName("camera_feed")[0];

// Build class with some of these specified?
const mvprc1preict = new MvpRc1Predict()

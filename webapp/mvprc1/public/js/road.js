




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








// The camera feed img
var camera_feed_road_img = document.getElementsByClassName("camera_feed_road")[0];

// Build class with some of these specified?
const mvprc1road = new MvpRc1Road()

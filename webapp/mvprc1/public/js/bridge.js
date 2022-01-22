




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
const BUS40_SALEM = document.getElementById("BUS40_SALEM");





i85_churton.addEventListener('click', button => {
  console.log("i85_churton: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I85_Churton.JPG"
})



BUS40_SALEM.addEventListener('click', button => {
  console.log("BUS40_SALEM: click() ");
  camera_feed_bridge_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Bus40_SalemLake.jpg"
})


//const slider = document.getElementsByClassName("slider")[0];
const slider = document.getElementById("slider");

slider.addEventListener('click', button => {
  console.log("slider: click() ", slider.checked);
  if (slider.checked) {
    camera_feed_bridge_img.style.maxWidth = "";
    camera_feed_bridge_img.style.maxHeight = "";

  } else {
    camera_feed_bridge_img.style.maxWidth = "200px";
    camera_feed_bridge_img.style.maxHeight = "200px";

  }
  //camera_feed_road_img.max-width = ""
  //camera_feed_road_img.max-height = ""
})









// The camera feed img
var camera_feed_bridge_img = document.getElementsByClassName("camera_feed_bridge")[0];

// Build class with some of these specified?
const mvprc1bridge = new MvpRc1Bridge()

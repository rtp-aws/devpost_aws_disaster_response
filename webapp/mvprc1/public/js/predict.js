class MvpRc1Predict {

    // These are public object variables?
    // I don't know javascript
    slider;
    canvas;
    ctx;
    camera_feed_img;

    /////////////////////////////////////////////////////////////////
    // PREDICT radio buttons
    /////////////////////////////////////////////////////////////////
    //
    // hmm, you can't specify var or const but you can specify and assign
    // in one step.  Then not use this.  Is this the method for specifying
    // a class variable in javascript?

    TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
    I40W_MM8 = document.getElementById("I40W_MM8");
    I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
    I26_BROADWAY = document.getElementById("I26_BROADWAY");
    TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
    TOLL147_NC54 = document.getElementById("TOLL147_NC54");
    TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");

    // the constructor
    constructor() {
        console.log("MvpRc1Predict:Constructor() ");

        //       const TOLL147_DAVIS_DR = document.getElementById("TOLL147_DAVIS_DR");
        //       const I40W_MM8 = document.getElementById("I40W_MM8");
        //       const I440_US64_Bypass = document.getElementById("I440_US64_Bypass");
        //       const I26_BROADWAY = document.getElementById("I26_BROADWAY");
        //       const TOLL147_HOPSON_RD = document.getElementById("TOLL147_HOPSON_RD");
        //       const TOLL147_NC54 = document.getElementById("TOLL147_NC54");
        //       const TOLL54_APEXBBQ = document.getElementById("TOLL54_APEXBBQ");

        // I had these original as global const.  I wonder how to do this 
        // with the pedantic class member variables above?
        this.slider = document.getElementById("slider");
        this.canvas = document.getElementById("my_canvas");
        // This was a var and not a const?
        this.ctx = this.canvas.getContext("2d");

        // The camera feed img
        // This was a var and not a const?      
        this.camera_feed_img = document.getElementsByClassName("camera_feed")[0];

        this.add_listeners();

    }
    ;
    
    // erase the canvas
    erase_canvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    add_listeners() {

        TOLL147_DAVIS_DR.addEventListener('click', button=>{
            console.log("TOLL147_DAVIS_DR: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_DavisDr.JPG"
            this.erase_canvas();
        }
        )

        I40W_MM8.addEventListener('click', button=>{
            console.log("I40W_MM8: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40W_mm8.jpg"
            this.erase_canvas();
        }
        )

        I440_US64_Bypass.addEventListener('click', button=>{
            console.log("I440_US64_Bypass: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I440_I87.JPG"
            this.erase_canvas();
        }
        )

        I26_BROADWAY.addEventListener('click', button=>{
            this.console.log("I26_BROADWAY: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I26_Broadway.jpg"
            this.erase_canvas();
        }
        )

        TOLL147_HOPSON_RD.addEventListener('click', button=>{
            console.log("TOLL147_HOPSON_RD: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_HopsonRd.JPG"
            this.erase_canvas();
        }
        )

        TOLL147_NC54.addEventListener('click', button=>{
            console.log("TOLL147_NC54: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll147_NC54.JPG"
            this.erase_canvas();
        }
        )

        TOLL54_APEXBBQ.addEventListener('click', button=>{
            console.log("TOLL54_APEXBBQ: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Apex-BBQ.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_TOLL147.addEventListener('click', button=>{
            console.log("TOLL540_TOLL147: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_Toll147.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_NC55.addEventListener('click', button=>{
            console.log("TOLL540_NC55: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_NC55.JPG"
            this.erase_canvas();
        }
        )

        TOLL540_MCCRIMMON.addEventListener('click', button=>{
            console.log("TOLL540_MCCRIMMON: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=Toll540_McCrimmonRd.jpg"
            this.erase_canvas();
        }
        )

        I40_DAVIS_DR.addEventListener('click', button=>{
            console.log("I40_DAVIS_DR: click() ");
            this.camera_feed_img.src = "https://tims.ncdot.gov/TIMS/cameras/viewimage.ashx?id=I40_DavisDr.jpg"
            this.erase_canvas();

        }
        )

        // Control is the slider
        this.slider.addEventListener('click', button=>{
            console.log("slider: click() ", slider.checked);
            if (slider.checked) {
                camera_feed_img.style.maxWidth = "";
                camera_feed_img.style.maxHeight = "";

            } else {
                camera_feed_img.style.maxWidth = "200px";
                camera_feed_img.style.maxHeight = "200px";
            }
            this.erase_canvas();
            //var ctx = canvas.getContext("2d");
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        )
        // slider end

    }
    // add_listeners end

}
// class end

// Build class with some of these specified?
const mvprc1predict = new MvpRc1Predict()

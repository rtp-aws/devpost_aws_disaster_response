(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){





class MvpRc1 {
  constructor() {
      console.log("MvpRc1:Constructor() ");
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
const nc147Us15501Button = document.querySelector('[nc147_us15501_button]')



// Build class with some of these specified?
const mvprc1 = new MvpRc1()

// Hook an event listener for the AC button
nc147Us15501Button.addEventListener('click', button => {
  console.log("nc147Us15501Button: click() ");
})






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

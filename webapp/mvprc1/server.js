// server.js
console.log("JFD server.js Restart");

const express = require('express')
const app = express()

// this is used for render()
app.set("view engine", "ejs")

// use this for public?
app.use(express.static('public'));


// setup a route
// get has two parameters - the second is
// a function/callback which has two
// or three parameters.
//
// 500 error
// 200 ok
// 404 not found
app.get('/', (req, res) => {

    console.log("get /")
    console.log(req)

    //res.sendStatus(500) // error on server
    // or
    //res.status(500) // error on server
    // or chain
    //res.status(500).send("HI") // error on server
    // or chain with json
    //res.status(500).json({message: "Error"}) // error on server
    // or just default status and json
    //res.json({message: "Error"}) // error on server
    // it seems only one send can work at a time?
    //res.send('Hi')
    // or a file
    //res.download('README.md')
    // or
    //res.render("index")
    // or add some text
    res.render("index")
})


app.get('/index.ejs', (req, res) => {

    console.log("get /index.ejs")
    console.log(req)

    res.render("index")
})


app.get('/about.ejs', (req, res) => {

    console.log("get /about.ejs")
    //console.log(req)

    res.render("about")
})

////

app.get('/bridge.ejs', (req, res) => {

    console.log("get /bridge.ejs")
    //console.log(req)

    res.render("bridge")
})


app.get('/road.ejs', (req, res) => {

    console.log("get /road.ejs")
    //console.log(req)

    res.render("road")
})


app.get('/odd.ejs', (req, res) => {

    console.log("get /odd.ejs")
    //console.log(req)

    res.render("odd")
})

app.get('/both.ejs', (req, res) => {

    console.log("get /both.ejs")
    //console.log(req)

    res.render("both")
})

app.get('/face.ejs', (req, res) => {

    console.log("get /face.ejs")
    //console.log(req)

    res.render("face")
})

app.get('/myconfig', (req, res) => {

    console.log("get /myconfig")

    var ALBUMBUCKETNAME = process.env.ALBUMBUCKETNAME;
    var IDENTITYPOOLID = process.env.IDENTITYPOOLID;
    var BUCKETREGION = process.env.BUCKETREGION;

    res.json({albumBucketName: ALBUMBUCKETNAME, bucketRegion: BUCKETREGION, identityPoolId: IDENTITYPOOLID})

})

app.get('/predict.ejs', (req, res) => {

    console.log("get /predict.ejs")
    //console.log(req)

    res.render("predict")
})

app.get('/predict1.ejs', (req, res) => {

    console.log("get /predict1.ejs")
    //console.log(req)

    res.render("predict1")
})



app.listen(8080)

const express = require('express');
const app = new express();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetchMonth/:num",(req,res)=>{
    // let monthName = '';
    // for (var i = 0; i < months.length; i++) {
    //     if (i === parseInt(req.params.num)) {
    //         monthName = months[i];
    //     }
    // }

    // res.send("The month is "+ monthName);

    // simple way
    const givenNumber = parseInt(req.params.num);
    if (givenNumber < 1 || givenNumber > 12) {
        res.send("Not a valid number");
    } else {
        res.send("The month is "+ months[givenNumber - 1]);
    }
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})


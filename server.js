const express = require('express');
const bodyParser = require('body-parser');
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
    var na1 = Number(req.body.n1);
    var na2= Number(req.body.n2);
    var sum= na1 + na2;
    console.log("sum is"+ sum);
    res.send( "sum is"+sum);
});
app.listen('3000',()=>console.log("Server started on port : 3000"));


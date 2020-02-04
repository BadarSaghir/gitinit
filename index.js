//jshint esversion:6

const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/index.html");


});
 app.post("/",(req, res)=>{
  var result = Number(Number(req.body.box1)+Number(req.body.box2));
  res.send("Your result is "+result);


 });

app.listen(3000,()=>{ 
	console.log(50);
});
const express = require("express");
const bodyParser = require("body-parser");
let items=["Do the dishes.","Take the Dog for a Walk."];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    const days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = new Date();
    console.log(today);
    let number = today.getDay();
    console.log(number);
    let currentDay = days[number];
    console.log();
    res.render("list",{
        currentDay:currentDay,
        newItems:items,
    })

});

app.post("/",function(req,res){
    
    let item = req.body.newItem;
    if(item ==""){
        console.log("no input");
    }else{

        items.push(item);
        console.log(item);
        res.redirect("/");
    }
})
app.listen(2022, function () {
    console.log("Server runnng");
});
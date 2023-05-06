const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

let arrayItem = ["Buy Food", "Cook Food", "Eat Food"];
app.get("/" , function (req,res) {
    let today = new Date();
    let options  = {
        weekday: 'long', month: 'long', day: 'numeric'
    }
    let day = today.toLocaleDateString("en-US", options);

    res.render("list" ,{
         kindday : day,
         nItem: arrayItem
    });
});
app.post("/", function(req , res ){
    
    let  item = req.body.newItem;
    console.log(item);
    arrayItem.push(item);
    res.redirect("/");
    
});

app.listen(3000, function () {
    console.log("server is stated on port 3000");
    
});
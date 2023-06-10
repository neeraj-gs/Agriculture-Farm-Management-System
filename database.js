const express = require("express"); //MODULES
const path = require("path");
const app = express();
const ejs = require("ejs");
const {parse} = require("querystring");
const port = 9000;

const mysql = require("mysql");
const exp = require("constants");
const { copyFileSync } = require("fs");

//parse
app.use(express.json());
app.use(express.urlencoded({extended:true})); //EXTRACT HTML DATA

//setting ejs
app.set("view engine","ejs");

app.use("/images",express.static("images"));


var connection = mysql.createConnection({ //DATABASE CONNECTION
    host : "localhost",
    user : "root",
    password : "1234",
    database : "farmmanagement",
});

connection.connect(function(error){
    if (error)
    {
        console.log("error");
    }
    else{
        console.log("connected");
        console.log("listening to port 8081")
    }
});



app.get('/',function(req,res){
 //HOME PAGE
    res.sendFile(path.join(__dirname,"getData.html"));
    
});

app.post("/fetch",function(req,res){
    var strname = req.body.name; 

    var sql = `select farmerName,toolname,toolquantity
    from farmers join farmtools using (farmerID)
    where exists (select * from farmers where farmerName = "${strname}" and farmers.farmerID=farmtools.farmerID)`;
    connection.query(sql,function(err,rows,fields){
        if (err)
        {
            console.log(err);
        }
        else{
            
            let a = [...rows];
          
            if (a.length > 0)
            {
                res.render("final",{obj : a});
            }
            else
            {
                res.render("final",{obj : a});
            }
            
        }
    });

});
app.listen(8081);
const express = require('express');
const mysql = require('mysql2');
const path = require('path');


app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "FEEDBACK_DB",
    password : "Lukman$786"
});

app.get("/",(req,res) => {
    res.render("index");
});


app.post("/submit",(req,res)=>{

    console.log(req.body);
    let {name , email, message } = req.body;
    let query = "INSERT INTO UserFeedback(UserName,Email,Message) VALUES (?, ?, ?)"

    connection.query(query,[name, email, message ],(err,result) => {
        if(err){
            console.log("Error while inserting into table "+ err);
        }else{
            console.log("inserted successfully "+ result);
        }
    });

    res.render("finalPage");
});


app.listen(PORT, ()=>{
    console.log("server is running.");
});

const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const Userdb=require("./models/user")
const port=(process.env.PORT || '5000')
const mongoose=require("mongoose");
const path=require("path");
// Routers
const rAdd=require("./routers/add")

// connect to mangoose
// mongoose.connect('mongodb+srv://fayzulla:r2SZ2yTNmmYKn7d@cluster0.dgrlz.mongodb.net/fors-project',()=>{
//     console.log("Conected to MongoDB");
// })
// mongoose.connection.on("open",()=>{})
// mongoose.connection.on("error",(err)=>{console.log(err);})
mongoose.connect('mongodb://localhost:27017/malaka_oshirishDB',()=>{
    console.log("Conected to MongoDB");
})
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use(express.json())
app.use(express.urlencoded({extended:true})) 














app.use(rAdd);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))





app.listen(port,()=>{
    console.log("Server started on port 5000");
})


// r2SZ2yTNmmYKn7d
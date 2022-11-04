const express = require("express")
require("dotenv").config()
const app = express();

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/something",(req,res)=>{
    res.send("Something Page")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on PORT ${process.env.PORT}`)
})
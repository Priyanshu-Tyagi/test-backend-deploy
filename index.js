const express = require("express")
require("dotenv").config()
const app = express();

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on PORT ${process.env.PORT}`)
})
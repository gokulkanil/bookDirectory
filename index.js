const express=require("express")
const app=express()
const mongoose=require('mongoose')
const dotenv=require("dotenv")


const PORT=process.env.PORT||5000
dotenv.config();
const connectDB=require("./db")
const adminRouter=require("./adminRouter")
connectDB();

const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use("/api/admin",adminRouter)

app.listen(PORT,()=>console.log("Listening in port:"+PORT))
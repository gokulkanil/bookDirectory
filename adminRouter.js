const express=require("express")
const app=express()
const router=express.Router
const bodyparser=require("body-parser")

const adminController=require("./adminController")

app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.post("/addBook",adminController.addBook)
app.put("/updateBook",adminController.updateBook)
app.get("/searchBook/:ISBN",adminController.searchBook)
app.get("/findAllBooks",adminController.findAllBooks)
app.delete("/deleteBook",adminController.deleteBook)

console.log("router connected")

module.exports=app


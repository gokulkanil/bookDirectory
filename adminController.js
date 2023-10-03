const express=require("express")
const app=express()
const mongoose=require("mongoose")

const books=require("./books")

exports.addBook=async (req,res)=>{
    console.log("In addBook")
    console.log(req.body)

    try{
        console.log("Title:"+req.body.title)
        console.log("Author:"+req.body.author)
        console.log("Year:"+req.body.year)
        console.log("ISBN:"+req.body.ISBN)
        const seed=await books.create(req.body)

        if(!seed){
            return res.status(500).json({
                message:"Unable to add Book"
            })
        }

        return res.status(200).json({
            message:"Book details saved",
            seed:seed
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Unable to save details"
        })
    }
}

exports.searchBook=async(req,res)=>{
    console.log("In searchBook")
    
    try{
        let ObjectId=mongoose.Types.ObjectId
        ObjectId=req.params.ISBN
        console.log("ISBN:" +ObjectId)
        const book=await books.findOne({ISBN:ObjectId})
        console.log("Book details are:"+book)
        res.send(book)

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Unable to find book"
        })
    }
}

exports.findAllBooks=async(req,res)=>{
    console.log("In findAllBooks")
    try{
        const book=await books.find()
        console.log(book)
        res.send(book)
    }catch(error){
        return res.status(500).json({
            message:"unable to find book List"
        })
    }
}

exports.updateBook=async(req,res)=>{
    console.log("in updateBook")
    try{
        var ISBN=req.body.ISBN
        var title=req.body.title
        var author=req.body.author
        var year=req.body.Year
        console.log(ISBN)
        const book=await books.updateMany({ISBN:ISBN},{title:title,author:author,year:year})
        console.log(book)
        res.send(book)
    }catch(error){
        return res.status(500).json({
            message:"Unable to update Book Details"
        })
    }
}

exports.deleteBook=async(req,res)=>{
    console.log("In deleteBook")
    var ISBN=req.body.ISBN
    console.log(ISBN)
    try{
        const book= await books.deleteOne({ISBN:ISBN})
        console.log("Book deleted")
        res.send(book)
    }catch{
        return res.status(500).json({
            message:"Unable to delete Book"
        })
    }
}
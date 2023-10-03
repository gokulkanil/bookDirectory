const mongoose=require("mongoose")
const schema=mongoose.Schema

const booksSchema= new schema(
    {
        title:'String',
        author:'String',
        year:'String',
        ISBN:'String'
    },{timestamps:true}
)

const books=mongoose.model("books",booksSchema)
module.exports=books
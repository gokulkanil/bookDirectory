const mongoose=require('mongoose')
mongoose.set("strictQuery",false)
const connectDB= async ()=>{
    try{
        const uri="mongodb://127.0.0.1:27017/college"
        const conn= await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
    }
}
module.exports=connectDB
const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
require('dotenv').config()
const port=process.env.PORT||3000
const router=require("./routes/route")
const { json } = require("body-parser")
const app=express()

app.use(bodyParser.json())
mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongoDbIdPass,{
})
.then(()=>{
    console.log("MongoDb is connected.....")
})
.catch((error)=>{
    console.log(error)
})
app.use("/",router)
app.listen(port,function(){
    console.log(`server is connected ${port}`)
})
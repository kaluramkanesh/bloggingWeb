const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    // { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }
    fname:{
        type:String,
        require:true,
        trim:true
    },
    lname:{
        type:String,
        require:true,
        trim:true
    },
    title:{
        type:String,
        require:true,
        trim:true,
        enum:["Mr","Mrs","Miss"]
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true})

// module.exports=
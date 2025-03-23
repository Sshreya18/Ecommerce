
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const {log} = require("console");


app.use(express.json());
app.use(cors());

//DataBase Connection with mongodb
mongoose.connect('mongodb+srv://shambhavishreya:s18181818s@cluster0.oou3s6m.mongodb.net/ecommerce').then(()=>console.log("DB Connected"));


//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

const Users = mongoose.model('Users',{
    name:{
        type : String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    CartData:{
        type: Object,
    }
})

app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] =0; 
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        CartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id: user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true, token})

})

app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password ===user.password;
        if (passCompare){
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true, token});
        }
        else{
            res.json({success:false , error:"Wrong Password"});
        }
    }
    else{
        res.json({success: false, errors: "Wrong EmailId"})
    }
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error :"+error)
    }
})
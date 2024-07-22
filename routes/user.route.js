const express= require("express");

const userRouter= express.Router();

const bcrypt= require("bcrypt");

const  jwt= require("jsonwebtoken");

const {UserModel}= require("../models/user.model");

userRouter.get("/", async(req, res)=>{
    try {
        const data= await UserModel.find();
        res.send({data});
    } catch (error) {
        res.send({"Error": "Something went wrong."});
        console.log({error});
    }
})

userRouter.post("/register", async(req, res)=>{
    const {name, email, role, password}= req.body;
    try {
        if(name && email && role && password){
            bcrypt.hash(password, 5, async(err, hashed)=>{
                if(err){
                    console.log(err);
                    res.send({"message" : "Something went wrong"});
                }else{
                    const newdata= new UserModel({name, email, role, password:hashed});
                    await newdata.save();
                    res.send({"message" : "Registered"});
                }
            })
        }else {
            console.log({error});
            res.send({"Error":"All fields required"});
        }
    } catch (error) {
        console.log(error);
        res.send({"Error":"Something went wrong"});
    }
})

userRouter.post("/login", async(req, res)=>{
    const  {email, password}= req.body;
    try {
        const user= await UserModel.find({email});
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=>{
                if(err){
                    res.send({"Error" : "Wrong Credentials."});
                }else{
                    const token= jwt.sign({userId:user[0]._id, role:user[0].role}, process.env.key);
                    res.send({"message" : "Login Successful", "token":token});
                }
            })
        }else{
            res.send({"message" : "No user found"});
        }
    } catch (error) {
        console.log(error);
        res.send({"message" : "Something went wrong"});
    }
})



module.exports= {
    userRouter
}
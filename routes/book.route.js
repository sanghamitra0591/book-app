const express= require("express");
const { BookModel } = require("../models/book.model");

const bookRouter= express.Router();

const {validator}= require("../middlewares/validator.middleware");
const { validateAddBook, validateUpdateBook } = require("../middlewares/req-body-validator.middleware");


bookRouter.get("/", async(req, res)=>{
    try {
        const data= await BookModel.find();
        res.send({data});
    } catch (error) {
        res.send({"Error": "Something went wrong."});
        console.log({error});
    }
})

bookRouter.get("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        const data= await BookModel.find({_id : id});
        if(data.length>0){
            res.send({data});
        }else{
            res.send({"Error" : "No Books Found with this id"});
        }
    } catch (error) {
        console.log({error});
        res.send({"Error" : "Found error while fetching the book data"});
    }
})

bookRouter.use(validator);

bookRouter.post("/add", validateAddBook, async(req, res)=>{
    const data= req.body;
    try {
        const newdata= new BookModel(data);
        await newdata.save();
        res.send({"message" : "Added new Book Data"});
    } catch (error) {
        res.send({"Error": "Something went wrong."});
        console.log({error});
    }
})

bookRouter.patch("/:bookId", validateUpdateBook, async(req, res)=>{
    const ID= req.params.bookId;
    const data= req.body;
    try {
        await BookModel.findByIdAndUpdate({_id:ID}, data);
        res.send({"message" : `Updated Book Data whose id is ${ID}`});
    } catch (error) {
        res.send({"Error": "Something went wrong."});
        console.log({error});
    }
})

bookRouter.delete("/:bookId", async(req, res)=>{
    const ID= req.params.bookId;
    try {
        await BookModel.findByIdAndDelete({_id:ID});
        res.send({"message" : `Deleted Book Data whose id is ${ID}`});
    } catch (error) {
        res.send({"Error": "Something went wrong."});
        console.log({error});
    }
})



module.exports= {
    bookRouter
}
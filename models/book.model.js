
const mongoose= require("mongoose");

const bookSchema= mongoose.Schema({
    title : String,
    author : String,
    coverPage : String,
    year : Number
})
const BookModel= mongoose.model("book", bookSchema);

module.exports= {
    BookModel
}
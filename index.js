const express= require("express");
const { connection } = require("./configs/db");
const { Authentication } = require("./middlewares/Authentication.middleware");
const { userRouter } = require("./routes/user.route");
const { record } = require("./middlewares/record.middleware");
const { bookRouter } = require("./routes/book.route");

const app= express();

app.use(express.json());

require("dotenv").config();

const cors= require("cors");

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res)=>{
    res.send({"message" : "Welcome to Home page"});
})

app.use(record);

app.use("/user", userRouter);


app.use(Authentication);

app.use("/book", bookRouter);



app.listen(3000, async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log({"error":error});
    }
    console.log(`Running at port 3000`);
})
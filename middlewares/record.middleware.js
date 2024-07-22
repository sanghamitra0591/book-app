
const fs= require("fs");

const record= (req, res, next)=>{
    // const ID= req.url.split("/")[1];
    const ID= req.url;
    console.log({req});
    const currentDate = new Date();
    const timestampStr = currentDate.toLocaleString();;
    fs.appendFileSync("./records.txt", `Method : ${req.method} , URL : ${req.url} , Timestamp : ${timestampStr}\n`, "utf-8");
    console.log(`Method : ${req.method} , URL : ${req.url} , Timestamp : ${timestampStr}`)
    next();
}

module.exports= {
    record
}
import mongoose from "mongoose";
import "dotenv/config"

const url=process.env.MONGO_URI
mongoose.connect(url).then(()=>{
    console.log("conncet to mongo db")
}).catch(()=>{
    console.log("error to connnect to mongo")
})
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import authRoute from "./routes/authRoute.js"

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth",authRoute);

app.get("/",(req,res)=>{
    res.send("Hello world")
})


//db connection
const connect = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`,{
            dbName:"AlterOffice"
        })
    }catch (error) {
        throw error;
    }
}


app.listen(port,()=>{
    try {
        connect();
        console.log("server connected");
    } catch (error) {
        console.log("datanase connection error")
    }
   
})

export default app
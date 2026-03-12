import exp from 'express'
import { connect } from 'mongoose'
import {userApp } from './APIs/userAPI.js'
import { productApp}from './APIs/productAPI.js'
import cookieParser  from 'cookie-parser'
import {config} from 'dotenv'
config();//process .env.port
const app=exp()


//body parser middle wear
app.use(exp.json())
app.use(cookieParser())
app.use("/user-api",userApp)
app.use("/product-api",productApp)
const port=process.env.PORT || 4000
//connect to db
async function connectDB(){
    try{
        await connect(process.env.DB_URL);
        console.log("db connection sucess")
        //connect to http server 
        app.listen(port,()=>{ console.log(`server running succesfully to the port ${port}`)})
    }
    catch(err){
        console.log("err in db connnection",err);
    }
}
connectDB();
//error handling poarametres
app.use((err,req,res,next)=>{
   // res.json({message:"error occured",error:err.message})
   console.log(err.name)
   

   // console.log(err.code)
   
   //ValidationError
   if(err.name==="ValidationError")
   {
    return res.status(400).json({message:"error occured",error:err.message})
   }
   //casterror
   if(err.name==="CastError")
   {
    return res.status(400).json({message:"error occured",error:err.message})
   }
   //send server side errors
   res.status(500).json({message:"error occured",error:err.message})

})
//erroe=>name,message,callstack
//duplicate user identification
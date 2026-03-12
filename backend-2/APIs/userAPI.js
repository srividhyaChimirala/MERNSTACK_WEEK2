//create min-experess app(serparate route)
import exp from 'express'
import {UserModel} from "../models/UserModel.js"
import { hash,compare} from'bcryptjs'
import jwt from 'jsonwebtoken'
const {sign} =jwt 
import {VerifyToken} from '../middlewares/verifytoken.js'
export const userApp=exp.Router() //  mini  exp do not have http sever
//define  user restapi  routes
//cfeate new user
//user login

userApp.post('/auth',async(req,res)=>
{ //gte user cred obj rom client
  const {email,password}=req.body;
//verify email
let user=await UserModel.findOne({email:email})
//if email  not existed
if(user===null)
{
  return res.status(404).json({message:"Invalid emil"})
}
//compare pswrds
let result=await compare(password,user.password)
//if pass not ,matched
if(result===false){
  return res.status(400).json({message:"inavlid pass"})
}
//if passw matchd
//craete token -npm i jsonwebtoken
const signedtoken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:10})
//send token 
//res.status(200).json({message:"loggin succes",token:signedtoken})
res.cookie("token",signedtoken,{
  httpOnly:true,
  sameSite:"lax",
  secure:false
})
res.status(200).json({message:"login success",payload:user})
})






userApp.post("/users",async(req,res)=>{
    //get new user obj from 
    const newUser=req.body
    //hash the password
    const hassedpassword= await hash(newUser.password,10)
    newUser.password=hassedpassword;
    //replace plain password with hashed passsowrd
    //create new user oducmnet
    const newUserDocument=new UserModel(newUser)
      //save
   const result= await  newUserDocument.save()
   console.log("result:",result)
    //end response
   res.status(201).json({message:"user created"}) //status cod for succesfull creating of the document

})
//read all users(protecte droyute)
userApp.get("/users",VerifyToken,async(req,res)=>
{ 
  //read aall users
let userLists=await  UserModel.find()
res.status(200).json({message:"users",payload:userLists})
})



//read a user by id
userApp.get("/users/:id",VerifyToken,async(req,res)=>{
 // const uid=req.params.id
//read user emIl from req
 const emailofUser=req.user?.email;
 //console.log(emailofUser)

 const userobj=await UserModel.findOne({email:emailofUser}).populate("cart.product")

  //if user not found
  if(!userobj){
   return  res.status(404).json({message:"user not found"})
  }
  //send res
  res.status(200).json({message:"user",payload:userobj})
})



//update  a suer by id 
userApp.put("/users/:id",VerifyToken,async(req,res)=>{
  //get modified user feom req
  const modified=req.body;
  const uid=req.params.id;
  
  //find user id and update-return modified document
 const updateuser=await UserModel.findByIdAndUpdate(uid,{$set:{...modified}},
  {new:true,runValidators:true},
);
res.status(200).json({message:"user",payload:updateuser})
})


userApp.delete("/users/:id",VerifyToken,async(req,res)=>{
  const uid=req.params.id;
let deleteduser=await UserModel.findByIdAndDelete(uid);
if(!deleteduser){
   return  res.status(404).json({message:"user not found"})
  }
res.status(200).json({message:"user deleted",payload:deleteduser})
})


//add product to cart
userApp.put("/cart/product-id/:pid",VerifyToken,async(req,res)=>{
  let productId=req.params.pid;
  //get current user details
  const emailofUser=req.user?.email;
  //get user from db
  const user=await UserModel.findOne({email:emailofUser})
  //if email is inavalid
  if(!user){
    return res.status(404).json({message:"user  not found"})
  }
  //add product to cart
  
  let result=await UserModel.findOneAndUpdate({email:emailofUser},{$push:{cart:{product:productId}}})
console.log(result)
res.status(200).json({message:"product added to cart"})
})










//add product to cart
userApp.put("/cart/product-id/:pid",VerifyToken,async(req,res)=>{
  let productId=req.params.pid;
  //get current user details
  const emailofUser=req.user?.email;
  //get user from db
  const user=await UserModel.findOne({email:emailofUser})
  //if email is inavalid
  if(!user){
    return res.status(404).json({message:"user  not found"})
  }
  //add product to cart
//let res=await UserModel.find({cart:})
  let result=await UserModel.findOneAndUpdate({email:emailofUser},{$pull:{cart:{product:productId}}})
//console.log(result)
if(!result){
  return res.json({message:"product is already in the cart"})
}
console.log(result)
res.status(200).json({message:"product added to cart"})
})

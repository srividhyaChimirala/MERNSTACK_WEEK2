import jwt from'jsonwebtoken'
const {verify}=jwt
export function  VerifyToken (req,res,next){
    //token bverification logic
   const token=req.cookies?.token;
   //if req from unauthorized 
   if(!token){
    return res.status(401).json({message:"plz login"})
   }
   // if token is eexisted
   try{
   const deocodedtoken =verify(token,'abcdef') 
   console.log( deocodedtoken);
   //attach deocde 
   req.user=deocodedtoken
   next();
   }
catch(err){
res.status(401).json({message:"session expired,plz relogin"})
}}
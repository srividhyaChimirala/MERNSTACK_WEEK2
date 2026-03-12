

console.log("otp sent  succesfully");
let i=10;
let id=setInterval(()=>{
    
    i--;
    if(i==0)
    {
        console.log("RESEND OTP")
        clearInterval(id)
    }
}
    ,1000);


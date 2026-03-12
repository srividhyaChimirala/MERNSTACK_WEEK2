console.log("i will send money by tommarow")
let future=true
const promiseobj=new Promise((fulfilled,rejected)=>{
      setTimeout(()=>{
        if(future===true)
        {
          fulfilled  (" money sent")
        }
        else{
            rejected("iam busy")
        }
      },1000)
         })
         promiseobj.then((message)=>{console.log("meassage in then",message)}).catch((errormessage)=>{console.log("meassage in catch",errormessage)})

// Examples of promises
     //make api requeat
     //hash a password
      //creating token
     //databses,HTTP requests
    //files and strem API's
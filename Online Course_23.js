/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */
   const courses = ["javascript", "react", "node", "mongodb", "express"];
   let r1=courses.filter((element)=>element.length>5)
   console.log(r1)
   let r2=courses.map((element)=>element.toUpperCase())
   console.log(r2)
   /*let r3=courses.reduce((acc,ele)=>acc.join())
   console.log(r3)*/
   let r3=courses.find(ele=>ele==="react")
   console.log(r3)
   let r4=courses.findIndex(ele=>ele==="node")
   console.log(r4)
   let r5=courses.reduce((acc,ele)=>acc+"|"+ele.toUpperCase())
   console.log(r5)
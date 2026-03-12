/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
const marks = [78, 92, 35, 88, 40, 67];
let r1=marks.filter((element)=>element>=40)
   console.log(r1)
 let r2=marks.map((element)=>element+=5)
   console.log(r2)
   let r3=marks.reduce((acc,ele)=>{
    if(acc>ele)
    {
        return acc
    }
    else return ele
   })

        console.log(r3)
 let r4= marks.find((ele)=>ele<40)      
 console.log(r4)
 let r5= marks.findIndex((ele)=>ele===92)      
 console.log(r5)
 
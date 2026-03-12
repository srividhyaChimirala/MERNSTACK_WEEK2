const finsum=(...numbers)=>{
    return numbers.reduce((acc,ele)=>acc+ele)
}
let r=findsum(10,20,30,40)
console.log(r)
let data=[10,20,30,40,50,60,70,80] 
let r6=data.reduce((accumulator,element)=>{
  if(accumulator>element)
  {
    return accumulator
  }
  else return element
})
console.log(r6)
let r7=data.reduce((accumulator,element)=>{
  if(accumulator<element)
  {
    return accumulator
  }
  else return element
})
console.log(r7)


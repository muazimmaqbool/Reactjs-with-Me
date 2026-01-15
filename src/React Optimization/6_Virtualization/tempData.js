//dummpy data used inside virtualization:
export const products=Array.from({length:1000},(_,index)=>({
    id:index+1,
    productName:`Product-${index+1}`,
    isAvailable:index%2===0?"true":"false",
    price:`Rs: ${index+1}00`
}))
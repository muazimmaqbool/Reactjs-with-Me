//dummpy data used inside virtualization:
export const products=Array.from({length:1000},(_,index)=>({
    id:index+1,
    productName:`Product-${index}`,
    isAvailable:index%2===0?true:false,
    price:`Rs: ${index}00`
}))
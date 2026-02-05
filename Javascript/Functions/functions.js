function greet(name){
       console.log('hello '+name)
}
greet("Kartikey")

// 1.) Problem 1

function makeTea(typeOfTea){
     console.log("Making "+typeOfTea)
}
makeTea("Green Tea")

// 2.) Problem 2

function orderTea(teaType){
    function confirmOrder(){
        return 'Order Confirmed for chai'
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("chai")
console.log(orderConfirmation);

// 3.) Problem 3   Arrow Function

const calculateTotal =(price,quantity)=>{
    return price* quantity;
}
let totalCost = calculateTotal(499,100)
console.log(totalCost)


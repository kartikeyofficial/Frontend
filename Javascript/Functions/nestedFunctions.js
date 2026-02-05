// 1.) Problem 1
function makeTea(typeOfTea){
    console.log('makeTea '+typeOfTea)
}
function processTeaOrder(teaFunction){
    return teaFunction('earl Grey') 
}
let order = processTeaOrder(makeTea)
console.log(order);

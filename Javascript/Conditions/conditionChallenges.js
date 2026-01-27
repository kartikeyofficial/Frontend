// check the if a number is greater than another number

let num1= 10;
let num2= 20;


if(num1>num2){
    console.log("num1 is Greater Than num2");
}
else{
    console.log("num2 is Greater Than num1");
    
}

// check if a string is equal to another string

let username = "kartikey";
let anotherUsername = "kartikey";
if(username==anotherUsername){
    console.log("Pick Another Username!")
}
else{
    console.log("You can Pick this username")
}

// Check if a variable is Number or Not

let score = 20
if(typeof score === 'number'){
    console.log("Yes, It is a Number Variable")
}
else{
    console.log("Not, It is a Number Variable")
}


// Check The Array is Empty or Not

let items= []
console.log(items.length)
if(items.length=== 0){
    console.log("Array is Empty!")
}
else{
    console.log("Array is Not Empty!")
}
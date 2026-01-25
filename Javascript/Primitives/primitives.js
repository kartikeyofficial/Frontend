// Numbers
console.log("NUMBERS\n")
let balance = 120;
let anotherBalance = new Number(120)
console.log(anotherBalance)
console.log(anotherBalance.valueOf)
console.log(typeof(anotherBalance)) 
console.log(typeof(balance));

// Boolean
console.log("\nBOOLEAN\n")
let isActive = true;
console.log(typeof(isActive))
let isReallyActive = new Boolean(true)
console.log(typeof isReallyActive)

//Null & Undefined
console.log("\nNULL & UNDEFINED\n")
let firstName= null
console.log(firstName)
let lastName
console.log(lastName)


// String
console.log("\nSTRING\n")
let myString = "Hello"
let myStringOne = "Harshit"
let Addition = myString + " Kartikey"
console.log(Addition)
let total = myString +" "+ myStringOne +" "+ Addition
console.log(total)

// Symbol
console.log("\nSYMBOL\n")
let sm1= Symbol();
let sm2= Symbol();
console.log(sm1 == sm2)

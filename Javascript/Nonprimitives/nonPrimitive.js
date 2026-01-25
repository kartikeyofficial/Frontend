let userName = {
    firstName:"Kumar", 
    lastName:"Kartikey"
}
console.log(userName)
console.log(typeof(userName)) 

// Date
console.log("\nDATE\n")
let today = new Date()
console.log(today.getDate())

// Array
console.log("\nARRAY\n")
let heros= ["IronMan","Captain America","Hulk",true]
console.log(heros[1])
for(let i=0; i<=heros.length;i++){
    console.log(heros[i])
}

// Type Conversion
console.log(2+"1");
let isValue = true;
console.log(isValue + 1)
console.log(Number(isValue))  // if false then it give the answer is 0
console.log(typeof Number(null));

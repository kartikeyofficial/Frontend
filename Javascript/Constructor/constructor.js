function Greet(name){
    console.log("helllo ",name)
}
Greet("Kartikey")

function Person(name, age){
    this.name = name;
    this.age = age;

}
function car(make, model){
    this.make = make
    this.model = model
}

let myCar = new car("Toyota","camry")
console.log(myCar)

let myNewCar = new car("Tata","Safari")
console.log(myNewCar)

function Tea(type){
    this.type= type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    };

}
let lemonTea = new Tea("Lemon Tea")
console.log(lemonTea.describe())
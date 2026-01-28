// 1.) Problem 1
let sum=0;
let i=1
while(i<=5){
    sum =sum+i
    i++
}
console.log(sum) 

// 2.) Problem 2
let countdown = []
let j= 5;
while(j>0){
    countdown.push(j)
    j--;
}
console.log(countdown)

// 3.) Problem 3
// let teaCollection = []
// let tea = "abc"
// do {
//    tea =  prompt('Enter Your Favourite tea (type "stop" to finish)')
//     if(tea !=="stop"){
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");

// 4.) Problem 4
let total =0
let k= 1
do {
    total += k;
    k++;
    
} while (k<=3);
console.log(total)

// 5.) Problem 5
let arr = [2,4,6]
let multiply =[]
for(let i=0; i<arr.length;i++){
    takeNumber = arr[i]*2
    multiply.push(takeNumber)
}
console.log(multiply)

// 6.) Problem 6
let cities= ["Paris","New York","Tokyo","London"]
let CityList = []
for (let c=0;c<cities.length;c++){
    const myCity=cities[c];
    CityList.push(myCity)
}
console.log(CityList)
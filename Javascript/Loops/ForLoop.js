// 1.) Problem 1

let teas = ["green tea","balck tea","chai","oolong tea"]
let selectedTeas =  [];
for (let i=0; i<teas.length;i++){
    if(teas[i]==="chai"){
        break;
    }
    selectedTeas.push(teas[i])
}
console.log(selectedTeas);

// 2.) Problem 2

let cities = ["London","New York","Paris","Berlin"];
let visitedCities = [];
for (let j=0;j<cities.length;j++){
    if(cities[j]==="Paris"){
        continue;
    }
    visitedCities.push(cities[j]);
}
console.log(visitedCities);

// 3.) Problem 3
let numbers = [1,2,3,4,5];
let smallNumbers=[];
for (const num of numbers) {
    if(num===4){
        break;
    }
    smallNumbers.push(num);
    
}
console.log(smallNumbers)

// 4.) Problem 4   FOR OF LOOP
let tea = ["chai","green tea","herbal tea","black tea"]
let prefferdTea=[];
for (const skip of tea) {
    if(skip==="herbal tea"){
        continue;
    }
    prefferdTea.push(skip)
    
    
} 
console.log(prefferdTea);

// 5.) Problem 5  FOR IN LOOP

let citiesPopulation = {
    "London":890000,
    "New York":840000,
    "Paris":220000,
    "Berlin":350000

}
let cityPopulation={}
for (const city in cityPopulation) {
    console.log(citiesPopulation[city])
  

}

// 6.) Problem 6

let worldCities = {
    Sydney: 5000000,
    Tokyo:9000000,
    Berlin:3500000,
    Paris:2200000,
}
let largeCities ={}
for(const city in worldCities){
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city] = worldCities[city];
}
console.log(largeCities)
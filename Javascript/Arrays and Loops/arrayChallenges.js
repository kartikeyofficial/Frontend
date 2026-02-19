// 1.) Problem 1

let teaFlavours = ["Green Tea","Black Tea","Oolong Tea"]
const firstTea=teaFlavours[0]
console.log(firstTea)

// 2.) Problem 2

let cities = ["London","Tokyo","Paris","New York"]
const favouriteCity = cities[2]
console.log(favouriteCity)

// 3.) Problem 3

let teaType = ["herbal tea","white tea","masala chai"]
teaType[1] = "jasmine";
console.log(teaType) 

// 4.) Problem 4
let citiesVisited =["Mumbai","Sydney"]
let addCity = citiesVisited.push("Berlin");
console.log(citiesVisited)

// 5.) Problrm 5
let teaOrders =["chai","iced tea","matcha","earl grey"]
let lastOrder = teaOrders.pop();
console.log(teaOrders)
console.log(lastOrder)

// 6.) Problem 6
let populatTeas = ["green tea","oolong tea","chai"];
let softCopyTea = populatTeas
console.log(populatTeas);
console.log(softCopyTea)

// 7.) Problem 7
let topCities = ["Berlin","Singapore","New York"]
let hardCopyCities= [...topCities]
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities)

// 8.) Problem 8
let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

// 9.) Problem 9
let teaMenu = ["Masala chai","oolong chai","green tea","earl tea"]
console.log(teaMenu.length)

// 10.) Problem 10
let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"]
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList)
console.log(cityBucketList)
function milesToKm (miles){
const km = miles * 1.60934;
return km
}
const johnDistances = 2;
const johnTotalDistances = milesToKm(johnDistances);
console.log(johnTotalDistances)
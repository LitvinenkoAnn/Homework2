
// Filling station A - for S car and gasoline
// Filling station B - for M car and diesel
// Filling station C - for L car and gas


let carFuel = "gasoline"
let carSize = "S"
  
  if (carFuel == "gasoline" && carSize == "S") {
    function fillingStationA() {
      console.log("Filling station A for " + carFuel + " fuel type and " + carSize + " car size")}
      fillingStationA()

} else if (carFuel == "diesel" && carSize == "M") { 
  function fillingStationB() {
    console.log("Filling station B for " + carFuel + " fuel type and " + carSize + " car size")}
    fillingStationB()

} else if (carFuel == "gas" && carSize == "L") { 
  function fillingStationC() {
    console.log("Filling station C for " + carFuel + " fuel type and " + carSize + " car size")}
    fillingStationC()

}else
    console.log("No filling station available") 

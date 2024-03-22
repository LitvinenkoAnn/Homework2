// OПРЕАТОРЫ IF

let answer = "Matisse"
if (answer !== "Picasso") {
    console.log(answer + " is wrong")
}


let age = 75
if (age >=55) {
    console.log("Discount applied")
}


let isDay = true
if (isDay === true ){
    console.log("Lights off!")
}


let score = 51
let pass = score > 50
if(pass){
    console.log(pass) // используем результат сравнения несколько раз , объявили переменную со сравнением и занесли ее в if
}

const song = "Hello"
let replayTimes = 345
if (replayTimes >= 300){
    console.log("Your top song this week: " + song)
}



// ELSE

let vegetarianDiet = false 

if (vegetarianDiet){
    console.log("Restaurante for vegetarians")
} else {
    console.log("No available restaurante")
}



const diet = "vegetarian"
const VegRest = "Root"
const restaurant = "DelPosto"
if (diet === "vegetarian") {
    console.log("Try out: " + VegRest)
} else {
    console.log("Try out: " + restaurant)

}


let today = "Sunday"
if (today !== "Saturday"){
    console.log("Set alarm at 8am")
}


let userAge = 17
if (userAge >=18) {
    console.log("Can drive")
} else {
    console.log("Cant drive")
}


let ageDriver = 20
let canDrive = false
if (ageDriver >=18){
    canDrive = true
}

console.log(canDrive)


let inboxFull = true
const showAlert = inboxFull === true
if (showAlert){
    console.log("Your box is full")
}

let flyMonedeOn = true
if (flyMonedeOn ===true){
    console.log("Turn flight mode off")
}



let condition = false
if(condition){
    console.log("1")
}
if (!condition){
    console.log("2")

} 


let condition1 = false
if(condition1){
    console.log("1")
}
else {
    console.log("2")
}



let isNowDay = false
if (isNowDay) {
    console.log("Lights off!")
} else{
    console.log("Lights on!")
}


let number = 99

if (number !== 1){
    console.log("Its not 1")
}else{
    console.log("It 1")
}


let poins = 7600
let pointsNeeded = 8000
if (poins >= pointsNeeded) {
    console.log("Level 2!")
}else{
    const left = pointsNeeded - poins
    console.log("Left: " + left)
}



// ELSE IF


let hour = 20
if (hour <12) {
    console.log("Good morning")
} else if(hour < 17){
console.log("Good afternoon") 
} else if(hour < 21){
    console.log("Good evening") 
}else{
    console.log("Good night")
}


let score1 = 95
if (score1 > 70 && score1 < 90) {
    console.log("You passed") 
}else if(score1 >= 90){
    console.log("Exellent!") 
}



let age2 = 11
if(age2 <= 12) {
    console.log("No way!") 
}else if (age2<17){
    console.log("Too young!") 
}else if (age2>17){
    console.log("Welcome!") 
}



let degrees = 0
let isFreezing = false
if (degrees <=0 ) {
    isFreezing = true   
}

console.log("Is freezing? " + isFreezing)





let destination = "Venice"
if (destination === "Venice"){
    console.log("Good idea")
}



let flourAdded = 50
let flourNeeded = 200
if (flourAdded === flourNeeded) {
    console.log("Add vanilla bean")
} else {
    flourNeeded = flourNeeded - flourAdded
    console.log("Add more flour " + flourNeeded)
}



let memoryFull = false
let takePicture = false
if (memoryFull) {
    console.log("Phone memory full")
} else{

    takePicture = true
    console.log(takePicture)
}


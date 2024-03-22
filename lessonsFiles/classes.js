// class Car {
//     constructor(age,func){
//         this.age = age
//         this.func = func
//     }
// }

// let newFunc = ()=>{
//     console.log("Hello world")
// }

// let newCar = new Car(5,newFunc)
// console.log(newCar.func())

// console.log(newCar.func())


///////////////////////////// наследование

// class Car{
//     constructor(age){
// this.age = age
//     }
// }

// class BMW extends Car{
//     constructor(mark){
//         super(5)
//         this.mark = mark
//     }
// }

// let bmw = new BMW("car")
// console.log(bmw) // BMW { age: 5, mark: 'car' }



////////////////////////////////////////////////////

// class Car{
//     constructor(){
// console.log("This is Car constructor")
//     }
// }

// class BetweenCarAndBMW extends Car{
// constructor(){
//     super()
//     console.log("This is BetweenCarAndBMW constructor")
// }
// }

// class BMW extends BetweenCarAndBMW{
//     constructor(){
//         super()
//         console.log("This is BMW constructor")
        
//     }
// }

// let bmw = new BMW() // This is Car constructor
//                     // This is BetweenCarAndBMW constructor
//                     // This is BMW constructor

///////////////////////////////////////////////////////////
// class Car{
//     constructor(type){

//  this.type = type // методы в теле класса
//     }
//  printType(){
//  console.log(this.type)
//      }
// }

// let newBMW = new Car("BMW")

// newBMW.printType() // BMW


////////////////////////////////////

// class Car{
//     constructor(type){

//  this.type = type 
//     }
//  setType(newType){ // cеттер
//     this.type = newType
//  console.log(this.type)
//      }

//      getType(){ // геттер
//         return this.type
//      }
// }

// let car = new Car("BMW")

// car.setType("Mercedes") // Mercedes
// let getTypeFromClass = car.getType()
// console.log(getTypeFromClass) // Mercedes

/////////////////////////////////////////////////////////

// class Car{
//     constructor(speed = 300){

//  this.speed = speed 
//     }
//  setSpeed(newSpeed){ // cеттер
//     this.type = newType
//      }

//      getSpeed(){ // геттер
//         return this.speed
//      }

//      print(){
//         console.log(this.speed)
//      }
// }

// let bmw = new Car(500)

// bmw.print() // 500 вывели скорость

///////////////////////////////////


// class Car{
//     constructor(speed = 300){

//  this.speed = speed 
//     }

//     addSpeed(x) {
//         this.speed = this.speed +x
//     }
//     setSpeed(newSpeed){ // cеттер
//     this.type = newType
//      }

//      getSpeed(){ // геттер
//         return this.speed
//      }

//      print(){
//         console.log(this.speed)
//      }
// }

// let bmw = new Car()

// bmw.print() // 300
// bmw.addSpeed(50)
// bmw.print() //350, так как добавили 50 

///////////


// class Google{
//     static staticVariable = "i am static variable"
   
//  constructor(searchField, searchBtn){
//  this.searchField = searchField
//  this. searchBtn = searchBtn
//     }

//     findInGoogleByText(text) {
//         // this.searchField.input(text)
//         // this.searchBtn.click()
//     }
//         print(){
//             console.log(this.staticVariable)
//         }
//     }
    
     

//      let googlePage1 = new Google("searchField","searchBtn" )
//      googlePage1.findInGoogleByText("dog")
// console.log(Google.staticVariable) // i am static variable


/////////////

// class Game {

// #score = 0   // приватная строка
// constructor(){

// }

// getScore(){
//     return this.#score
// }
// incresaeScore(){
//     this.#score++
// }
// }

// let game = new Game()
// console.log(game.getScore())
// game.incresaeScore()
// console.log(game.getScore()) // 0 1


//////


// class Game {

//     #score = 0   // приватная строка
//     constructor(){
    
//     }
    
//     getScore(){
//         return this.#score
//     }
//     incresaeScore(){
//         this.#score++
//     }
//     setScore(newValue){
//         this.#score = newValue
//     }
//     }
    
//     let game = new Game()
//    game.setScore(-5)
//     console.log(game.getScore()) // -5


//////////////////////////////////////////////////////////////////////



 // Tasks 1-3
 
let apartment = {
    floor: 5,
    numberOfrooms: 2
    }
    console.log(apartment.floor, apartment.numberOfrooms) 

let newApartment = {}
     newApartment.__proto__ = apartment
    console.log(newApartment.floor, newApartment.numberOfrooms) 




let bag = {
    productCode: 12345,
    designer: "Guess",
    size: "15cm",
    color: "white",
    price: 30
    }
    console.log(bag.productCode, bag.designer, bag.size, bag.color, bag.price) 

let bag2 = Object.create(bag)
    console.log(bag2.productCode, bag2.designer, bag2.size, bag2.color, bag2.price) 




let article = {
    name: "JavaScript object basics",
    author: "Alex Smith",
    year: 2023,
    isPublished: true
    }




let laptop = new Object(); {
    this.brand = "Lenovo"
    this.model = "A"
    this.memory = 32
    }




let pet = new Object(); {
    this.type = "fish"
    this.nickname = "Dory"
    this.age = 2
    }




function Film (title, year) {
    this.title = title
    this.year = year
    }
        
let film1 = new Film("The Intouchables", 2012)
let film2 = new Film ("Arrival", 2016)
let film3 = new Film ("Duna", 2021)




// Tasks 4-5

let person = {
    firstName: "Alex",
    lastName: "Smith",
    age: 25
    }
    console.log(person) 

let engineer = {
    employeeCode: 33333,
    yearWorking: 10,
    company: "A",
    __proto__:person
    }
    console.log(engineer.firstName, engineer.lastName,engineer.company, engineer.age,engineer.employeeCode, engineer.yearWorking)

let QA_engineer = {}
    QA_engineer.__proto__ = engineer
    console.log(QA_engineer.firstName, QA_engineer.lastName,QA_engineer.company, QA_engineer.age, QA_engineer.employeeCode, QA_engineer.yearWorking) 

     
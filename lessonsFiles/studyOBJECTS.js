// let nazva = {
//     name: "Ilya"
// }

// let povnaNazva = {
//   surname: "Studigrad",
//   __proto__:nazva
// }

// console.log(povnaNazva.name) // Ilya
 
/////////////////////////////////////////////////

// function Animal (age, type) {
//   this.age = age
//   this.type = type
// }

// let dog = new Animal(1, "Dog")
// let cat = new Animal (1, "Cat")

// console.log(dog.type)

/////////////////////////////////////////////////


// let fox = {
//   age:"1"
// }

// delete fox.age - для удаления значения объекта
// console.log(fox)


///////////////////////////////////////////////////

// let fox = {
//   "age":"1"
// }

// console.log(fox["age"]) //  можно и так выписывать в квадратных скобках 



// let fox = {
//    "age 1":"1"
//   }
//   console.log(fox["age 1"]) - можно выписывать с пробелом код будет работать


// let obj = {
//   name: "Alex"
// }

// let Alex = Object.create(obj) - cоздали оъект по образу 

// console.log(Alex.name)




// let obj = {
//   getName: function(){
//     return "Alex"
//   }

// }

// let alex = Object.create(obj)
// console.log(alex.getName()) // получили значение от объекта который наследовали






// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   }


//   let student = {
//     name: "Семён",
//     age: 21,
//     course: "JavaScript разработчик"
// }


// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// const book = {
//     title: '',
//     author: '',
//     pages: 
// }

///////////////////////////////////////////

// function Car (model, year){
//   this.age = model
//   this.year = year
// }

// let p = new Car("P", "2000")
// let m = new Car("M", "2001")

// p.speed = "100km"
// console.log(p) // вывод Car { age: 'P', year: '2000', speed: '100km' }


///////////////////////////////////////////////

// let car = {
//   year:"2000",
//   type:""
// }

// let m = Object.create(car)
// m.type = "m"

// console.log(m.year) // 2000


//////////////

// let car = {
//     year:"2000",
//     type:""
//    }

//   for (key in car){
//     console.log(car[key]) - 2000 получаем значения ключей
//   } 

//////////////////////////////////////////////


// let car = {
//   year:"2000",
//    type:"m"
//     }

// let add = {
//   age: "20"
// }


//     console.log(Object.keys(car)) // - получаем наши ключи [ 'year', 'type' ]
//     console.log(Object.values(car)) // - получаем наши значения [ '2000', 'm' ]
//     console.log(Object.entries(car)) // - [ [ 'year', '2000' ], [ 'type', 'm' ] ]

// let newObj = Object.assign(car,add)
// console.log(newObj) // получаем новый объект которые имеет знаяения двух объектов вместе { year: '2000', type: 'm', age: '20' }



/////////////////////////////////////////////////


// let car = {
//   year:"2000",
//    type:"m"
//     }

// let add = {
//   age: "20",
//   ...car
// }

// console.log(add) // получили данные из car с помощью ...car { age: '20', year: '2000', type: 'm' }

///////////////////////////////////////////////////////////////

// let car = {
//     year:"2000",
//     type:"m"
//     }

//     car.age = "20"
//     let newObj = Object.freeze(car) // замораживаем данные объекта и после этого любые изменения данных не применяются а сохранены прежние
//     car.age = "22"
//     console.log(car) // вывод { year: '2000', type: 'm', age: '20' }

//////////////////////////////////////////////////////////////////////////

    // let car = {
    //   year:"2000",
    //   type:"m"
    //   }
  
    //   car.year = "20"
    //   car.age = "20"
    //   let newObj = Object.seal(car) // позволяем изменять уже созданные свойстав, не разрешает создавать новые свойстав
    //   car.age = "22"
    //   car.year = "30"
    //   console.log(car) 

    ////////////////////////////////////////////

    let obj = {
      name: "Ilya",

    }

    let newObj = {
      age: "20"
    }

    newObj.__proto__ = obj
    console.log(newObj.name) // наследовали и получили Ilya


//     var car = new Object();
// car.make = 'Toyota';
// car.model = 'Camry';
// car.year = 2020;
// car.drive = function() {
//   console.log('Run');
// };
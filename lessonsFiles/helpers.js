import counterFunction from "./counter.js"

// второй вариант - import {counterFunction} from "./counter.js"
// we can rename function - import {counterFunction as Func} from "./counter.js"

// let counter = function(a,b){
//     return a+b
//console.log(counterFunction(5,5))



    const AGE = 50

    class Animal{
        constructor(){
            console.log("Constructor Animal")
        }
    }
    let animal = new Animal()

    export {animal} // сделали объект и его дали возможность экспортировать, в файле counter заимпортили с помощью import {animal} from "./helpers.js"


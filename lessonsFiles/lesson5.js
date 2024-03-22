//length

// let word = "ilya"
// console.log(word.length) - 4 - выводит длину стринги


// slice

// let word = "ilya"
// console.log(word.slice(0,2)) - il - обрезает часть стринги


// let word = ["ilya", "sasha"]
// console.log(word[0].slice(0,2)) il - обрезает часть стринги масива


// let word = ["ilya", "sasha", "3", "4"]
// console.log(word.slice(0,2)) - [ 'ilya', 'sasha' ] - обрезали массив


// let words = ["ilya", "sasha", "3", "4"]
// for (let i=0; i<4; i++){
// let word = words[i]
// console.log(word)
// }
// for (word of words){
//     console.log(word)
// }

// вывод 
// ilya
// sasha
// 3
// 4
// ilya
// sasha
// 3
// 4


//to uppercase

// let word = "ilya"
// console.log(word.toUpperCase()) - ILYA


//tolowercase

// let word = "ILYA"
// console.log(word.toLowerCase()) - ilya

//REPLACE

// let word = "ilya!"
// console.log(word.replace("!",".")) - ilya.

//Concat

// let word = "ilya"
// console.log(word.concat("!","!")) - ilya!!

//------


// let name = ""
// let ilya = ""

// let func = function(){
//     return "ilya"

// }

// result = func()
// ilya = func()

// console.log(result)
// console. log(ilya)

// вывод
// ilya
// ilya


//SPLIT


// let text = "Long text!!!"

// let arr = text.split("")
// console.log(arr)

// вывод разбили по букве

// [
//     'L', 'o', 'n', 'g',
//     ' ', 't', 'e', 'x',
//     't', '!', '!', '!'
//   ]


// let text = "Long, text!!!"
// let arr = text.split(",")
// console.log(arr)

// вывод  разбили по слову

// [ 'Long', ' text!!!' ]


// let text = "Hello"
// let arr = text.split("")
// for (let i=0; i<text.length; i++)
// console.log(text[i])
// console.log(arr)

// вывод
// H
// e
// l
// l
// o
// [ 'H', 'e', 'l', 'l', 'o' ]




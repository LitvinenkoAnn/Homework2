// let num = 6
// let x = num+7
// console.log(x) =  13




// let res = 0
// res +=8
// console.log(res) = 8




//let res = 2
//res *=6
//res = res*6 
//console.log(res) = 12 



// let num = 7
// let res = num%2
// console.log(res) - показывает остаток от деления = 1




// let num = 6
// num = num-1
// console.log(num)  = 5




// let num = 6
// num--
// console.log(num) = 5


// let num = 6
// num-=7
// console.log(num) = -1


// for (let a=0; a<10; a++) - a++ показівает что а увеличится на 1 


// let x = 1
//0<x<10
// console.log(x>0 && x<10) - && (и) - оба значения должны совпадать чтобы вывелось тру



// let x = 1
// 0<x<10
// console.log(x>0 || x>10) - || (или) - хотя бы одно значение должно быть тру чтобы вывелось тру



// 6>4 ? console.log("Yes"): console.log("No") - yes

// let num = 11
// if (num>0 && num <10) {
//    console.log("Inside if")
//}else {
// console.log("Inside else") = отобразится "Inside else" потому что не входим в условия
//}




// let num = 11
// if (num>0 && num <10) {
//     console.log("Inside if")
// }else if (num == 11){ 
//     console.log("Inside else if")
// }else
//     console.log("Inside else") 



// let season = "April"
// function aprilFunc(){
//     console.log("April")
// }
// switch (season){
//     case "April":
//         aprilFunc()
//         break;
//     case "March":
//         console.log("March")
//         break;
//     default:
//         console.log("error")
// }



// let abc = function(name){
//     console.log("Function " + name)
//     return function(name){
//         console.log("Inside function "+ name)
//     }
// }
// abc("vadim")("ilya")



// let abc = function(name){
//     console.log("Function " + name)

//     return function(arg){
//         console.log("Inside function "+ name)
//     }
// }

// abc("vadim")()

 
// let abc = function(name = "Ilya", name2 = "Ivan"){
//     console.log("Function " + name2)

//     return function(){
//         console.log("Inside function " + name)
//     }
// }

// abc ("Kira","Vadim")()



//----


// массивы


// let abc = function (multipl, ...theArgs){
    
//  }

//  let arr = [1,2]


// console.log(arr[0])



// let abc = function (multipl, ...theArgs){
//  return theArgs.map(x=>multipl*x) - используем стрелочную функцию
// }

//     console.log(abc(2,1,2,3,4)) - вывод  [ 2, 4, 6, 8 ]






// let abc = function (multipl, ...theArgs){
//     return theArgs.map(function(x){ - используем обычную функцию
//         return x*multipl
//     }) 
//      }
    
//          console.log(abc(2,1,2,3,4)) - вывод [ 2, 4, 6, 8 ]


// Callback 

// let func = function(){
//     console.log("another function")
// }
// let abc = function(callback){
//     console.log("abc function")
//     callback()
// }

// abc(func) - вывод     abc function
                    //  another function


// Arrow functions 

// let abv = param => {
//     console.log("abv")
// }

// abv() - вывод abv







// let number = 6
// let factorial = function(num){ 
//     // Факториал — это произведение всех натуральных чисел от 1 до 
//     //данного числа. 
//     //Например, факториал числа 5 будет равен 1 × 2 × 3 × 4 × 5 = 120.

//     if (num ==1|| num ==0){
//     return num
// }
// return num * factorial(num-1) // 6*5, 5*4, 4*3, 3*2, 2*1
// }

// console.log(factorial(number))  - вывод 720 


// //Recursion 

// let j = 0

// let forLoop = function(num){
// if (num==10){

//     console.log("inside 10 if")

// }else{
//     console.log("j++")
//     forLoop(num+1)
// }
// }

// forLoop(j)
// console.log("------------------")

// for (let i=0; i<10; i++){
//     console.log("i")
// } 

// вывод 
// j++
// j++
// j++
// j++
// j++
// j++
// j++
// j++
// j++
// j++
// inside 10 if
// ------------------
// i
// i
// i
// i
// i
// i
// i
// i
// i
// i




//LOOP

// for (let g=1; g<11; g=g+1){
//     console.log(g)
// }
// вывод 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// for (let g=1; g<11; g=g*2){
//         console.log(g)
//      }

//      ВЫВОД 
// 1
// 2
// 4
// 8












// function biggestCommonPrefix(arr)
// { (arr.length === 0)
//     return ""
// }

// let commonPrefix = arr[0]

// for (let i= 1; i < arr.length; i++)
// { 
//     let currentString = arr[i];
//     let commonPrefixLength = commonPrefix.length
//     for (let j = 0; j< commonPrefixLength; j++){
//         if (currentString[j] !== commonPrefix[j]) {
//             commonPrefix =   commonPrefix.slice(0,j)
//             break;
//         }
//     }

//     if (currentString.length < commonPrefixLength) {
//         commonPrefix = commonPrefix.slice(0,currentString.length)
//     }
//     if (commonPrefix === "") {
//         break;
//     }
// }

// return commonPrefix;


// let arr = ["flower","flow","flight"]
// console.log(commonPrefix)








// let arr = ["flower","flow","flight"] 
// let commonPrefix = biggestCommonPrefix(arr)
// console.log(commonPrefix)

// function biggestCommonPrefix(arr)
// { (arr.length === 0)
//     return ""
// }
//  return arr.reduce(function(commonPrefix, currentString) {
//     var commonPrefixLength = commonPrefix.length;

//     for (let i = 0; i < commonPrefixLength; i++) {
//         if (currentString[i] !== commonPrefix[i]) {
//             commonPrefix = commonPrefix.slice(0, i);
//             break;
//         }
//     }

//     if (currentString.length < commonPrefixLength) {
//         commonPrefix = commonPrefix.slice(0, currentString.length);
//     }

//     return commonPrefix;
// }, arr[0])





// let arr = ["flower", "flow", "flight"]
// let commonPrefix = biggestCommonPrefix(arr)
// console.log("Biggest common prefix is: " + commonPrefix)



// variant 1


// function biggestCommonPrefix(arr) {
//     if (arr.length === 0) {
//         return "";
//     }

//     return arr.reduce(function (commonPrefix, currentString) {
//         let commonPrefixLength = commonPrefix.length

//         for (let i = 0; i < commonPrefixLength; i++) {
//             if (currentString[i] !== commonPrefix[i]) {
//                 commonPrefix = commonPrefix.slice(0, i)
//                 break;
//             }
//         }

//         if (currentString.length < commonPrefixLength) {
//             commonPrefix = commonPrefix.slice(0, currentString.length)
//         }

//         return commonPrefix;
//     }, arr[0])
// }


// variant 2
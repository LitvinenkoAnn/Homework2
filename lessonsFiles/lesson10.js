import axios from "axios"

// let getPost = async function(){
//     let result = await axios.get("https://jsonplaceholder.typicode.com/comments/1")
//     console.log(result) // выведет инфу которую нужно парсить
//     console.log(result.data) // выведет дату которую уже не нужно парсить
// }
//  getPost() 


//  let getPost = async function(){
//     try {
//         console.log("Hello")
//     }catch(e){
//         console.log(e)
//     }finally{ //всегда выполняется
//         console.log("In block finnaly") 
//     }

//  }
//  getPost() // Hello
//            // In block finnaly


////

import {test} from "node:test";
import assert from "node:assert";


let loginData = [
{
    email: "emailgmail.com",
    pass: "23124124124",
    result: ""
},

{
    email: "email@gmail.com",
    pass: "23124124124",
    result: ""
}
]
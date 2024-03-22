let obj = {
    name: "Ilya",
    age: [1,2,3],
    newObj: {
        speciality: "QA"
    }
}

// console.log(obj.newObj.speciality) // вытягиваем значение speciality - QA

let json = JSON.stringify(obj)
console.log(json) 

// переобразовали из объекта - вывод стринга в джейсоне которая не распознается как объект
// {
//     "name":"Ilya",
//     "age":[1,2,3],
//     "newObj":{
//         "speciality":"QA"
//     }
// }

let newObj = JSON.parse(json)
console.log(newObj) 

// переобразовали из джейсона -  вывод объекта (нужно парсить json в новый объект всегда!!!)
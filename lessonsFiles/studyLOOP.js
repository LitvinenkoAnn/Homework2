let likes = 5
likes = likes + 1 // самоназначение переменной !!! нужно для отслеживания данных которые меняются со временем
console.log(likes)


let like = 5
like += 1 // вместо того чтобы переписывать имя переменной используем оператор += , -= 
console.log(like)

let welcome = "Welcome"
welcome += " Silvia"
console.log(welcome)

let likees = 5
likees++ // оператор ИНКРЕМЕНТА ++ помещенный после имени переменной увеличивает ее значение на 1
console.log(likees)

let likeees = 5
likeees-- // оператор ДЕКРЕМЕНТА -- помещенный после имени переменной уменьшает ее значение на 1
console.log(likeees)


let autopilotOn = true
while (autopilotOn === true) {
console.log("Autopilot on!")
autopilotOn = false
}


let moreComments = true
while (moreComments === true ) {
    moreComments = false
    console.log("New comment")
    console.log("More comments")
} // выведется  New comment  More comments


// let counter = 1 
// while (counter < 4){
//     console.log(counter)
//     counter++
// }

// let counteer = 5
// while (counteer < 10){
//     console.log(counteer)
//     counteer++
// } // 5 6 7 8 9 


let counteer = 5
while (counteer < 10){
    counteer++
    console.log(counteer)
    
}  // 6 7 8 9 10
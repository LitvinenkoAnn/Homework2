
// num1 = num1.concat(num2)
// num1 = num1.sort()
// num1.sort(function(a, b) {
//     return a - b;
//   })
// let filterednum1 = num1.filter(function(item) {
//      return item !== 0;
//   })
// console.log(filterednum1)



// let num1 = [1,2,3,0,0,0]
// let m = 3
// let num2 = [2,5,6,0]
// let n = 3

// num1.length = m+n
// num2.length = n

// m показывает количесов которое нужно сохранить, а n которое нужно игнорить

// if (num2.length !== n){
//      filterednum2 = num2.filter(function(item) {
//         return item !== 0;
//       })
// } else if (num1.length = m+n){

// }


// num1 = num1.concat(num2)
// num1.sort(function(a, b) {
//   return a - b})
//   console.log(num1)
// if (num1.length !== m+n) {
// let filterednum1 = num1.filter(function(item) {
//     return item !== 0;
//   })
//   console.log(filterednum1)

// }

// else {
//     console.log(num1)
// }



// let num1 = [1,2,3,0,0,0]
// let m = 3
// let num2 = [2,5,6]
// let n = 3


// num1 = num1.concat(num2)

// num1 = num1.filter((element, index) => {
//   if (element === 0 && index < m) {
//     num1[index] = num2[index];
//     return true;
//   }
//   return element !== 0,
//   console.log(num1)
// })


// num1.sort(function(a, b) {
//   return a - b})




// let num1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let num2 = [2, 5, 6, 0];
// let n = 3;

// // Объединение массивов и сортировка
// num1 = num1.concat(num2).sort((a, b) => a - b);

// Фильтрация нулей и замена их на соответствующие значения из num2
// num1 = num1.map((element, index) => {
//   if (element === 0 && index < m && index < n) {
//     return num2[index];
//   }
//   return element;
// });

// console.log(num1);

// for (let i = 0; i < m && i < n; i++) {
//   if (num1[i] === 0) {
//     num1[i] = num2[i];
    
//   }else{
//     if (element === 0) {
      
  
//   }
//   return element !== 0, 
// }

// console.log(num1)


// let num1 = [1];
// let m = 1;
// let num2 = [];
// let n = 0;

// // Копируем первые m элементов из num1
// let result = num1.slice(0, m);

// // Добавляем первые n элементов из num2
// result = result.concat(num2.slice(0, n));

// // Сортируем в порядке возрастания
// result.sort((a, b) => a - b);

// console.log(result);



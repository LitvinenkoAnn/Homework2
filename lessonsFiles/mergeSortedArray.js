

let num1 = [1, 2, 3,0,0,0]
let m = 3
let num2 = [2, 5, 6]
let n = 3

function merge(num1, m, num2, n) {
  let result = num1.slice(0, m)

  result = result.concat(num2.slice(0, n))

  result.sort(function(a, b) {
    return a - b})

  for (let i = 0; i < m + n; i++) {
    num1[i] = result[i]
}
}

merge(num1, m, num2, n)
console.log(num1)






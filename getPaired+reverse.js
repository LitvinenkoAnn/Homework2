
const arr = [1, 2, 3, 4, 5, 6]
arr.reverse()
let arrResult = []
for (let i = 0; i < arr.length; i++)
{
  	if ((arr[i] % 2) === 0)

   {
    arrResult.push(arr[i])
   }
  }

  console.log(arrResult)
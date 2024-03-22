// let func = function (callback){
// callback()
// }

// let callBackFunc = function(){
//     console.log("Hello")

// }
// func(callBackFunc) // "Hello"




// let func = function(){
//  setTimeout(()=> {
//     console.log("Waited 3 sec")
//  }, 3000)
//     }


// let func1 = function(){
//     setTimeout(()=> {
//         console.log("Waited 5 sec")
//      }, 5000)

// }

// func()
// func1()

// 5 sec - получается что функции запускаются одновременно

///////////////////////////

// let callFunc = function(callback){
//  setTimeout(()=> {
//     console.log("Waited 3 sec")
//     callback()
//  }, 3000)
//     }


// let callFunc1 = function(){
//     setTimeout(()=> {
//         console.log("Waited 5 sec")
//      }, 5000)

// }

// callFunc(callFunc1)

// 8 cек - получается что запускаем первую функции,после того как она выполнится запускаем вторую



// let promiseFunction = function(isTrue){
//     return new Promise((resolved, rejected)=>{
//         setTimeout(()=>{
//             if(isTrue){
//                 resolved("Result")
//             }else{
//                 rejected("Error")
//             }
//         }, 3000)
//     })
// }


// promiseFunction(true).then((data)=>{
//     console.log(data)
// }).then((data)=>{
// }).catch(()=>{

// })


//////////////

// let asyncFunction = async function(){
//     try{
//     let result = await promiseFunction(false)
//     console.log(result)
//     }catch(e){
//         console.log(e)
//     }
// }

// asyncFunction()


//////////////

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
    
/////

// function fetchComments() {
//     const url = 'https://jsonplaceholder.typicode.com/comments/1';
  
//     return new Promise((resolved, rejected) => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             rejected("Error")
//           }
//           return response.json()
//         })
//         .then(comments => {
//           resolved(comments)
//         })
//         .catch(error => {
//           rejected(error)
//         })
//     })
//   }
  
//   fetchComments()
//     .then(comments => {
//       console.log(comments)
//     })
//     .catch(error => {
//       console.error(error)
//     })



    // function fetchPosts() {
    //     const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
      
    //     return new Promise((resolved, rejected) => {
    //       fetch(url2)
    //         .then(response => {
    //           if (!response.ok) {
    //             rejected("Error")
    //           }
    //           return response.json()
    //         })
    //         .then(posts => {
    //           resolved(posts)
    //         })
    //         .catch(error => {
    //           rejected(error)
    //         })
    //     })
    //   }
      
    //   fetchPosts()
    //     .then(posts => {
    //       console.log(posts)
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })



    // function fetchPosts() {
    //     const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
      
    //     return new Promise((resolved, rejected) => {
    //       fetch(url2)
    //         .then(response => {
    //           if (!response.ok) {
    //             rejected("Error")
    //           }
    //           return response.json()
    //         })
    //         .then(posts => {
    //           resolved(posts)
    //         })
    //         .catch(error => {
    //           rejected(error)
    //         })
    //     })
    //   }

    //   fetchPosts()
    //   .then(posts => {
    //     console.log(posts)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })

    //   function fetchComments() {
    //     const url = 'https://jsonplaceholder.typicode.com/comments/1';
      
    //     return new Promise((resolved, rejected) => {
    //       fetch(url)
    //         .then(response => {
    //           if (!response.ok) {
    //             rejected("Error")
    //           }
    //           return response.json()
    //         })
    //         .then(comments => {
    //           resolved(comments)
    //         })
    //         .catch(error => {
    //           rejected(error)
    //         })
    //     })
    //   }



    // async function fetchComments() {
    //     const url = 'https://jsonplaceholder.typicode.com/comments/1';
      
    //     try {
    //       const response = await fetch(url);
      
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
      
    //       const comments = await response.json();
    //       return comments;
    //     } catch (error) {
    //       console.error(error);
    //       throw error;
    //     }
    //   }


    //   async function fetchPosts() {
    //     const url = 'https://jsonplaceholder.typicode.com/posts/2';
      
    //     try {
    //       const response = await fetch(url);
      
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
      
    //       const posts = await response.json();
    //       return posts;
    //     } catch (error) {
    //       console.error(error);
    //       throw error;
    //     }
    //   }
      
//         Promise.all([comments, posts])
// .then((results) => {
// console.log("Результати: ", results)
// })
// .catch((error) => {
// console.error("Помилка: ", error)
// });



async function fetchComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments/1'
  
    const response = await fetch(url)
    if (!response.ok) {
      console.error("Error: ", error)
    }
  
    return await response.json()
  }


//   fetchComments()
//     .then(comments => console.log('Comments:', comments))
//     .catch(error => console.error('Error:', error))

  async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/2'
  
    const response2 = await fetch(url)
    if (!response2.ok) {
      console.error("Error: ", error)
    }
  
    return await response2.json()
  }
  
//   // Виклик функції та обробка результату
//   fetchPosts()
//     .then(posts => console.log('Posts:', posts))
//     .catch(error => console.error('Error:', error))




    // Promise.all([fetchPosts(),fetchComments()])
    // .then((results) => {
    // console.log("Результати: ", results)
    // })
    // .catch((error) => {
    // console.error("Помилка: ", error)
    // });


    Promise.all([fetchComments(), fetchPosts()])
  .then(results => {
    const comments = results[0];
    const posts = results[1];

    console.log('Comments:', comments);
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });





  ////////////

  // async function fetchComments() {
//     const url = 'https://jsonplaceholder.typicode.com/comments/1'
  
//     const response = await fetch(url)
//     if (!response.ok) {
//       console.error("Error: ", error)
//     }
  
//     return await response.json()
//   }

//   async function fetchPosts() {
//     const url = 'https://jsonplaceholder.typicode.com/posts/2'
  
//     const response2 = await fetch(url)
//     if (!response2.ok) {
//       console.error("Error: ", error)
//     }
  
//     return await response2.json()
//   }


//     Promise.all([fetchComments(), fetchPosts()])
//   .then(results => {
//     const comments = results[0]
//     const posts = results[1]

//     console.log('Comments:', comments)
//     console.log('Posts:', posts)
//   })
//   .catch(error => {
//     console.error('Error:', error)
//   })

//   Promise.allSettled([fetchComments(), fetchPosts()])
//   .then(results => {
//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         console.log('Fulfilled:', result.value)
//       } else {
//         console.error('Rejected:', result.reason)
//       }
//     })
//   })
function Comments() {
     const url = 'https://jsonplaceholder.typicode.com/comments/1';
      
    return new Promise((resolved, rejected) => {
          fetch(url)
            .then(response => {
              if (!response.ok) {
                rejected("Error")
              }
              return response.json()
            })
            .then(comments => {
              resolved(comments)
            })
            .catch(error => {
              rejected(error)
            })
        })
      }

      function Posts() {
        const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
      
        return new Promise((resolved, rejected) => {
          fetch(url2)
            .then(response => {
              if (!response.ok) {
                rejected("Error")
              }
              return response.json()
            })
            .then(posts => {
              resolved(posts)
            })
            .catch(error => {
              rejected(error)
            })
        })
      }

      Promise.all([Comments(), Posts()])
      .then(([comments, posts]) => {
        console.log('Comments:', comments)
        console.log('Posts:', posts)
      })
      .catch(error => {
        console.error('Error:', error)
      })
    
    Promise.allSettled([Comments(), Posts()])
      .then(results => {
        results.forEach(result => {
          if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value)
          } else {
            console.error('Rejected:', result.reason)
          }
        })
      })


  
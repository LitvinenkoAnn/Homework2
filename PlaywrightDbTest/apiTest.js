// import express from "express"

// const app = express()
// const port = 3000

// app.use(express.json())

// let usersBD = [
//     {
//         id: 1,
//         name: "Olga",
//     },

//     {
//         id: 2,
//         name: "Anna"
//     }
// ]



// app.get("/users", (req, res) => {
//   res.json(usersBD)
// })

// app.post("/users", (req, res) => {
//     usersBD.push(req.body)
//     const response = {
//         statusCode: 200,
//         message: "User was added",
//         users: usersBD
//     }
//     res.json(response)
// })

// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id
//   let name = usersBD[id - 1].name
//   usersBD = usersBD.filter(obj => obj.id != id)
//   const response = {
//     statusCode: 200,
//     message: `User ${name} was deleted`
//   };
//   res.json(response);
// })

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`)
// })

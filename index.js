const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)
  let result = login(
    req.body.username,
    req.body.password
  )
  res.send('Login!')
})

app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/bye', (req, res) => {
  res.send('Bye Bye UTeM!')
})


app.post('/register', (req, res) => {
  let result = register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
  )
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let dbUsers = [ 
  { 
      username: "aisyah", 
      password: "13579", 
      name: "aisyah", 
      email: "aisyah000326@gmail.com" 
  }, 
  { 
      username: "sarah", 
      password: "12345", 
      name: "sarah", 
      email: "sarah@gmail.com" 
  }, 
  { 
      username: "lee", 
      password: "98765", 
      name: "lee", 
      email: "lee@gmail.com" 
  } 
] 

function login (reqUsername,reqPassword){ 
 let matchUser = dbUsers.find(                            //find 
  user => user.username == reqUsername // x => console.log(x), => dia buat semua  
  )    
  if (!matchUser)return "User not found!" 
  if(matchUser.password == reqPassword){ 
      return matchUser 
  }else{ 
      return "Invalid password" 
  } 

  //for(let i=0: i <dbUsers.length: i++) 
  //console.log(dbUsers[i]) 
  // if (dbUsers[i].username == reqUsername) 

} 

function register(reqUsername,reqPassword,reqName,reqEmail){ 
  dbUsers.push({                                                  //push 
  username: reqUsername, 
  password: reqPassword, 
  name: reqName, 
  email: reqEmail 
  }) 
} 

//try to login 
console.log(login ("alifah","123")) //valid 
console.log(login("utem","password")) //user not found  

register("utem","password","fkekk","fkekk@m.com") 

console.log(login("utem","password"))
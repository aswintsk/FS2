
const express = require('express')
const app = express()
const port = 3001
app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1> <a href='/user'>Go to User </a> <br><br> <a href='/contact'>Go to Contact </a>")
})

app.get('/user',(req,res)=>{
    res.send("<h1>User Page </h1> <br><br> <a href='/'>Go back</a> <br><br> <a href='/user/mca'>Go to MCA</a>")
})

app.get('/user/mca',(req,res)=>{
    res.send("<h1>MCA User Page </h1><br><br> <a href='/user'>Go back</a>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1> <br><br> <a href='/'>Go back</a>")
})

app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
})


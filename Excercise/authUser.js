import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"

const app = express()
const port = 4001

app.use(express.json())
app.use(session({
    secret:'VerySecret',
    resave:false,
    saveUninitialized:false
}))
app.use(cookieParser())

const users = [ ]
// users.push({uname:'asd',password:'asd'})
// app.get('/',(req,res)=>{
//     res.send(users[0])
// })

app.post('/register',(req,res)=>{
    const {username,password} = req.body
    console.log(username)
    users.push({
        username,
        password
    })
    res.send('User registered')
})

app.post('/login',(req,res)=>{
    const {username,password} = req.body
    console.log(username)
    const user = users.find((u)=>u.username === username)
    if(!user || password !== user.password) return res.status(404).send("Not Authorized")
    
    req.session.user = user;
    res.send("User Logged in")
})

app.get('/dashboard',(req,res)=>{
    if(!req.session.user) return res.send("Unauthorized")

    res.send(`Welcome ${req.session.user.username} `)
})

app.listen(port)
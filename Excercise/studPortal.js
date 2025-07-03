import express from "express"
import session from "express-session"
import cookieParser from "cookie-parser"

const app = express()
const port  = 4001

app.use(express.json())
app.use(session({
    secret: 'studentsession',
    resave: false,
    saveUninitialized:false
}))

app.use(cookieParser())

const students = []

app.post('/register',(req,res)=>{
    const {roll,name,pass} = req.body
    
    students.push({
        roll,
        name,
        pass
    })

    res.send("student registered")
})

app.post('/login',(req,res)=>{
    const {roll,pass} = req.body

    const student = students.find((s)=>s.roll === roll)
    if(!student || pass !== student.pass) return res.send('Not Authorized') 

    req.session.student = student
    res.cookie("studentPortalAccess",roll,{maxAge:3000})
    res.send("Student logged in")
})


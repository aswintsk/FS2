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
    const {roll,name,password} = req.body
    
    students.push({
        roll,
        name,
        password
    })

    res.send("student registered")
})

app.post('/login',(req,res)=>{
    const {roll,password} = req.body
    
    const student = students.find((s)=>s.roll === roll)
    // console.log(student)
    if(!student || password !== student.password) return res.send('Not Authorized') 

    req.session.student = student
    res.cookie("studentPortalAccess",roll,{maxAge:180000})
    res.send("Student logged in")
})


app.get('/result',(req,res)=>{
    if(req.session.student){
        res.status(200).send(`Hi ${req.session.student.name} ,your results are available`)
    }
    else{
        res.status(404).send("Access deined:Please login to view results")
    }
})


app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.clearCookie()
    res.send("Logout success")
})
const courses = ["FS","JAVA","CN","DBS","AI"]
const enrollment = []

app.post('/courses',(req,res)=>{
    if(req.session.student){

        if (enrollment.find(e => e.roll === req.session.student.roll)) {
            return res.status(400).json({ message: "Already registered" });
        }


        const courseArr = Object.values(req.body)
        // console.log(courseArr)
        const UnqArr = new Set(courseArr)

        if(UnqArr.size != courseArr.length){
            return res.status(400).json({message:"Please Select Unique Courses"})
        }
        for(const i of UnqArr){
            if(!courses.includes(i)){
                return res.status(400).json({message:"No such course Found"})
            }
        }

        enrollment.push(
            {
                roll:req.session.student.roll,
                enrolled: courseArr
            }
        )
        res.cookie("LastEnrolledCourse",{maxAge:180000})
        res.send("Registered : "+ JSON.stringify(enrollment.find(e => e.roll == req.session.student.roll)))
    }
    else{
        res.send("Please Login")
    }
})

app.get('/courses',(req,res)=>{
    if(req.session.student)
    {
        res.send(courses)
    }
    else{
        res.send("Please Login to check available courses")
    }
})
app.listen(port,()=>{console.log(`running: ${port}`)})
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())


let students = [
    { id:1 , name:'StudentName 1', course: 'courseName 1'},
    { id:2 , name:'StudentName 2', course: 'courseName 2'},
    { id:3 , name:'StudentName 3', course: 'courseName 3'},
]

app.get('/students',(req,res)=>{
    res.send(students)
})

app.get('/students/:id',(req,res)=>{
    const sid = Number(req.params.id)

    const student = students.find((s)=>{return s.id===sid})

    if(!student) return res.status(404).send("No Such Student")
    
    res.send(student)
})

app.post('/students',(req,res)=>{
    const {name, course} = req.body
    const newStudent = {
        id:students.length+1,
        name,
        course
    }
    students.push(newStudent)

    res.status(201).send("New Student Added :"+ JSON.stringify(newStudent))

})

app.put('/students/:id',(req,res)=>{
    const bid = Number(req.params.id)
    const {name,course} = req.body

    const student = students.find((b)=>b.id===bid)

    if(!student) return res.status(404).send("No Such Student Found")

    student.name = name || student.id
    student.course = course || student.course

    res.status(201).send("Student Details Updated Sucessfully \n Update Student Details: "+ JSON.stringify(student))
})

app.delete('/students/:id',(req,res)=>{
    const bid = Number(req.params.id)

    const dStudent = students.find((b)=>{return b.id===bid})
    console.log(dStudent)
    if(!dStudent) return res.status(404).send("No Such Student Found")

    students.splice(dStudent,1)
    res.send("STUDENT RECORD DELETED SUCESSFULLY \n Deleted Student Details: "+ JSON.stringify(dStudent))
})



app.listen(port)
import express from "express"

const app = express()
const port = 4000

app.use(express.json())
const tasks = [
    {id:1,title:"Task 1",desc:"Descrption 1",status:"Pending"},
    {id:2,title:"Task 2",desc:"Descrption 2",status:"completed"},
    {id:3,title:"Task 3",desc:"Descrption 3",status:"in-progress"},
]


app.get('/tasks',(req,res)=>{
    res.send(tasks)
})

app.get('/tasks/:id',(req,res)=>{
    const tid = Number(req.params.id)

    const task = tasks.find((t)=>t.id===tid)
    if(!task) return res.status(404).send("No such task")

    res.send(task)
})

app.post('/tasks',(req,res)=>{

    const {title, desc , status} = req.body
    console.log("title: ",title)
    console.log("desc: ",desc)
    const newTask = {
        id:tasks.length+1,
        title,
        desc,
        status:"pending"
    }

    tasks.push(newTask)
    res.status(201).send("New Task Added: ",JSON.stringify(newTask))
})

app.put("/tasks/:id",(req,res)=>{
    const tid = Number(req.params.id)

    const task = tasks.find((t)=>t.id===tid)
    if(!task) return res.status(404).send("No such task")

    const {title,desc,status}= req.body

    task.title= title || tasks.title
    task.desc = desc || tasks.desc
    task.status = status || tasks.status

    res.status(201).send("Task Update :"+JSON.stringify(task))
})


app.listen(port)
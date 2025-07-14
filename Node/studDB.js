import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/studentDB',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('MongoDB connected')
}).catch(err=>{
    console.error('MongoDB connection error: ',err)
})


const StudentSchema = new mongoose.Schema({
    name:String,
    rollNo: Number,
    course: String
})

const Student = mongoose.model('Student',StudentSchema)

app.post("/add",async (req,res) =>{
    try{
        const newStudent = new Student(req.body)
        const result = await newStudent.save()
        res.json({message:'Student added: ',result})
    } catch(err){
        res.status(500).json({err})
    }
})

app.get('/students', async (req,res) => {
    try {
        const students= await Student.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({error})
    }
})

app.get('/student/:rollNo', async (req,res) => {
    try {
        const student = await Student.find({rollNo: req.params.rollNo})
        res.json(student)
    } catch (error) {
        res.status(500).json({error})
    }
})

app.put('/update/:rollNo', async (req,res) => {
    try {
        const updatedStudent = await Student.findOneAndUpdate({rollNo:req.params.rollNo}, req.body , {new:true})
        res.json({message:'Student updated: ',updatedStudent})
    } catch (error) {
        res.status(500).json({error})
        
    }
})

app.delete('/delete/:rollNo', async (req,res) => {
    try {
        const deleted = await Student.findOneAndDelete({rollNo:req.params.rollNo})
        res.json({message:'Student deleted ',deleted})
    } catch (error) {
        res.status(500).json({error})
    }
})

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})
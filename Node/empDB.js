import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/employeeDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB conected")
}).catch(err=>{
    console.error('MongoDB connection error: ',err)
})

const EmployeeSchema = new mongoose.Schema({
    empId : {type: Number ,unique: true, required:true},
    name : {type: String, required: true} ,
    department: String,
    designation : String,
    salary : Number 
})

const Employee = mongoose.model('Employee',EmployeeSchema)

app.post('/add', async (req,res) => {
    try {
        const newEmp = new Employee(req.body)
        const result = await newEmp.save() 
        res.json({message:'Employee added: ',result})       
    } catch (error) {
        res.status(500).json({error})
    }    
})


app.get('/employees', async (req,res) => {
    try {
        const Emp = await Employee.find()
        res.json(Emp)       
    } catch (error) {
        res.status(500).json({error})
    }    
})

app.get('/employee/:empId', async (req,res) => {
    try {
        const employee = await Employee.find({empId: req.params.empId})
        res.json(employee)
    } catch (error) {
        res.status(500).json({error})
    }
})

app.put('/update/:empId' , async (req,res) => {
    try {
        const Emp = await Employee.findOneAndUpdate({empId:req.params.empId},req.body, {new:true})
        res.json({message:"Employee updated ",Emp})
    } catch (error) {
        res.status(500).json({error})
    }    
})


app.delete('/delete/:empId', async (req,res) => {
    try {
        const deleted = await Employee.findOneAndDelete({empId:req.params.empId})
        res.json({message:'Employee deleted ',deleted})
    } catch (error) {
        res.status(500).json({error})
    }
})


app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})
import express from 'express'

const app = express()
const port = 3000
// app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine','ejs')

const users = [
    {id:1,email:'ast@gmail.com',password:'1234'}
]


app.get('/',(req,res)=>{
    const msg= req.query.msg
    res.render('index2',{})
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body

    users.forEach((e)=>{
        if(e.email==email && e.password== password){
             res.status(201).send("Login Success")
        }
    })

    res.status(404).redirect(`/`)
})

app.listen(port)
import express from "express"
const app = express()
const port =4000
app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const userName = 'AST'
    res.render('index',{userName})
})

app.get('/subjects',(req,res)=>{
    const sub=['AI','JAVA','FS','CN']
    res.render('subjects',{sub})
})

app.listen(port)
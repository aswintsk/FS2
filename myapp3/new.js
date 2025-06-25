
import express from 'express'
const app = express()
const port = 5000
import path from 'path'

app.get('/',(req,res)=>{
    res.sendFile('D:/MCA36/myapp3/public/index.html')
})

app.get('/user',(req,res)=>{
    res.send("USER PAGE RESPONSE")
})

app.get('/user/:username',(req,res)=>{
    const uname = req.params.username
    res.send(`USER PAGE <br><br> Hello ${uname} !!`)
})

app.get('/user/mca/:username',(req,res)=>{
    const uname = req.params.username
    res.send(`WELCOME ${uname} !!!`)
})

const users= ['ast','joe','Amon']

app.get('/search',(req,res)=>{
    const search = req.query.key
    if(users.includes(search)){
        res.send(`<b> User found : ${search} </b>`)
    }
    else{
        res.send(`<b> User Not Found! </b>`)
    }
})
app.listen(port,()=>{
    console.log(`Listening on PORT NO: ${port}`)
})

import express from 'express'
import router from './router.js'
import { user , username } from './controller.js'
const app = express() 
const port = 3001

app.get('/',(req,res)=>{
    res.send("HELLO EXPRESS !!")
})

app.get('/user/:user',user)
app.get('/search',username)
app.get('/admin',router)
app.listen(port,()=>{
    console.log("Listen Port: "+ port)
})
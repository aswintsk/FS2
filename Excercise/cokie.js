import express from "express"
import cookieParser from "cookie-parser"

const app = express()
const port = 3000

app.use(cookieParser())

// app.get('/',(req,res)=>{
//     res.cookie('name','Express-APP') //create a cookie
//     res.send("Hello express")
// })

// app.get('/fetch',(req,res)=>{
//     console.log(req.cookies)
//     res.send("API Called")
// })


app.get('/',(req,res)=>{
    res.cookie('name','Exp-App',{maxAge:3000})
    res.send("Cookie Created")
})

app.get("/fetch",(req,res)=>{
    console.log(req.cookies)
    res.send("API Called")
})

// Delete cookie 
app.get('/remove-cookie',(req,res)=>{
    res.clearCookie('name')
    console.log("name cookie deleted!! ")
    console.log(req.cookies)
    res.send('cookie deleted')
})





app.listen(port)
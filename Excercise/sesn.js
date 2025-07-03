import express from "express"
import Session from "express-session"

const app = express()
const port = 4001

app.use(Session({
    secret: 'ffff',
    resave:false,
    saveUninitialized:false,
}))

app.get('/visit',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`You have visited ${req.session.page_views}`)
    }
    else{
        req.session.page_views= 1
        res.send("Welcome to ur first visit")
    }
})

app.get('/remove-visit',(req,res)=>{
    req.session.destroy();
    res.send('Session Removed')
})

app.listen(port)
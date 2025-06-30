import express from 'express'

const app = express()
const port  = 4001

app.set('view engine','pug')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    const uname = 'ATS'

    res.render('index',{uname, msg:'Welcome'})
})

app.listen(port)
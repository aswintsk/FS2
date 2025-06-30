import express from "express"

const app = express()
const port = 3000

// app.use(express.static('public'))
app.use('/image',express.static('images'))
app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
    res.send("Hello Express")
})


app.listen(port)
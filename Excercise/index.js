import express from 'express'

const app = express()
const port = 4001
app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const movies= [
        {
            title:'Avengers',
            rating:10
        },
        {
            title:'JohnWick',
            rating:9
        },
        {
            title:'Godfather',
            rating:11
        },
        {
            title:'Shanthi Kranti',
            rating:1
        }
        ]
    res.render('index',{movies})

})



app.listen(port)
import express from 'express'

const app = express()
const port  = 4001

app.set('view engine','pug')
app.use(express.static('public'))
app.use(express.static('assets'))
// app.get('/',(req,res)=>{
//     const uname = 'ATS'

//     res.render('index',{uname, msg:'Welcome'})
// })

const recipes = 
    {
        name:"Omlette" , 
        ingredients:['2 to 3 large eggs','salt','pepper','water','cheese','cheese','green onion','bacon (or ham, sausage, etc.)'] , 
        steps:[
            ' Prep the Eggs',
            ' The Pan',
            ' Pour and Move',
            ' Toppings and Fold',
            ' Top It Off',
        ]
    }

app.get('/',(req,res)=>{
    res.render('index',{recipes})
})

app.listen(port)
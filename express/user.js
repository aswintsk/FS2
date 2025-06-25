import express from 'express'

const app  = express()
const port = 3000

app.use(express.json())



// app.get('/',(req,res)=>{
//     res.send("HOME PAGE ")
// })

// app.get('/message',(req,res)=>{
//     res.send("In Get ")
// })

// let data = {
//     id:1,
//     name:'ast'
// }
// app.post('/message',(req,res)=>{
//     const name = req.body.name;
//     res.send(`Name : ${name}`)
// })


// app.put('/message',(req,res)=>{
//     const name = req.body.name;
//     res.send(`Updated Name : ${name}`)
// })


// app.delete('/message',(req,res)=>{
//     res.send(`Name Deleted`)
// })




let users = [
    {id:1,name:'jade',email:"jade@Gmail.com"},   
    {id:2,name:'carol',email:"carol@Gmail.com"},   
]


app.get('/users',(req,res)=>{
    res.send(users)
})


app.post('/users',(req,res)=>{
    const {name,email}= req.body
    const newUser = {
        id:users.length+1,
        name,
        email
    }
    users.push(newUser)
    res.status(201).send(`User added ${JSON.stringify(newUser)}`)
})


app.put('/users/:id',(req,res)=>{
    const uid = Number(req.params.id)
    const {name,email}= req.body
    
    const user = users.find(u=>u.id === uid)

    if(!user){
        return res.status(404).send("User Not Found")
    }

    user.name= name || user.name
    user.email = email || user.email

    res.send("User Updated: "+JSON.stringify(user))

})


app.delete('/users/:id',(req,res)=>{
    const uid = parseInt(req.params.id)
    const index = users.find(u=>{
        // console.log("===: ",u.id===uid)
        return u.id === uid
    })
    // console.log("index: ",index)
    
    if(!index){
        return res.status(404).send("User Not Found")
    }
    const deletedUser = users.splice(index,1)
    res.send("User Deleted: "+JSON.stringify(deletedUser))

})  















app.listen(port)




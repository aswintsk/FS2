import express from "express"

const app = express()
const port = 4000

app.use(express.json())
const movies = [
    {id:1,title:"Movie 1",genre:"genre 1",rating:10},
    {id:2,title:"Movie 2",genre:"genre 2",rating:9},
    {id:3,title:"Movie 3",genre:"genre 3",rating:6},
]


app.get('/movies',(req,res)=>{
    res.send(movies)
})

app.get('/movies/:id',(req,res)=>{
    const mid = Number(req.params.id)

    const movie = movies.find((t)=>t.id===mid)
    if(!movie) return res.status(404).send("No such movie")

    res.send(movie)
})

app.post('/movies',(req,res)=>{

    const {title, genre , rating} = req.body
    // console.log("title: ",title)
    // console.log("genre: ",genre)
    const newMovie = {
        id:movies.length+1,
        title,
        genre,
        rating
    }

    movies.push(newMovie)
    res.status(201).send("New Movie Added: ",JSON.stringify(newMovie))
})

app.put("/movies/:id",(req,res)=>{
    const mid = Number(req.params.id)

    const movie = movies.find((t)=>t.id===mid)
    if(!movie) return res.status(404).send("No such movie")

    const {title,genre,rating}= req.body

    movie.title= title || movies.title
    movie.genre = genre || movies.genre
    movie.rating = rating || movies.rating

    res.status(201).send("Movie Update :"+JSON.stringify(movie))
})


app.delete('/movies/:id',(req,res)=>{
    const mid = Number(req.params.id)

    const dMovie = movies.find((b)=>{return b.id===mid})
    console.log(dMovie)
    if(!dMovie) return res.status(404).send("No Such Movie Found")

    movies.splice(dMovie,1)
    res.send("STUDENT RECORD DELETED SUCESSFULLY \n Deleted Movie Details: "+ JSON.stringify(dMovie))
})



app.listen(port)
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())


let books = [
    { id:1 , title:'BookName 1', author: 'AuthorName 1'},
    { id:2 , title:'BookName 2', author: 'AuthorName 2'},
    { id:3 , title:'BookName 3', author: 'AuthorName 3'},
]

app.get('/books',(req,res)=>{
    res.send(books)
})

app.post('/books',(req,res)=>{
    const {title, author} = req.body
    const newBook = {
        id:books.length+1,
        title,
        author
    }
    books.push(newBook)

    res.status(201).send("New Book Added :"+ JSON.stringify(newBook))

})

app.put('/books/:id',(req,res)=>{
    const bid = Number(req.params.id)
    const {title,author} = req.body

    const book = books.find((b)=>b.id===bid)

    if(!book) return res.status(404).send("No Such Book Found")

    book.title = title || book.id
    book.author = author || book.author

    res.status(201).send("Book Details Updated Sucessfully \n Update Book Details: "+ JSON.stringify(book))
})

app.delete('/books/:id',(req,res)=>{
    const bid = Number(req.params.id)

    const dBook = books.find((b)=>{return b.id===bid})
    console.log(dBook)
    if(!dBook) return res.status(404).send("No Such Book Found")

    books.splice(dBook,1)
    res.send("BOOK DELETED SUCESSFULLY \n Deleted Book Details: "+ JSON.stringify(dBook))
})



app.listen(port)
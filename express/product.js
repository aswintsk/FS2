import express from 'express';

const app = express();
const port = 3000;

app.use(express.json())

let products = [
    {id:1, name: 'Product 1', price: 1000 , stock: 10 },
    {id:2, name: 'Product 2', price: 2000 , stock: 20 },
    {id:3, name: 'Product 3', price: 3000 , stock: 30 },
]


app.get('/products',(req,res)=>{
    res.send(products)
})

app.post('/products',(req,res)=>{
    const {name , price , stock} = req.body

    const product = 
        {
            id:products.length+1,
            name,
            price,
            stock
        }
    

    products.push(product)
    res.status(201).send("Product added sucessfully \n Product: "+JSON.stringify(product))
})

app.put('/products/:id',(req,res)=>{
    const id = req.params.id
    const {name, price, stock} = req.body

    const product = products.find(i=>
        i.id == id
    )
    console.log(product)
    if(!product) return res.status(404).send("No such product ")
    
    product.name = name || product.name
    product.price = price || product.price
    product.stock = stock || product.stock
    
    res.send("Product Updated : "+ JSON.stringify(product))
})

app.delete('/products/:id',(req,res)=>{
    const pid = Number(req.params.id)
    //console.log(pid)
    const product = products.find((p)=>{return p.id===pid})
    //console.log(product)
    if(!product) return res.status(404).send("No Such Product")

    products.splice(product,1)
    res.send("Product Deleted \n Deleted Product: "+JSON.stringify(product))
})

app.listen(port)
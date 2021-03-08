
const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id:1,
        name:"name",
        price:50,
        image:"https://via.placeholder.com/300x200",
        stock:10,
    },
    {
        id:2,
        name:"name",
        price:79,
        image:"https://via.placeholder.com/300x200",
        stock:40,
    },
    {
        id:3,
        name:"name",
        price:230,
        image:"https://via.placeholder.com/300x200",
        stock:25,
    },
    {
        id:4,
        name:"name",
        price:149,
        image:"https://via.placeholder.com/300x200",
        stock:35,
    },
    {
        id:5,
        name:"name",
        price:85,
        image:"https://via.placeholder.com/300x200",
        stock:100,
    },
    {
        id:6,
        name:"name",
        price:90,
        image:"https://via.placeholder.com/300x200",
        stock:60,
    }
]
app.get('/api/products', (req, res) => {
  res.send(products);
})

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

let productRoutes = require('./routes/product')
app.use('/',productRoutes);

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})
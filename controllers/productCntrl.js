let Product = require('../models/Product')

exports.postProduct = (req,res)=>{
  let { id, name} = req.body
  let product = new Product(id,name)

  product.save()
  res.json({ msg: 'Product added'})
}

exports.getProduct = (req,res)=>{
    let arr =  Product.fetchAll();
    res.json( arr);
}

exports.getSingleProduct = (req,res)=>{
    let ids = req.params.id
    let val =  Product.singleProduct(ids);    
    res.json(val);
}

exports.deleteProduct = (req,res)=>{
  let ids = req.params.id
  let arr =  Product.deleteProduct(ids)    
  res.json(arr);
}

exports.updateProduct = (req,res)=>{
  let ids = req.params.id
  let { name } = req.body
  let prod =  Product.singleProduct(ids);
  prod.name = name;
  res.json( prod);
}
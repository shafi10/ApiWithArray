let products = []

module.exports= class Product{
    constructor(id,name){
       this.id = id;
       this.name = name;
    }

    save(){
       products.push(this)
    }

    static fetchAll(){
        return products;
    }

    static singleProduct(ids){
       return products.find(val=> val.id == ids);
    }

    static deleteProduct(id){
       let ids = this.singleProduct(id);
       let index = products.indexOf(ids);

       products.splice(index,1);
       return products;
    }
}
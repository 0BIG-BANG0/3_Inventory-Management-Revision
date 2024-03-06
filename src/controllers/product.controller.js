import path from "path"
import ProductModel from "../models/product.model.js"

export default class ProductController{

//ChatGpt : https://chat.openai.com/share/a709558d-1bfe-4214-91cc-9152403a55cd

    getProducts(req, res){
        let products = ProductModel.get()
        // console.log(products)
        res.render("products", {products:products})

        // return res.sendFile(path.join(path.resolve(), "src","views", "products.html"))
    }

    getAddForm(req, res){
        return res.render('new-product',{errorMessage:null})
    }

    postAddProduct(req, res){
        // we can also validate here but it leads to violate Single Responsibility Principle
        // console.log(req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get()
        return res.render("products",{products:products})
    }
    getUpdateProductView(req,res,next){
        //1. If Product Exist then return view
        const id = req.params.id;
        const productFound = ProductModel.getByID(id);
        if(productFound){
            res.render("update-product",{product:productFound, errorMessage:null})
        }else{
            //2. else return errors
            res.status(401).send("Product not found")

        }
    }
    async postUpdateProduct(req,res){
         await ProductModel.update(req.body);
        const products = ProductModel.get();
        console.log(products)
        res.render("products",{products:products})  
    }

    // This function is intended to delete a product from the database and render the updated list of products.
getDeleteProductView(req, res) {
    // Extract the product id from the request parameters
    const id = req.params.id;
    // Log the id for debugging purposes
    // console.log(id);
    
    // Call the static method 'deleteById' of the ProductModel class to delete the product
    ProductModel.deleteById(id);

    // Retrieve the updated list of products from the database
    const products = ProductModel.get();

    // Render the 'products' view and pass the updated list of products to it
    res.render("products", { products });
}

//Search Product
searchProduct(req,res){
    const {search} = req.body;
    console.log(search)
    const product = ProductModel.searchByName(search);
    res.render("searchResults", {products:product})   
}
}
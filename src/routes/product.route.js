import express from "express"
import ProductController from "../controllers/product.controller.js"
import validateRequest from "../middleware/validation.middleware.js";

//Initialize the Express Router
const productRouter = express.Router()

//instantiate the product Controller

const productController = new ProductController();

productRouter.get("/", productController.getProducts)
productRouter.get("/new", productController.getAddForm)
productRouter.post("/", validateRequest,productController.postAddProduct)

//Update
productRouter.get("/update-product/:id", productController.getUpdateProductView)
productRouter.post("/update-product/", productController.postUpdateProduct)


//Delete
productRouter.post("/delete-product/:id" ,productController.getDeleteProductView)

//Search
productRouter.post("/search", productController.searchProduct)

export default productRouter
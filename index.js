// Importing necessary modules and files
import express from "express";
import productRouter from "./src/routes/product.route.js";
import ejslayout from "express-ejs-layouts";
import path from "path";

// Creating an instance of the Express application
const app = express();

//for js file
app.use(express.static("public"));
app.use(express.static("views"));

//parse form data
app.use(express.urlencoded({ extended: true }));

// Setting up view Engine (EJS in this case)
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

// Using express-ejs-layouts for layout support
app.use(ejslayout);

// Serving static files from 'src/views' directory
app.use(express.static("src/views"));

// Using the productRouter for handling routes starting from "/"
app.use("/", productRouter);

// Exporting the configured Express application
export default app;

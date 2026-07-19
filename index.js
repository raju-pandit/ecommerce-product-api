import express from "express";
import mongoose from "mongoose";
import Product from "./schema.js";
import Data from "./data.js";


const app=express();
await mongoose.connect(
  "mongodb+srv://panditraju7369_db_user:e0kRcHVAUDyrvx46@cluster0.zd3ojjf.mongodb.net/ProductDetails",
);

app.use(express.json());


// get the data form data 

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();

  res.send(product);
});

app.post("/products/bulk", async (req, res) => {
  try {
    const products = await Product.insertMany(Data);

    res.status(201).json({
      message: "Products inserted successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//get the all information
app.get("/products", async(req,res)=>{
  const product = await Product.find();
  res.json({
    message: "all product information is here ",
    product:product
  });
});



//filter by id in database 
app.get("/products/filter", async(req,res)=>{
    const products = await Product.find(req.query);
    res.json(products);
});

//get element by slug

app.get("/products/slug/:slug",async(req,res)=>
{
    try {
      const product = await Product.findOne({
        slug: req.params.slug,
      });
      if (!product) {
        return res.status(404).json({
          message: "product is not found",
        });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    

});


app.patch("/products/slug/:slug", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { slug: req.params.slug }, // Search by slug
      req.body, // Updated data
      {
        new: true, // Return updated document
        runValidators: true, // Apply schema validation
      },
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//product is deleted 


app.delete("/products/slug/:slug", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      slug: req.params.slug,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});










app.listen(3000,()=>{

    console.log("Sever is running port no 3000");
});

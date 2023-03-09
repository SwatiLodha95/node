const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Post = require("./model/Post");
const mongoose = require("mongoose");
const product = require('./model/product');
const user = require('./model/user');
const cart = require('./model/cart');
const app = express();

//middlewear
app.use(bodyParser.json());
app.use(express());
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://user1:user1@post-cluster.w7qbx6c.mongodb.net/?retryWrites=true&w=majority")
    .then(doc => {
        console.log("Mongodb Connected");
    }).catch(error => {
        console.log(error)
    });

app.get("/ecomms", (req, res) => {
    product.find().then (docs=>{
        res.status(200).json({
            message: "Order Add Successfully",
            docs : docs
        })
    }).catch(error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })
   
})
app.get("/ecommscart", (req, res) => {
    cart.find().then (docs=>{
        res.status(200).json({
            message: "Cart Add Successfully",
            docs : docs
        })
    }).catch(error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })
   
})
app.get("/ecommsuser", (req, res) => {
    user.find().then (docs=>{
        res.status(200).json({
            message: "User Add Successfully",
            docs : docs
        })
    }).catch(error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })
   
})
app.post("/ecomms", (req, res) => {
    const newEcomms = new product({
         title : req.body.title,
        quantity : req.body.quantity,
        price : req.body.price,
        createdAt : new Date().getTime()
    });
    newEcomms.save().then (doc =>{
        res.status(200).json({
            message: "Order Add Successfully",
        })
    }).catch (error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })  
})
app.post("/ecommscart", (req, res) => {
    const newEcomms = new cart({
      productId : req.body.productId,
      itemNumber : req.body.itemNumber,
      totalPrize : req.body.totalPrize
    });
    newEcomms.save().then (doc =>{
        res.status(200).json({
            message: "Order Add Successfully",
        })
    }).catch (error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })  
})
app.post("/ecommsuser", (req, res) => {
    const newEcomms = new user({
     name: req.body.name,
     contact : req.body.contact,
     email : req.body.email
    });
    newEcomms.save().then (doc =>{
        res.status(200).json({
            message: "Order Add Successfully",
        })
    }).catch (error=>{
        res.status(400).json({
            message: "Something Went Wrong"
        })
    })  
})
app.put("/ecomms/:id", (req, res) => {
    product.findOneAndUpdate({_id: req.params.id}, {$set:{title: req.body.newValue}},(error, response)=>{
        if (error == null){
            res.status(200).json({
                message: "Post Updated Successfully"
            })
        } else{
            res.status(400).json({
                message: "Post Not Updated, Something Went Wrong"
            })
        }
    })
})
app.put("/ecommscart/:id", (req, res) => {
    cart.findOneAndUpdate({_id: req.params.id}, {$set:{title: req.body.newValue}},(error, response)=>{
        if (error == null){
            res.status(200).json({
                message: "Post Updated Successfully"
            })
        } else{
            res.status(400).json({
                message: "Post Not Updated, Something Went Wrong"
            })
        }
    })
})
app.put("/ecommsuser/:id", (req, res) => {
    user.findOneAndUpdate({_id: req.params.id}, {$set:{title: req.body.newValue}},(error, response)=>{
        if (error == null){
            res.status(200).jsoecomms({
                message: "Post Updated Successfully"
            })
        } else{
            res.status(400).jsoecomms({
                message: "Post Not Updated, Something Went Wrong"
            })
        }
    })
})
app.delete("/ecomms/:id", (req, res) => {
   product.findOneAndDelete({_id: req.params.id}, (error, response) => {
    if(error == null) {
        res.status(200).json({
            message: "Posts Method Deleted Successfully"
        })
    }
   })
})

module.exports = app;

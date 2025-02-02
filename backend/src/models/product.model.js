import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
    },
    price:{
        type:String,
        trim:true,
        required:true,
    },
    productId:{
        unique:true,
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("Product", productSchema)

export default Product
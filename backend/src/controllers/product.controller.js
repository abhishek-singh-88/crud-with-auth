import Product from "../models/product.model.js";


// add product 
export const addProduct = async (req, res) => {
  try {
    const {name, price, productId} = req.body
    const {img} = req.files

      img.mv(`src/uploads/${img.name}`, async(err)=>{
        if(err){
            res.status(400).json({message:"Problem in file moves !", err})
        }
    })
    
    const product =  await Product.create({name, price, productId, img:img.name})
    if(!res.headersSent){
        res.status(201).json({message:"product added successfully ! ",product})
    }
    
   
  } catch (error) {
    console.log("error in add product controller : ", error.message);
    res.status(500).json({message:"Internal server error ! "})
  }
};


// get products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({message:"All products are here ! ", products})
    } catch (error) {
    console.log("error in get product controller : ", error.message);
    res.status(500).json({message:"Internal server error ! "})
    }
  };
  

// update product
  export const updateProduct = async (req, res) => {
    try {
      const {name, price, productId} = req.body
      const {img} = req.files
      const {_id} = req.params

      img.mv(`src/uploads/${img.name}`, async(err)=>{
        if(err){
            res.status(400).json({message:"Problem in file moves !"})
        }else{
            const product =  await Product.findByIdAndUpdate({_id}, {name, price, productId, img:img.name})
            res.status(201).json({message:"product updated successfully ! ",product})
        }
    })  
    } catch (error) {
      console.log("error in update product controller : ", error.message);
      res.status(500).json({message:"Internal server error ! "})
    }
  };


// delete product 
  export const deleteProduct = async (req, res) => {
    try {
        const {_id} = req.params
        const deletedProduct = await Product.findByIdAndDelete({_id})
        res.status(200).json({message:"this product is deleted permanently ! ", deletedProduct})
    } catch (error) {
    console.log("error in delete product controller : ", error.message);
    res.status(500).json({message:"Internal server error ! "})
    }
  };
  






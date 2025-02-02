import express from 'express'
import { addProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js'
import validateUser from '../middleware/token.verify.js'

const router = express.Router()

router.post('/add-product', validateUser, addProduct)
router.get('/get-products', validateUser,  getProducts)
router.put('/update-product/:_id',validateUser, updateProduct)
router.delete('/delete-product/:_id',validateUser, deleteProduct)

export default router



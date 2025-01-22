import express from 'express'
import { deleteProduct, getProduct, postProducts } from '../controllers/productController.js'




const router=express.Router()


router.get("/",getProduct)

router.post("/",postProducts)

router.delete("/:id",deleteProduct)


export default router
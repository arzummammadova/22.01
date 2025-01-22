import express from 'express'
import "dotenv/config"
import cors from 'cors'
import './src/db/dbProducts.js'
import router from './src/router/productRouter.js'

const port=process.env.PORT || 5001

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/products",router)

app.get("/",(req,res)=>{
    res.send("hello worls")
})


app.listen(port,()=>{
    console.log(`port is runnig o ${port}`)
})
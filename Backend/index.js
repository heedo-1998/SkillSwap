const express=require('express')
const cookieParser=require("cookie-parser")


const app=express()
app.use(express.json())
app.use(cookieParser())





const port=3000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
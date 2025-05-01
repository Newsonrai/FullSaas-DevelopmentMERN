const express = require('express') //express require gareko 
const { books } = require('./database/connection')


const app = express()//express trigger gareko

//import gareko databaseko file
require("./database/connection")

app.use(express.json())

// Alternative Method
// const app = require('express')()

app.get("/books",async(req,res)=>{
// logic to fetch books from database
const datas = await books.findAll() //select * from books, always returns arrays

    res.json({
        message : "Books fetched successfully.",
        datas
    })
})
app.post("/books",(req,res)=>{
    console.log(req.body)
    res.json({
        message : "Book added successfully."
    })
})
app.delete("/books/:id",(req,res)=>{
    res.json({
        message : "Book deleted successfully."
    })
})
app.patch("/books/:id",(req,res)=>{
    res.json({
        message : "Book updated successfully."
    })
})





postgresql://postgres.umzlbthbzliwutpabqfc:Newson@01@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(4000,function(){
    console.log('server/backend/node project has started at port 3000')
})
const express = require('express') //express require gareko 
const app = express()//express trigger gareko

//import gareko databaseko file
require("./database/connection")

// Alternative Method
// const app = require('express')()

app.get("/books",(req,res)=>{
    res.json({
        message : "Books fetched successfully."
    })
})
app.post("/books",(req,res)=>{
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

app.listen(3000,function(){
    console.log('server/backend/node project has started at port 3000')
})
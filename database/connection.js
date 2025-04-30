// yaa db connection ko code/ logic lekhxum

const {Sequelize,DataTypes,} = require("sequelize") //yo xai deconstruct gareko


// const bookModel = require("./models/book.model")

//alternative way:---
// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

// class instantation garera object banako
const sequelize = new Sequelize("postgresql://postgres.umzlbthbzliwutpabqfc:Newson@01@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated Successfully.")
})
.catch((err)=>{
    console.log("Error"+ err)
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books=require("./models/book.model")(sequelize,DataTypes)
db.users= require("./models/user.model")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)

// migrate code:---->
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate Vayo")
})


module.exports = db 

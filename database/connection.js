// yaa db connection ko code/ logic lekhxum

const {Sequelize,DataTypes,} = require("sequelize") //yo xai deconstruct gareko

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

module.exports = db 

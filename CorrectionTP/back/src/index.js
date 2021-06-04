const express = require("express")
const mysql = require("mysql")

const app = express()
const PORT = process.env.PROT || 3000

//Pour se connecter à une base de donées
const db = mysql.createConnection({
    host : "db",
    user : 'root',
    password : 'root'
})
app.get('/', (req,res)=> {
    res.json({data: "data from api"})
    
})

app.listen(PORT, () => {

})
const express = require("express")
const http = require("http")
const app = express()

app.get('/', (req, res) => {
    res.end("Bonjour tout le monde")
    http.request('http://'+process.env.ADDRESS_APACHE4)
})

app.listen(80, () => {
    console.log("app is running")
})
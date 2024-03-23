const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require("./routes/routes")

const conn = require("./db/conn")

conn()
app.use('/', routes)


app.listen(3000, function () {
    console.log('Server UP port 3000')
})
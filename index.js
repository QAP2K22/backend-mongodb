const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require("./routes/routes")

const conn = require("./db/conn")

conn()
app.use('/', routes)


const listener = app.listen(process.env.API_PORT || 8080, function () {
    console.log(`Server UP port ${listener.address().port}`)
})
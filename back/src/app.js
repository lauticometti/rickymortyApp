const express = require('express')
const morgan = require('morgan')
const router = require('./routes/server.js')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/rickandmorty', router)

// app.get("/api", (req, res) => {
//   res.json({ message: "Hola desde el servidor!" });
// });

module.exports = app
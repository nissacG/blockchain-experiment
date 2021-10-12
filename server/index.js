require('dotenv').config();
const express = require('express')
const cors = require("cors")
const contract = require("./routes/contract.js")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

// Routes
app.get('/health', (req, res) => {
  res.send('api running')
})
app.use("/contract", contract)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
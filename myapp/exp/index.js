const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.send("Hello Nashit. This is my first program");
})

app.listen(port, () => {
  console.log('Up')
})
const db = require("../db/connect")
const express = require('express');
const app = express();
const port = 3001

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/api',(req, res) => {
  db.query('SELECT * FROM notes;')
    .then((results) => {
      res.json(results.rows)
     })
}); 

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
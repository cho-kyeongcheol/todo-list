const express = require('express')
const app = express()
const port = 4000

app.get('/getUser', (req, res) => {

  // db connect
  // db select

  res.json({
    'username': 'john',
    'age': 20,
    'content': ['1', '2', '3', '4']
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

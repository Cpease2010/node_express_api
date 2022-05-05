const express = require('express')
const app = express()
const port = process.env.PORT || 3333;

app.get('/:user/:repo', (req, res) => {
  if (req.body)
    return;
  res.send('Hello World!')
})

app.listen(port, () => {
  if (port === 3333) {
    console.log(`Server up at: http://localhost:3333`)
    return
  }
  console.log('Server is up!')
});
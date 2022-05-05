const express = require('express');
const { badPathParameters } = require('./Helpers/badRequest');
const app = express()

app.get('/:user/:repo', (req, res) => {
  res.send(req.params)
})

app.get('*', (req, res) => {
  res.send(400, badPathParameters)
})

module.exports = app
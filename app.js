const express = require('express')
const { badPathParameters } = require('./Helpers/badRequest')
const { getPullRequestInformation } = require('./Services/githubService')
const app = express()

app.get('/:githubUser/:githubRepository', (req, res) => {

  getPullRequestInformation(req.params)
    .then(data => res.send({ data }))
})

// TODO: Handle 404 from github

app.get('*', (req, res) => {
  res.status(400).send(badPathParameters)
})

module.exports = app
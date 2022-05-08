const { SlowBuffer } = require('buffer')
const express = require('express')
const { badPathParameters } = require('./Helpers/badRequest')
const { getPullRequests, getCommits } = require('./Services/githubService')

const app = express()

app.get('/:githubUser/:githubRepository', (req, res) => {

  getPullRequests(req.params)
    .then(pullRequests => getCommits(req.params, pullRequests))
    .then(prResponse => res.send(prResponse))
    .catch(err => res.send({"Error Message": err.message}))
})

// TODO: Handle 404 from github

app.get('*', (req, res) => {
  res.status(400).send(badPathParameters)
})

module.exports = app
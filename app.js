const express = require('express')
const {badRequest} = require('./Helpers/badRequest')
const { getPullRequests, getCommits } = require('./Services/githubService')

const app = express()

app.get('/:githubUser/:githubRepository', (req, res) => {
  getPullRequests(req.params)
    .then(pullRequests => getCommits(pullRequests))
    .then(prResponse => res.send(prResponse))
    .catch(err => {
      console.error({ Error: err.message })
      badRequest(req, res)
    })
})

app.get('*', badRequest)

module.exports = app
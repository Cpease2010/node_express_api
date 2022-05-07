const express = require('express')
const { badPathParameters } = require('./Helpers/badRequest')
const { getRepositoryInformation } = require('./Services/githubService')
const app = express()

app.get('/:githubUser/:githubRepository', (req, res) => {

  getRepositoryInformation(req.params)
    .then(data => {
      let pullRequests = []
      data.forEach(prData => {
        pullRequests.push({
          id: prData['id'],
          number: prData['number'],
          title: prData['title'],
          author: prData['user']['login']
        })
      })
      return pullRequests
    })
    .then(data => res.send({ data }))
})

// TODO: Handle 404 from github

app.get('*', (req, res) => {
  res.status(400).send(badPathParameters)
})

module.exports = app
const axios = require('axios')
const buildPrlist = require('../Helpers/buildPrList')
const buildPrUrl = require('../Helpers/buildPrUrl')

const getPullRequests = (params) =>
  axios.get(buildPrUrl(params))
    .then(response => response.data)

const getCommits = async (pullRequests) => {
  let commitPromises = []

  pullRequests.forEach(pr => {
    commitPromises.push(axios.get(pr['commits_url']))
  })

  let commits = await Promise.all(commitPromises)

  return buildPrlist(pullRequests, commits)
}

module.exports = { getPullRequests, getCommits }
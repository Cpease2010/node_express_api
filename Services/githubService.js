const axios = require('axios')
const buildPrlist = require('../Helpers/buildPrList')
const pullRequestsUrl = require('../Helpers/urls')

const getPullRequests = (params) =>
  axios.get(pullRequestsUrl(params))
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
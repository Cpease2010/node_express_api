const axios = require('axios')
const { pullRequestsUrl, pullRequestCommitsUrl } = require('../Helpers/urls')

const getPullRequests = (params) =>
  axios.get(pullRequestsUrl(params))
    .then(response => response.data)

const getCommits = async (params, pullRequests) => {
  let prList = []
  let prPromises = []

  pullRequests.forEach(pr => {
    prPromises.push(axios.get(pullRequestCommitsUrl(params, pr['number'])))
  })

  let prData = await Promise.all(prPromises)
  pullRequests.forEach(pr => {
    let prObject = {
      id: pr['id'],
      number: pr['number'],
      title: pr['title'],
      author: pr['user']['login']
    }
    prList.push(prObject)
  })

  prData.forEach(({ data }, i) => {
    prList[i]['commit'] = data.length
  });
  
  return prList
}

module.exports = { getPullRequests, getCommits }
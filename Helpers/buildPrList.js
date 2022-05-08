const buildPrlist = (pullRequests, prData) => {

  let prList = []
  pullRequests.forEach((pr,i) => {

    let prObject = {
      id: pr['id'],
      number: pr['number'],
      title: pr['title'],
      author: pr['user']['login'],
      commit: prData[i]['data'].length
    }
    prList.push(prObject)
  })

  return prList
}

module.exports = buildPrlist
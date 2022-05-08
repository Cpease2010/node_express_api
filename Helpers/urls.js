const pullRequestsUrl = ({githubUser, githubRepository}) => `https://api.github.com/repos/${githubUser}/${githubRepository}/pulls`

module.exports = pullRequestsUrl
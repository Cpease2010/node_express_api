const pullRequestsUrl = ({githubUser, githubRepository}) => `https://api.github.com/repos/${githubUser}/${githubRepository}/pulls`

const pullRequestCommitsUrl = ({githubUser, githubRepository}, pullRequestNumber) => `https://api.github.com/repos/${githubUser}/${githubRepository}/pulls/${pullRequestNumber}/commits`

module.exports = {pullRequestsUrl,  pullRequestCommitsUrl}
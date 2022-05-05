# Node Express Back

## Tech Stack
- [x] Node
- [ ] Typescript
- [x] Jest
- [ ] AWS Lambda
## Features
- [x] Expose endpoint accepting params: `user` && `repo`
- [?] Tests
  - [ ] Unit
  - [ ] Integration
  - [x] Something Else (?API?)
- [ ] Consumes [GitHub API](https://developer.github.com/v3)
- [ ] Returns PR Data: 
  ```json 
  [
    {
      id: 1,
      number: 100,
      title: "Tile of Pull Request 1",
      author: "Author of Pull Request 1",
      commit_count: 8
    }
  ]
  ```
- [ ] DO NOT USE https://github.com/octokit
- [ ] No Smells 👃🏾
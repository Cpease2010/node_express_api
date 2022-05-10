# Node Express Back

## Tech Stack
- [x] Node
- [ ] Typescript
- [x] Jest
- [ ] AWS Lambda
## Features
- [x] Expose endpoint accepting params: `user` && `repo`
- [?] Tests
  - [x] Unit
  - [ ] Integration
  - [x] Something Else (?API?)
- [x] Consumes [GitHub API](https://developer.github.com/v3)
- [x] Returns PR Data: 
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
- [x] DO NOT USE https://github.com/octokit
- [ ] No Smells 👃🏾

## Errors:
###Check Your Internet
```
Error:'getaddrinfo ENOTFOUND api.github.com'

```
# Node Express API
#### Contact
- Please report issue and bugs using the [Issues Tab]('https://github.com/Cpease2010/node_express_api/issues)

- To enhance this application or suggest fixes please submit a [Pull Request]('https://github.com/Cpease2010/node_express_api/pulls')
- For all other inquiries please reach out to:
  ```
  Cory Pease
  coryrpease@gmail.com
  ```
## Quickstart

1. Clone this project to your local machine.
2. Navigate to project directory: `/node_express_api`.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start server.
5. In your browser, navigate to `localhost:3333/<github_username>/<github_repository>`

## Other Commands

1. Testing: `npm test`
   - Specify file: `jest <location_of_test_file>`
   - Exclude files in: `package.json > jest.testPathIgnorePatterns`
2. Dev server: `npm run dev`
   - This will run the server with [Nodemon]('https://www.npmjs.com/package/nodemon') allowing for automatic refresh upon file save.

## Next Steps
- [ ] Convert to Typescript
- [ ] Implement as Lambda function
- [ ] Enhance error handling && response
- [ ] OpenAPI Speecification

## Tech Stack

- [x] Node
- [ ] Typescript
- [x] Jest
- [ ] AWS Lambda

## Features

- [x] Expose endpoint accepting params: `user` && `repo`
- [?] Tests
  - [x] Unit
  - [x] Integration
  - [x] Something Else (Mock and Stub Data)
- [x] Consumes [GitHub API](https://developer.github.com/v3)
- [x] Returns PR Data:
  ```json
  [
    {
      "id": 1,
      "number": 100,
      "title": "Tile of Pull Request 1",
      "author": "Author of Pull Request 1",
      "commit_count": 8
    }
  ]
  ```
- [x] DO NOT USE https://github.com/octokit
- [?] No Smells 👃🏾 (A good nose knows there's always a smell....)

## Console Errors:

### No Internet

```
{
  Error:'getaddrinfo ENOTFOUND api.github.com',
  Solution: 'Check your internet connection'
}
```

### Rate Limit Reached

```
{
  Error: 'Request failed with status code 403',
  Solution: 'https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting'
}
```

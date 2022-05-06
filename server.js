const app = require("./app")
const port = process.env.PORT || 3333

app.listen(port, () => {
  if (port === 3333) {
    console.log(`Server up at: http://localhost:3333`)
    return
  }
  console.log('Server is up!')
})
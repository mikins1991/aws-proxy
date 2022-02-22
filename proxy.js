// const app = require("./aws/lambda/app")

const app = require("./aws/app")

const PORT = parseInt(process.env.PORT, 10) || 5001
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`)
})

const serverless = require("serverless-http");
const app = require("./aws/app");

module.exports.handler = serverless(app);

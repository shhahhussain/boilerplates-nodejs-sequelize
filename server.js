const config = require("./config");
const env = config.get("env");
const app = require("./app.js");
const port = config.get("port");

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log(`Node environment: ${env}`);
});
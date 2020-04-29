//Imports
require("dotenv").config();
const app = require("./app");
require("./db/mongoose");

//Server function
async function main() {
  await app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
}

//Server listen
main();

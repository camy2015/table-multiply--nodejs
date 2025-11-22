const { argv } = require("./config/yargs").default;
const { createFile } = require("./helpers/multiply");

require("colors");

console.clear();

createFile(argv.b, argv.l, argv.u)
  .then(({ printTable, resp }) => {
    printTable
      ? console.log(printTable, resp.bgGreen)
      : console.log(resp.bgGreen);
  })
  .catch((err) => console.log(err));

const { argv } = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Table's base of multiply",
    },
    l: {
      alias: "list",
      type: "boolean",
      demandOption: true,
      default: false,
      describe: "Return table of multiply",
    },
    u: {
      alias: "until",
      type: "number",
      demandOption: true,
      describe: "Max number",
    },
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "The base has been a number";
    }
    return true;
  })
  .check((argv) => {
    if (isNaN(argv.u)) {
      throw "The untill has been a number";
    }
    return true;
  });

module.exports = {
  argv,
};

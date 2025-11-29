import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argv = yargs(hideBin(process.argv))
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
      default: false,
      describe: "Return table of multiply",
    },
    u: {
      alias: "until",
      type: "number",
      default: 10,
      describe: "Max number",
    },
    n: {
      alias: "name",
      type: "string",
      default: "table",
      describe: "File name",
    },
    d: {
      alias: "destination",
      type: "string",
      default: "output",
      describe: "Folder destination",
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
  })
  .parseSync();

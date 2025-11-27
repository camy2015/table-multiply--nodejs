import { argv } from "./config/yargs.ts";
import { ServerApp } from "./presentation/server-app.ts";

const { b, l, u, n, d } = argv;

const main = async () => {
  ServerApp.run({
    base: b,
    showList: l,
    untill: u,
    fileName: n,
    folderDestination: d,
  });
};

(async () => {
  await main();
})();

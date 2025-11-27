import colors from "colors";
import { CreateTable } from "../helpers/create-table.ts";
import { SaveFile } from "../helpers/save-file.ts";

interface PropsServerApp {
  base: number;
  showList: boolean;
  untill: number;
  fileName: string;
  folderDestination: string;
}

export class ServerApp {
  static run({
    base,
    showList,
    untill,
    fileName,
    folderDestination,
  }: PropsServerApp) {
    console.log("Server running...");

    const table = new CreateTable().execute({ base, untill });
    const wasCreated = new SaveFile().execute({
      fileContent: table.output,
      base,
      fileName,
      folderDestination,
    });

    if (showList) {
      console.log(table.printTable);
    }

    if (wasCreated) {
      console.log(colors.bgGreen("File created!"));
    } else {
      console.error(colors.bgRed("File not created!"));
    }
  }
}

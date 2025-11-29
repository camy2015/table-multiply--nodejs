import colors from "colors";

export interface CreateTableExecute {
  execute: (options: PropsCreateTable) => {
    output: string;
    printTable: string;
  };
}

export interface PropsCreateTable {
  base: number;
  untill?: number | undefined;
}

export class CreateTable implements CreateTableExecute {
  constructor() {}

  execute({ base, untill = 10 }: PropsCreateTable) {
    let output = "";
    let printTable = "";

    for (let i = 1; i <= untill; i++) {
      let result = base * i;
      output += `${base} x ${i} = ${result}\n`;
      printTable += `${base} ${colors.green("x")} ${i} ${colors.green(
        "="
      )} ${result}\n`;
    }

    console.log(colors.green("================"));
    console.log(
      `   ${colors.green("Table of")} ${colors.blue(base.toString())}   `
    );
    console.log(colors.green("================"));

    return { output, printTable };
  }
}

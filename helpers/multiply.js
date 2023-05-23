const fs = require("fs");
const colors = require("colors");

const createFile = async (base, list = false, untill) => {
  try {
    let output = "";
    let printTable = "";
    for (let i = 1; i <= untill; i++) {
      let result = base * i;
      output += `${base} x ${i} = ${result}\n`;
      printTable += `${base} ${"x".green} ${i} ${"=".green} ${result}\n`;
    }

    fs.writeFileSync(`./output/table-${base}.txt`, output);
    const resp = `table-${base}.txt created`;

    if (list) {
      console.log("================".green);
      console.log(`   ${"Table of".green} ${colors.blue(base)}   `);
      console.log("================".green);
      return { printTable, resp };
    }

    return { resp };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};

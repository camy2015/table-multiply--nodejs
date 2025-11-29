import { describe, expect, test } from "@jest/globals";
import { CreateTable, PropsCreateTable } from "./create-table.ts";

describe("CreateTable", () => {
  test("should create table with default values", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    const rows = table.output.split("\n").length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table.output).toContain("2 x 8 = 16");
    expect(table.output).toContain("2 x 10 = 20");
    expect(rows).toBe(11);
  });

  test("should create table with custom values", () => {
    const options: PropsCreateTable = {
      base: 5,
      untill: 5,
    };

    const createTable = new CreateTable();
    const table = createTable.execute(options);
    const rows = table.output.split("\n").length;

    expect(table.output).toContain("5 x 3 = 15");
    expect(table.output).toContain("5 x 4 = 20");
    expect(rows).toBe(6);
  });
});

import { afterEach, describe, expect, jest, test } from "@jest/globals";
import { OptionsFile, SaveFile } from "./save-file.ts";
import fs from "fs";

describe("SaveFile", () => {
  const options: OptionsFile = {
    fileContent: "Test File",
    folderDestination: "output",
    fileName: "table",
    base: 5,
  };
  const filePath = "src/output/table-5.txt";

  afterEach(() => {
    const exist = fs.existsSync("src/output");
    if (exist) fs.rmSync("src/output", { recursive: true });
  });

  test("should have file with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("should return false if directory cold not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("Error, message from testing");
    });
    const result = saveFile.execute(options);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });
});

import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import colors from "colors";
import { CreateTable, CreateTableExecute } from "../helpers/create-table.ts";
import { SaveFile, SaveFileExecute } from "../helpers/save-file.ts";
import { PropsServerApp, ServerApp } from "./server-app.ts";

describe("ServerApp", () => {
  const options: PropsServerApp = {
    base: 4,
    showList: false,
    untill: 8,
    fileName: "test-app-server",
    folderDestination: "output",
  };

  const fileContent = {
    output:
      "4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n",
    printTable: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create ServerApp instance", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run ServerApp with options", () => {
    const logSpy = jest.spyOn(console, "log");
    const createTabSpy = jest.spyOn(CreateTable.prototype, "execute");
    const createSaveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy).toHaveBeenCalledWith("Server running...");
    expect(logSpy).toHaveBeenLastCalledWith(colors.bgGreen("File created!"));

    expect(createTabSpy).toHaveBeenCalledTimes(1);
    expect(createTabSpy).toHaveBeenCalledWith({
      base: options.base,
      untill: options.untill,
    });

    expect(createSaveFileSpy).toHaveBeenCalledTimes(1);
    expect(createSaveFileSpy).toHaveBeenCalledWith({
      base: options.base,
      fileContent: fileContent.output,
      fileName: options.fileName,
      folderDestination: options.folderDestination,
    });
  });

  test("should run ServerApp with custom values mocked", () => {
    const logMock = jest.fn();
    const createTableMock = jest
      .fn()
      .mockReturnValue(fileContent) as CreateTableExecute["execute"];
    const createSaveFileMock = jest
      .fn()
      .mockReturnValue(true) as SaveFileExecute["execute"];

    console.log = logMock;
    CreateTable.prototype.execute = createTableMock;
    SaveFile.prototype.execute = createSaveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledTimes(2);
    expect(logMock).toHaveBeenCalledWith("Server running...");
    expect(logMock).toHaveBeenLastCalledWith(colors.bgGreen("File created!"));

    expect(createTableMock).toHaveBeenCalledTimes(1);
    expect(createTableMock).toHaveBeenCalledWith({
      base: options.base,
      untill: options.untill,
    });

    expect(createSaveFileMock).toHaveBeenCalledTimes(1);
    expect(createSaveFileMock).toHaveBeenCalledWith({
      base: options.base,
      fileContent: fileContent.output,
      fileName: options.fileName,
      folderDestination: options.folderDestination,
    });
  });
});

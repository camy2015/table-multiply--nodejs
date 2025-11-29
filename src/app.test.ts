import { describe, expect, jest, test } from "@jest/globals";
import { ServerApp } from "./presentation/server-app.ts";

describe("App", () => {
  const optApp = {
    base: 9,
    untill: 2,
    fileName: "test-app",
    folderDestination: "output",
    showList: true,
  };

  test("Should call Server.run with values", async () => {
    const serverMock = jest.fn();
    ServerApp.run = serverMock;
    process.argv = [
      "node",
      "app.ts",
      "-b",
      "9",
      "-l",
      "-u",
      "2",
      "-n",
      "test-app",
      "-d",
      "output",
    ];

    await import("./app.ts");

    expect(serverMock).toHaveBeenCalledWith(optApp);
  });
});

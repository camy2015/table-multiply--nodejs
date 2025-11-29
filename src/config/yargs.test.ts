import { beforeEach, describe, expect, jest, test } from "@jest/globals";

const runProcess = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { argv } = await import("./yargs.ts");

  return argv;
};

describe("Yargs", () => {
  const initialArg = process.argv;

  beforeEach(() => {
    process.argv = initialArg;
    jest.resetModules();
  });

  test("should return configuation with custom values", async () => {
    const argv = await runProcess(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: false,
        u: 10,
        n: "table",
        d: "output",
      })
    );
  });

  test("should return default values", async () => {
    const argv = await runProcess([
      "-b",
      "2",
      "-u",
      "5",
      "-n",
      "test",
      "-d",
      "output",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 2,
        l: false,
        u: 5,
        n: "test",
        d: "output",
      })
    );
  });
});

import fs from "fs";

export interface SaveFileExecute {
  execute: (options: OptionsFile) => boolean;
}

export interface OptionsFile {
  base: number;
  fileContent: string;
  folderDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileExecute {
  constructor() {}
  execute({
    base,
    fileContent,
    fileName,
    folderDestination,
  }: OptionsFile): boolean {
    try {
      fs.mkdirSync(`src/${folderDestination}`, { recursive: true });
      fs.writeFileSync(
        `./src/${folderDestination}/${fileName}-${base}.txt`,
        fileContent
      );

      return true;
    } catch (error) {
      //console.log(error);
      return false;
    }
  }
}

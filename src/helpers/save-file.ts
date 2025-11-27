import fs from "fs";

interface SaveFileProps {
  execute: (options: OptionsFile) => boolean;
}

interface OptionsFile {
  base: number;
  fileContent: string;
  folderDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileProps {
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
      console.error(error);
      return false;
    }
  }
}

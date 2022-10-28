import fs from "fs";
import path from "path";

const pathDir = path.join(process.cwd(), "snippts/");

export interface Snippt {
  name: string;
  description: string;
  date: string;
  id: string;
}

export function getAllSnippts() {
  const config = JSON.parse(
    fs.readFileSync(pathDir + "config.json", { encoding: "utf8" })
  );
  config.sort((a: Snippt, b: Snippt) => {
    if (a.date > b.date) return -1;
    else if (a.date < b.date) return 1;
    else return 0;
  });
  return config;
}

const { readdirSync, lstatSync, writeFileSync } = require("fs");
const { join } = require("path");

const indexFolder = (folder) => {
  console.log(`Indexing ${folder}`);

  const entries = readdirSync(folder).filter(entry => entry != "index.json");
  const stats = entries.map(entry => ({ entry, stat: lstatSync(join(folder, entry))}));
  const files = stats.filter(({ stat }) => stat.isFile()).map(({ entry }) => entry);
  
  stats.filter(({ stat }) => stat.isDirectory()).forEach(({ entry }) => indexFolder(join(folder, entry)));

  if (files.length) {
    writeFileSync(join(folder, "index.json"), JSON.stringify(files), "utf8");
  }
}

indexFolder("./data");

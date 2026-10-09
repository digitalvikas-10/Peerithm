
const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();

const ignoredFolders = new Set([
  "node_modules",
  ".git",
  ".next",
  "dist",
  "build"
]);

function addGitkeep(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || ignoredFolders.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    addGitkeep(fullPath);
  }

  // Re-check after processing nested directories.
  const remaining = fs.readdirSync(dir);

  if (remaining.length === 0) {
    fs.writeFileSync(path.join(dir, ".gitkeep"), "");
    console.log(`Created .gitkeep: ${dir}`);
  }
}

addGitkeep(rootDir);

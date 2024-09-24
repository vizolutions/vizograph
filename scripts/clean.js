const sh = require("shelljs");
const upath = require("upath");
const fs = require("fs");

const destPath = upath.resolve(upath.dirname(__filename), "../dist");

sh.rm("-rf", `${destPath}/*`);

// Files you want to copy from root to the dist folder
const filesToCopy = ["CNAME", "redirect"]; // Add more files to this array if needed

// Ensure dist folder exists
if (!fs.existsSync(destPath)) {
    console.error("Error: dist folder does not exist.");
    process.exit(1);
}

// Function to copy a file from the root to the dist folder
const copyFileToDist = (file) => {
    const sourcePath = upath.resolve(upath.dirname(__filename), `../${file}`); // Root file path relative to /scripts
    const destinationPath = upath.join(destPath, file); // Destination path in dist

    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destinationPath);
        console.log(`${file} copied to ${destPath}.`);
    } else {
        console.warn(`${file} not found in root directory.`);
    }
};

// Copy all files from the list
filesToCopy.forEach(copyFileToDist);

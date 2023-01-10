import path from "path";
import fs from "fs";
import fsPromise from "fs/promises";

if (!fs.existsSync(path.join(__dirname, "Folder"))) {
  fsPromise.mkdir(path.join(__dirname, "Folder"));
}

// fsPromise.appendFile(
//   path.join(__dirname, "Folder", "file.txt"),
//   "My name is sanni, And I love food \n"
// );
// console.log("done");
//     setInterval(function () {
// });

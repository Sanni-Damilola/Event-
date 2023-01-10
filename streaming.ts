import path from "path";
import fs, { WriteStream } from "fs";
import fsPromise from "fs/promises";

const streaming = async () => {
  const readstream = fs.createReadStream("./Folder/file.txt", {
    highWaterMark : 10
  })

  readstream.on("data", (buffer) => {
    console.log("Reading Data");
    console.log(buffer.toString());
  });

  readstream.on("end", () => {
    console.log("read successful!".toUpperCase());

});
};

streaming();

// WriteStream.
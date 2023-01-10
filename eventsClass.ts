import { format } from "date-fns";
import path from "path";
import fs from "fs";
import fsPromise from "fs/promises";
import { v4 as uuid } from "uuid";

const welcomeEvent = async (mesage: string) => {
  const dateTime = `${format(new Date(), "dd/MM/yyy \t hh:mm:ss \n")}`;
  const uniueID = `${uuid()}`;
  const welcome_message = `${dateTime} \n Your id is : ${uniueID} \n ${mesage} \n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "welcomeFolder"))) {
      await fsPromise.mkdir(path.join(__dirname, "welcomeFolder"));
    }

    await fsPromise.appendFile(
      path.join(__dirname, "welcomeFolder", "welcome.txt"),
      `${welcome_message}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default welcomeEvent;

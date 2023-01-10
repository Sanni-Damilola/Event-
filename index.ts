import events from "events";
import welcomeEvent from "./eventsClass";

const eventemmiter = new events();

eventemmiter.on("welcome", (msg) => welcomeEvent(msg));

let count: number = 0;

setInterval(() => {
  eventemmiter.emit(
    "welcome",
    `message ${(count += 1)} : You are in CODELAB today`
  );
  console.log("sent");
}, 3000);




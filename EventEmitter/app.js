const EventEmitter = require("./events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("Foo", () => {
  ~console.log("Event ocurred 1.");
});

myE.on("Foo", () => {
  console.log("Event ocurred 2.");
});

myE.on("Foo", (x) => {
  console.log("Event with a parameter ocurred");
  console.log(x);
});

myE.once("bar", () => {
  console.log("Event ocurred bar");
});

// myE.emit("Foo");
// myE.emit("Foo", "some text");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");

console.log(myE.listenersCount("bar"));

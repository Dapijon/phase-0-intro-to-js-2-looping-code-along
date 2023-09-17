// Code your solutions in this file
const namesArray = ["Alice", "Bob", "Charlie"];
const event = "birthday";
const thankYouMessages = writeCards(namesArray, event);

function writeCards(names, eventName) {
    const messages = [];
}
for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }
console,log(thankYouMessages);
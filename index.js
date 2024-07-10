// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

function writeCards(names, eventName) {
    let thankYouMessages = [];

    
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

let namesArray = ['Guadelupe', 'Ollie', 'Aki'];
let event = 'birthday';
let messages = writeCards(namesArray, event);
console.log(messages);

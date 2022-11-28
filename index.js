// Code your solutions in this file
// Code your solutions in this file

function writeCards(name, event) {
  let card = [];
    for (let i = 0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return card;
}


function countDown (i) {
    while (i >=0) {
        console.log(i--);
    }
}
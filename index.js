// creating app variables

const tax = .07;
const tip = .2;
let bill = prompt('Enter your bill amount:')
bill = Number(bill);
console.log(bill+(bill*tax)+(bill*tip));


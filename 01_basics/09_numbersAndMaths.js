const score = 400
const balance = new Number(100.1012)
// console.log(balance);
 
// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(4));

const hundreds = new Number(100000)
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

///+++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-999));
// console.log(Math.round(-4.9));
// console.log(Math.round(4.9));

// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));

// console.log(Math.min(4,5,2,34));
// console.log(Math.max(2,4,52,32,1));

///    important math.random

console.log(Math.random());//generates a value btwn 0 and 1 

/// for making a dice
console.log(Math.floor((Math.random()*6) +1));


//shortcut trick for the same

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max-min+1) + min));










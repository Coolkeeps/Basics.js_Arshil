
const MyArr = [0,1,2,3,4,5]
const MyHeros = ["ironman", "thor", "jarvis"]

console.log(MyArr[2]);
// console.log(MyHeros[1]);

const Arr2 = new Array(4,5,2,5,6);
// console.log(Arr2);


// arrays methods

// console.log(MyArr.push(4));// adds at last
// console.log(MyArr.pop());// removes from last

// console.log(MyArr.unshift(4));// adds at start
// console.log(MyArr.shift());//removes from start

// console.log(MyArr.includes(9));//returns boolean

// console.log(MyArr.indexOf(9));// returns index if present else -1

const NewArray = MyArr.join();
// console.log(NewArray);// always returns string

// imp difference btwn "slice" and "splice"

const myn1 = MyArr.slice(1,3)
console.log("A " , MyArr);//includes the argument//
console.log(myn1);


const myn2 = MyArr.splice(1,3)// excludes the argument //splice changes the original array
console.log("B ", MyArr);
console.log(myn2);














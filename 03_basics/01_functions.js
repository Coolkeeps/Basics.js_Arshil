function sayMyName(){
    console.log("A");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("l");
}
sayMyName()//this is execution
sayMyName//this is reference

// function AddTwoNumbers(number1,number2){
//     console.log(number1 + number2);  
// }

// AddTwoNumbers(3,4)
// AddTwoNumbers("3",4)
// AddTwoNumbers("ase",5)

// const result = AddTwoNumbers(3,4)
// console.log(result);

function AddTwoNumbers(number1,number2){
    let result = number1+number2
    return result
    console.log(result)// statements after return are not executed
}

const result = AddTwoNumbers(4,5)
// console.log(result);


function loginUserMessage(username = "no one"){
    if (!username){
        return console.log("please enter a username" )
    }
    return`${username} just logged in `
}
console.log(loginUserMessage());

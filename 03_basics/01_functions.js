function sayMyName(){
    console.log("A");
    console.log("r");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("l");
}
// sayMyName()//this is execution
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
// console.log(loginUserMessage());



////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateCartPrice(num1){
//     return num1
//  }

// console.log(calculateCartPrice(2)) 
// console.log(calculateCartPrice(200,300,400))// this does not contaon all the values

// hence spread and rest operator is used

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300));


function calculateCartPrice (val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,400));


const data = {
    username:"hitch",
    price: 299
}

// const {username} = data
// const {price} = data
// console.log(username);
// console.log(price);



function handleAnyObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleAnyObject(data)

handleAnyObject(
    {
        username:"arshil",
        price:499
    }
)

const myArr = [200,100,220,400]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myArr));

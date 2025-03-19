const user = {
    username :"hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , wlecome to this website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Arshil"
// user.welcomeMessage()

// console.log(this);
// when we are in node environment it refers to an empty object

// function chai(){
//     // let username = "hitesj"
//     console.log(this);
    
// }

// chai()

// const chai = function (){
//     let username = "arshil"
//     console.log(this);
// }

// chai()

///arrow function

// const chai = () => {
//     let username = "arshil"
//     console.log(this);
// }

// chai()

// const addTwoNum = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwoNum(3,4));

// const addTwo = (num1,num2) => (num1+num2)
const retObj = (num1,num2) => ({"arshil":91})

console.log(retObj());


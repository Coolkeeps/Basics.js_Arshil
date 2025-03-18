//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "arshil",
    "full name":"arhsil khan",
    email:"arshil@mail.com",
    age:16,
    location:"karwi",
    [mySym] : "myKey1"
} 

// console.log(JsUser.email)
// console.log(JsUser["age"])
// console. log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arhsilayaann@mail.com"
 console.log(JsUser);


 JsUser.greeting = function(){
    console.log("heelo js user");
 }


 JsUser.greetingtwo = function(){
    console.log(`heelo js user, ${this.name}`);
 }


 console.log(JsUser.greeting());
 console.log(JsUser.greetingtwo());

 
 
// const tinderUser = new Object // singleton object
const tinderUser = {} // non singleton object

tinderUser.email = "arshil@gmail.com"
tinderUser.age = 15
tinderUser.location = "karwi"
tinderUser.status = null

// console.log(tinderUser);

const otherUser = {
    fullname:{
        userfullname:{
            firstName:"Arshil",
            lastName:"khan"
        }
    }
}

console.log(otherUser.fullname.userfullname.lastName);


//adding of two or more objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {4:"a",5:"A"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 = {...obj1,...obj2,...obj5}
console.log(obj4);
// values doesnt repeat



const users = [
{
    id:"arshil",
    contact:9112
},
{
    id:"arshil",
    contact:9112
},
{
    id:"arshil",
    contact:9112
},
{
    id:"arshil",
    contact:9112
},
]
users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));





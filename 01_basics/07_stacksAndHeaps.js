//stack => primitive datatype 
//stack makes a copy and changes it therefore the original data doesnot get affected

let name = "arshil"
let anotherName = name
anotherName = "ayaan"

console.log(name);
console.log(anotherName);



// heaps => reference type(non-primitive)
//heaps => it does not makes a copy it takes refeence from the original data 
//hence the orginal data is changed

let myData = {
    name:"arhsil",
    mail:"arshil@gmial.com"
}

let newData = myData
newData.mail = "ayaan@gmail.com"

console.log(myData);
console.log(newData);


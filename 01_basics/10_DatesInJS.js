
let MyDate = new Date();
console.log(MyDate);

console.log(MyDate.toDateString());// returns => day month date year
console.log(MyDate.toLocaleString());// returnns => month date yeat time 

// imp typeof date
console.log(typeof MyDate);// returns => object

let myCreatedDate = new Date(2025,0,12,8, 7)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let MyTimeStamp = Date.now()
console.log(MyTimeStamp);
console.log(myCreatedDate.getTime());

///for conversion into seconds divide by 1000

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})







// difference btwn var and let/const

// let a = 10
// const b = 20
// var c = 30

if (true){   // all the declaration are made within the inner block scope
            // hence the declaration should not print in global scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);//returns error
// console.log(b);// returns error
// console.log(c);// doesnt return error

// this is why var is not used cuz it mess with global and inner scope 


//the scope over the net is diiferent and scope over coding environment is diff
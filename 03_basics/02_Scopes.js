
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


//++++++++++++++++++++++++++nested scopes++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "arshil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}

one()

// the elements of the parent can be accesed by the child but reverse is not possible

if (true){
    const username ="arjhsil"

    if (true){
        const website = "youtube"
        console.log(website + username);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++


addone(5)// here since no variable is initialised and direct declaration is there therefore it can be accesed earlier too
function addone(num){
    return num + 1
}


const addtwo = function (num){
    return num + 2
}

addtwo(5)// this cannot be returned before the initialisation of the variable


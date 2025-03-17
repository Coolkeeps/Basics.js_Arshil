const marverHeroes = ["ironman","thor","hulk"]
const dcHeroes = ["superman","batman","flash"]


//         use of push
// marverHeroes.push(dcHeroes)// it doesnt create new array
// console.log(marverHeroes);


//          use of concat
// const allheroes = marverHeroes.concat(dcHeroes) // it creates new array
// console.log(allheroes);

//           use of spread operator
const allnewHeros  = [...marverHeroes , ...dcHeroes]
// console.log(allnewHeros);


const new_another_array = [1,2,3,4,[5,3,6,3,[3,4,6,2,4,6,2,[4,3,4,5,3,4]]]]
const new_ordered_Array = new_another_array.flat(Infinity)
// console.log(new_ordered_Array);



//for checking a array
console.log(Array.isArray("arshil"));

//for making a array
console.log(Array.from("arsjil"));

// for making a combined array
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));

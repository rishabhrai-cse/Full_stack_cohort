const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array ke andar array aayega 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // in one array all the values
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator( kaanch ka glass)  -->> // ek-ek element individual ho gye hai 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // array ke andar ko in single arrray -->> // infinity ka mtlb ki kitne depth tak solve  krna hai.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // used in data scrapping.
console.log(Array.from("Hitesh")) // array me convert kar dega.
console.log(Array.from({name: "hitesh"})) // interesting (gives empty array) -->> ya to keys se array banao ya values se array banao. 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // variables ya elements ko array me convert kr dega.
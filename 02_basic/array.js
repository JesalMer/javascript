let marvel_heros = ["caption_america"]
let dc_heros = ["superman","batman","flash"]
let t = ["xman","hunted"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

let newmarvel =  marvel_heros.concat(dc_heros);
// console.log(newmarvel);

let all_heros = [...marvel_heros,...dc_heros,...t]
// console.log(all_heros);


let another_array = [1,2,3,[4,5,6],7,[8,9],10]

let all_array = another_array.flat(Infinity)
// console.log(all_array);

console.log(Array.isArray("jesal"));
console.log(Array.from("jesal"));

console.log(Array.from("Jesasl Mer"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

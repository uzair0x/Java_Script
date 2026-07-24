const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes    = ["superman","batman","aquaman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHros=marvel_heroes.concat(dc_heroes)
//console.log(allHros);

const all_new_heros=[...marvel_heroes,...dc_heroes]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(Infinity)

//onsole.log(real_another_array);
 
console.log(Array.isArray("uzair"));
 console.log(Array.from("uzair"));

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1 , score2 , score3))
const name= "uzair"
const repoCount = 50

//console.log(name  + repoCount +  "Value");

//console.log(`Hello my nam is ${name} and my repo count is ${repoCount}`)

const gameName = new String('uzair-khan-com');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   uzair   "
console.log(newStringOne);
console.log(newStringOne.trim());  

 const url = "https://uzair.com/hello%50home"
 url.replace('%50' , '-')
 console.log(url.replace('%50' , '-'))

 console.log(url.includes('uzair'));

console.log(gameName.split('-'));

//  const conding = ["js", "ruby", "java", "python", "cpp"]

//  const values = conding.forEach((item) => {
//     console.log(item);
//     return item
//  })

//  console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ]

// const newNums = myNums.filter((num) => {
//     return num>4
// })
// console.log(newNums)

const myNums = [1, 2, 3]

const mytotal = myNums.reduce(function  (acc, currval){
    console.log(`acc:${acc}and currnect val:${currval}`)
    return acc + currval 
}, 0)

console.log(mytotal);
const ages = [1, 5, 9, 15, 20, 25, 30, 35, 40, 45, 50]

const adults = ages.filter(function(age){
    return age >= 18
})
// if(age >= 18){
    // return true
// }
// else {
//     return false
// }

console.log(adults)

const children = ages.filter(function(age){
    return age < 18
})
console.log(children)
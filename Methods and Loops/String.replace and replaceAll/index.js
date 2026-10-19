/*
Challenge: 
1. Use replaceAll and regex to ensure the
   first character of each sentence is uppercase.
   you will need to use a string method which converts characters to uppercase.
   */

const paragraph = "javascript is the backbone of the internet. It was created in 1995. before JS, websites were so boring"

console.log(paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function(match){
    return match.toUpperCase()
}))

// Javascript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring







/*
Challenge: 
1. Change the lowercase "i" to uppercase.
*/

// const sentence = "i went to Australia and i saw a shark"

// console.log(sentence .replaceAll("i", "I"))
// I went to AustralIa and I saw a shark

// console.log(sentence .replaceAll(/\b(i)\b/g, 'I'))
// I went to Australia and I saw a shark

// const sentence = "I love you with all my heart!"

// console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(match){
    // return `${match}💜`
// }))

// I love💜 you with all my heart💜!

// console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(){
//     return `💜`
// }))

// I 💜 you with all my 💜!










// const paragraph = "Js is the backbone of the internet. It was created in 1885. Before Js, Websites were so boring."

// // console.log(paragraph.replace("Js", "JavaScript"))

// // JavaScript is the backbone of the internet. It was created in 1885. Before Js, Websites were so boring.

// console.log(paragraph.replaceAll("Js", "JavaScript"))

// // JavaScript is the backbone of the internet. It was created in 1885. Before JavaScript, Websites were so boring.
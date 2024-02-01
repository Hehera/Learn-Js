
function capitalize(word) {
   let res = ''

   for (let i = 0; i < word.length; i++) {
      if (i === 0) {
         res += word[i].toUpperCase()
        } else {
          res += word[i].toLowerCase()
      }
   }
   return res

   

}

// console.log(capitalize('sam')) // "Sam"
// console.log(capitalize('aLEX')) // "Alex"
// console.log(capitalize("chARLie")); // "Charlie"

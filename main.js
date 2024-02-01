
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

function getDescription(text) {
   if (text.length <= 10) {
      return text
   } else {
      let res = ''
      for (let i = 0; i < 10; i++) {
         res += text[i]
      }
      return res + '...'
   }
}
// console.log(getDescription('Welcome to hello'));


function isPassing(grade) {
    return grade >= 10;
}
// console.log(isPassing(11));




function evenOrOdd(number) {
    if(number % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(evenOrOdd(4));






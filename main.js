
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
// console.log(evenOrOdd(4));

function sumGrades(grades) {
    let res = 0
    grades.forEach((item)=> {
        res += item
    })
    return res
}
// console.log(sumGrades([15, 5, 10]));


function sumPositiveNumbers(numbers) {
   let res = 0
   numbers.forEach(item => {
      if (item > 0) {
         res += item
      }
   })
   return res
}

// console.log(sumPositiveNumbers([15, -5, 10])); // 25



function sumOddNumbers(numbers) {
   let res = 0
   numbers.forEach(item => {
      if (item % 2 !== 0) { 
         res += item
      }
   })
   return res
}
// console.log(sumOddNumbers([15, 5, 10]));//20

function getDropdown(countries) {
   let html = `option value="">Please select</option>`

   countries.forEach(function (item) {
      html += `<option value="${item.toLowerCase()}">${item}</option>`
   })
   return html
}

// Return confusion - Зворотня плутанина

function getPositiveTemperatures(temperatures) {
    temperatures.filter((temp) => temp > 0)
 }
//  console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]


function getYear(years, searchYear) {
    return years.find(function(year) {
        return year === searchYear
   }) 
}
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined





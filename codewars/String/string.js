    // 1.Reversed Strings
    let res = []

    function solution(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        res.push(str[i])
    }
    return res.join('')
    // return str.split('').reverse().join('')
    }
    // console.log(solution('world'));

    // 2.Convert a Number to a String!

    function numberToString(num) {
    return num.toString()
    }
    // console.log(numberToString(123));

    // 3.Remove First and Last Character

    function removeChar(str) {
    return str.slice(1, -1)
    }
    // console.log(removeChar('country'));

    // 4 String repeat

    function repeatStr(n, s) {
    let res = ''
    for (let i = 0; i < n; i++) {
        res += s
    }
    return res

    // 2)return s.repeat(n)
    }
    //  console.log(repeatStr(3,'#'));

    //  5 Remove String Spaces

    function noSpace(x) {
    let res = ''

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== '') {
            res += x[i]
        }
    }
    return res
    // return x.split(' ').join('')
    }
    // console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

    // 6 Convert a String to a Number!

    const stringToNumber = function (str) {
    return Number(str)
    }
    // console.log(stringToNumber("1234"));

    // 7 Abbreviate a Two Word Name

    function abbrevName(name) {
    let res = []
    const splited = name.split(' ')
    for (let i = 0; i < splited.length; i++) {
        const sliced = splited[i].slice(0, 1).toUpperCase()
        res.push(sliced)
    }
    return res.join('.')
    }

    // console.log(abbrevName("sam harris"));

    // 8  Returning Strings

    function greet(name) {
    return `"Hello, ${name} how are you doing today?"`
    }
    // console.log(greet("Ryan"));

    // 9

    function booleanToString(b) {
    // return b.toString()
    // return b ? 'true': 'false'
    return b + ''
    }
    // console.log(booleanToString(true));

    // 10

    function areYouPlayingBanjo(name) {
    return name.slice(0, 1) === 'R' || name.slice(0, 1) === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`
    }
    //  console.log(areYouPlayingBanjo('Ringo'));

    // 11 MakeUpperCase

    function makeUpperCase(str) {
    return str.toUpperCase()
    }

    // 12 Sentence Smash

    function smash(words) {
    return words.join(' ').trim()
    }

    // console.log(smash(['hello', 'world']))



    // 13 DNA to RNA Conversion

    function DNAtoRNA(dna) {
    let res = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            res += 'U'
        } else {
            res += dna[i]
        }
    }
    return res
    }
    // console.log(DNAtoRNA('GCAT'))


    // 14 Reversed Words

    function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
    }
    // console.log(reverseWords('hello world!'))


    // 15 If you can't sleep, just count sheep!!

    let countSheep = function (num){
        let res = ''

        for (let i = 1; i <= num; i++) {
            res += `${i} sheep...`
        }
        return res
    }
    // console.log(countSheep(2)); // => "1 sheep...2 sheep..."

    // 16 Convert a string to an array

    function stringToArray(string){
        return string.split(' ')
    }
    // console.log(stringToArray("Robin Singh")); // "Robin Singh") =>["Robin", "Singh"]


    // 17 Total amount of points

    // if x > y: 3 points (win)
    // if x < y: 0 points (loss)
    // if x = y: 1 point (tie)

    function points(games) {
    let res = 0
    // ['1', '0']
    for (let i = 0; i < games.length; i++) {
        const splited = games[i].split(':')
        if (Number(splited[0]) > Number(splited[1])) {
            res += 3
        } else if (Number(splited[0]) < Number(splited[1])) {
            res += 0
        } else if (Number(splited[0]) === Number(splited[1])) {
            res += 1
        }
    }
    return res
    }
    // console.log(points(['1:0', '1:1'])) 

    // 18 Grasshopper - Personalized Message

    function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
    }
    // console.log(greet('Daniel', 'Daniel'))

    // 19 sum mixxed array
    function sumMix(x) {
    let res = []
    for (let i = 0; i < x.length; i++) {
        res.push(Number(x[i]))
    }
    return res.reduce((acc, ind) => acc + ind)
    }
    // console.log(sumMix([9, 3, '7', '3']));

    // , "garlic naan"
    // 20  The Feast of Many Beasts
    // Якщо перша буква першого слова === першій букві першого слова наступного рядка
    // Якщо Остання буква === Останній букві наступного рядка 
    function feast(beast, dish) {
       const initalValueBeast = beast[0]
       const lastValueDish = beast[beast.length - 1]

       const initalValueDish = dish[0]
       const lastValueBeast = dish[dish.length - 1]

       console.log(lastValueDish,lastValueBeast)

       return initalValueBeast === initalValueDish && lastValueDish === lastValueBeast
    }
    // console.log(feast("brown bear", "bear claw"))



    // 21 Remove exclamation marks
    function doubleChar(str) {
       let res = ''
       for (let i = 0; i < str.length; i++) {
          res += str[i].repeat(2)
       }
       return res
    }
    // console.log(doubleChar('13334'))


    // 22 Remove exclamation marks


function bonusTime(salary, bonus) {
    if(bonus === true) {
        return `£${salary * 10}`
    } else {
      return `£${salary}`
    }
}
// console.log(bonusTime(10000, true));  
// £

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(sum(1, 2, 3, 4)); // Виведе в консоль 10


// 23 Remove exclamation marks


// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1


// 24 Correct the mistakes of the character recognition software

function correct(string) {
   let res = ''
   for (let i = 0; i < string.length; i++) {
     if (string[i] === '0') {
        res += 'O'
    } else if (string[i] === '5'){
        res += 'S'
    } else if (string[i] === '1'){
        res += 'I'
    } else {
        res += string[i]
    }
}
    return res
}
// console.log(correct("L0ND0N"))

// 25 All Star Code Challenge #18

function strCount(str, letter){  
    let res = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            res += 1
        }
    }
    return res
}

// console.log(strCount('Hello', 'l'));


// 26 Sort and Star
function twoSort(s) {
   let res = ''
   const sorted = s.sort()
   const elFirst = sorted[0]
   for (let i = 0; i < elFirst.length; i++) {
      res += elFirst[i]
      if (i !== elFirst.length - 1) {
         res += '***'
      }
   }
   return res
}
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));


// 27  Stringy Strings

function stringy(size) {
   let res = []
   for (let i = 0; i < size; i++) {
      res.push(i % 2 === 0 ? '1' : '0')
   }
   return res.join('')
}
// console.log(stringy(6));

// 28 Well of Ideas - Easy Version

function well(x) {
    let resGood = 0;
    let res = '';

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            resGood += 1;
        }
    }

    if (resGood > 2) {
        res += 'I smell a series!';
    } else if (resGood >= 1 && resGood <= 2) {
        res += 'Publish!';
    } else {
        res += 'Fail!';
    }

    return res;
}

// 2)
// function well(x){
//     let count = 0;
//     for (let i = 0; i < x.length; i++) {
//       if (x[i] === 'good') {
//         count++;
//         if (count == 3)
//           break;
//       }
//     }
//     return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
//   }




let str = 'name'
let srtObj = new String()
// console.log(typeof(str));//name
// console.log(typeof(srtObj));//{''}
// Тобто спершу str був примітивним типом даних,потім став об'єктом і вернувся до примітиву


// ----------------------------------------------------------------

// Є масив(Екземляр прототипа чисел) -> він містить Array.prototype,тобто методи -> Якщо якихось методів об'єкта немає то вони є у Object.prototype -> null
// console.dir([1,2,3]);


// Об'єктно орієнтовне програмування(робота з архітектурою)
// JS ще називають прототипно-орієнтовною мовою це приватний випадок ООП,один із його стилів
const botDefault = {
   health: 400,
   armor: 100,
   sayHello: function  () {
    // console.log('hello');
}
}
const bot = Object.create(botDefault)//створили бота-об'єкт на основі прототипа botDefault


// const bot = {
//    health: 100
// }
// botDefault.__proto__ = botDefault;//не юзати!
Object.setPrototypeOf(bot, botDefault)

// console.log(bot.armor);
// Ми створюємо один великий прототип botDefault,і від нього ми будемо відштовхуватись

bot.sayHello()
// ------------------------------------------------------------------------



// 29 Vowel remover

// a, e, i, o, u 


function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    let res = ''
    for (let i = 0; i < string.length; i++) {
        if(!vowels.includes(string[i])) {
            res += string[i]
        }
    }
    return res 
}

// console.log(shortcut("hello"));

// 30 Short Long Short

// short+long+short


function solution(a, b) {
   const amount1 = a.length
   const amount2 = b.length

   if (amount1 > amount2) {
      return `${b}${a}${b}`
   } else {
      return `${a}${b}${a}`
   }
}

// console.log(solution('45', '1'))

// 31 Name Shuffler

function nameShuffler(str) {
   let splited = str.split(' ')

   for (let i = 0; i < splited.length; i++) {
      const el1 = splited.at(0)
      const el2 = splited.at(1)
        return `${el2} ${el1}`    
   }
}

// console.log(nameShuffler("john McClane"));


// 32 Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
   if (string.endsWith('!')) {
      return string.slice(0, -1)
   }
}
// console.log(remove("Hi!"));
  


// 33 Capitalization and Mutability

function capitalizeWord(word) {
   let res = ''
   const el1 = word[0]
   for (let i = 0; i < word.length; i++) {
      if (i === 0) {
         res += word[i].toUpperCase()
      } else {
         res += word[i].toLowerCase()
      }
   }
   return res
}
// console.log(capitalizeWord('QQzf'));


// 34 The Wide-Mouthed frog!

function mouthSize(animal) {
   return animal.toLowerCase() == 'aligator' ? 'small' : 'wide'
}
// console.log(mouthSize('alligator'));


// 35 Reversing Words in a String

function reverse(string){
   return string.split(' ').reverse().join(' ')
}

// console.log(reverse('This is so easy'));

// 36 Multiplication table for number

function multiTable(number) {
    let res = ''
   for (let i = 1; i <= 10; i++) {
      const multiply = i * number
      res += `${i} * ${number} = ${multiply}\n`
   }
   return res.trim()
}

// console.log(multiTable(5));


// 37  String Templates - Bug Fixing #5

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

//   console.log(buildString('Cheese','Milk','Chocolate'));

// 38 Welcome to the City

function sayHello( name, city, state ) {
        return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
// console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Phoenix', 'Arizona'));

// Hello, John Smith! Welcome to Phoenix, Arizona!

// 39 String cleaning

function stringClean(s){
   let res = ''
   const splited = s.split('')
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   for (let i = 0; i < splited.length; i++) {
      if (!numbers.includes(splited[i])) {
         res += splited[i]
      }
   }
   return res
}
// console.log(stringClean("1234567890ddd"))


// 40 Dollars and Cents

function formatMoney(amount){
    const formattedAmount = amount.toFixed(2)
    return '0' + formattedAmount
}
// console.log((formatMoney(9)));


// 41 L1: Bartender, drinks!
function getDrinkByProfession(param) {
    const lowerCaseParam = param.toLowerCase();
    switch (lowerCaseParam) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}
// console.log(getDrinkByProfession("Jabroni")); 

// 42 

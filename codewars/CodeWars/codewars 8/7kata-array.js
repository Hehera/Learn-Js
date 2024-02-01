// 1 Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((a, b) => a - b);

  const sum = sorted[0] + sorted[1];
  return `Sum should be ${sum} `;
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// 2 Sum of odd numbers

// function rowSumOddNumbers(n) {
//   return n ** 3;
// }

// console.log(rowSumOddNumbers(3));

// 3 Ones and Zeros

const binaryArrayToNumber = (arr) => {
  // const index = arr.length - 1;
  // console.log(index);

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * Math.pow(2, arr.length - 1 - i);
  }

  return res;
};

// console.log(binaryArrayToNumber([1, 1, 1, 1]));

// 4 Odd or Even?

// 1.Найти суму елементів
// 2.Визначити чи парне чи не парне 'odd' 'even'
// 3 [] === 'even'(0 парне)

oddOrEven = (array) => {
  if (array == []) {
    return "even";
  }
  const sum = array.reduce((acc, ind) => acc + ind, 0);

  return sum % 2 === 0 ? "even" : "odd";
};

// console.log(oddOrEven([2, 4, 5]));

// 5 Remove the minimum

// 1.Видалити найменше значення масива
// 2. Оригінадьний масив не змінювати

function removeSmallest(numbers) {
  let minInd = 0; //перший елемент масиву

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] < copy[minInd]) {
      minInd = i; //отримали індекс мінімального значення першого входження
    }
  }

  copy.splice(minInd, 1);
  return copy;

  // 2
  //   const copy = [...numbers]; //копія

  //   const minValue = Math.min(...copy);

  //   const indRemove = copy.indexOf(minValue); //індекс

  //   if (indRemove !== -1) {
  //     copy.splice(indRemove, 1);
  //   }
  //   return copy;
}
// console.log(removeSmallest([13, 4, 12, 2, 4]));

// 6 Testing 1-2-3

const number = function (array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(`${i + 1}: ${array[i]}`);
  }
  return res;
};

// console.log(number(["a", "b", "c"]));

// 7 The highest profit wins!

minMax = (arr) => {
  let res = [];
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  res.push(minValue, maxValue);
  return res;
};

// console.log(minMax([2334454, 5, 2, 4]));

// 8 Don't give me five!

// 1.Пройтися від найменшого до найбільшого числа
// 2.Перетворити з числа в рядок
// 3.Видалити індекс числа в якій є 5

function dontGiveMeFive(start, end) {
  let res = [];

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      res.push(i);
    }
  }
  return res.length;
}
// console.log(dontGiveMeFive(1, 9));

// 9 Sort array by string length

function sortByLength(array) {
  const sorted = array.sort((a, b) => a.length - b.length);
  return array;
}
// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// 10 Find the middle element

function gimme(triplet) {
  // let res = 0;
  const minValue = Math.min(...triplet);
  const maxValue = Math.max(...triplet);
  // triplet.splice(minValue);
  // triplet.splice(maxValue);

  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== minValue && triplet[i] !== maxValue) {
      return i;
    }
  }
  return -1;
}
// console.log(gimme([2, 3, 1]));

// 11 Find the capitals

function capitals(word) {
  let res = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      res.push(i);
    }
  }
  return res;
}

// console.log(capitals("CodEWaRs"));

// 12 Small enough? - Beginner

function smallEnough(a, limit) {
  for (let index = 0; index < a.length; index++) {
    if (a[index] > limit) {
      return false;
    }
  }
  return true;
}

// 2
// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }
// console.log(smallEnough([66, 101], 200));

// 13 Two Oldest Ages

function twoOldestAges(ages) {
  let res = [];

  for (let i = 0; i < 2; i++) {
    const maxValue = Math.max(...ages);

    const ind = ages.indexOf(maxValue);

    const firstOldestValue = ages.splice(ind, 1)[0]; // Витягуємо елемент з масиву, що повертається;
    res.push(firstOldestValue);
  }
  return res.sort((a, b) => a - b);
}
// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

// 14 Check the exam

// 4 бали правильна - 1 неправильна
// якшо 0  то 0
function checkExam(array1, array2) {
  let res = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      // If the answer is blank, add 0 to the score
      res += 0;
    } else if (array1[i] === array2[i]) {
      res += 4;
    } else if (array1[i] !== array2[i]) {
      res -= 1;
    }
  }
  return Math.max(res, 0); //щоб не було від'ємного значення
}

// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// else if (array2[j] === "") {
//   res += 0;

// 15 Flatten and sort an array

("use strict");

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);

  // return array.reduce((acc,ind) => [...acc,...ind],[]).sort((a, b) => a - b)
}

// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));

// 16 Sum of Minimums!

function sumOfMinimums(arr) {
  const mapped = arr.map((subArray) => Math.min(...subArray));

  const sumOfMinimums = mapped.reduce((acc, ind) => acc + ind);

  return sumOfMinimums;
}

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

// 17 Row Weights

// 1.порахувати суму парних і не парних чисел

function rowWeights(array) {
  let res1 = 0;
  let res2 = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      res1 += array[i];
    } else {
      res2 += array[i];
    }
  }

  return [res1, res2];
}

// let arr = [0, 0];
// for (var i = 0; i < array.length; i++) {
//   i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
// }
// return arr;

// console.log(rowWeights([50, 60, 70, 80]));

// 18 JavaScript Array Filter

// 1.вивести тільки парні числа

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((curr) => curr % 2 === 0);
}

// console.log(getEvenNumbers([1, 2]));

// 19 Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  let count = 0;

  for (let key of list) {
    if (key.language === "JavaScript" && key.continent === "Europe") {
      count++;
    }
  }

  return count;
}

// console.log(countDevelopers([
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ]));

// 20 Coding Meetup #2 - Higher-Order Functions Series - Greet developers

// greeting: 'Hi Madison, what do you like the most about Ruby?'
// 1.додати елемент greeting
// 2.інтерполяція

function greetDevelopers(list) {
  for (let key of list) {
    key.greeting = `Hi ${key.firstName} , what do you like the most about ${key.language}?`;
  }
  return list;
}

// console.log(greetDevelopers( [
//   {
//     firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   },
//   {
//     firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//   },
//   {
//     firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//   },
// ]));

// 21 Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

function isRubyComing(list) {
  for (let key of list) {
    if (key.language === "Ruby") {
      return true;
    }
  }

  return false;
}
// return list.some(e => e.language === 'Ruby');

// console.log(isRubyComing( [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ]));

// 22 Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

// 1.Перевірити наявність firstName,country  'Victoria, Puerto Rico'
// 2.Якщо немає firstName,country вивести 'There will be no Python developers'

function getFirstPython(list) {
  for (language of list) {
    if (language.language === "Python") {
      return `${language.firstName}, ${language.country}`;
    }
  }
  return "There will be no Python developers";
}
// console.log(getFirstPython([
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ]));

// 23 Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

function countLanguages(list) {
  let count = {};

  for (let i = 0; i < list.length; i++) {
    let language = list[i].language;

    if (count[language]) {
      count[language]++;
    } else {
      count[language] = 1;
    }
  }
  return count;
}

// console.log(countLanguages([
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ]));

// 24  Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

function isSameLanguage(list) {
  const firstLanguage = list[0].language;

  for (let person of list) {
    if (person.language !== firstLanguage) {
      return false;
    }
  }

  return true;
}
// console.log(isSameLanguage([
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ]));

// 25 Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

// 1.вернути рядок найстарших розрабів

// 1.найти найбільше число
// 2.вивести відфілтровані об'єкти

function findSenior(list) {
  let res = [];
  let maxAge = 0;

  for (let key of list) {
    let age = key.age;
    if (age > maxAge) {
      maxAge = age;
    }
  }
  let result = list.filter((developers) => developers.age === maxAge);
  return result;
}
// console.log(findSenior([
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]));

// 25 Sorted? yes? no? how?a

// 1.Якщо числа відсортовані  'yes, ascending'
// 2.Якщо числа не відсортовані 'yes, descending'
// 3. 'no'

function isSortedAndHow(array) {
  let sorted1 = array.slice().sort((a, b) => a - b); //копію массива
  let sorted2 = array.slice().sort((a, b) => b - a); //копія массива
  console.log(sorted1, sorted2);
  // порівнюємо відсортований масив з оригінальним
  if (array.join(",") === sorted1.join(",")) {
    return "yes, ascending";
  } else if (array.join(",") === sorted2.join(",")) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// console.log(isSortedAndHow([1, 2]));

// 26 No oddities here

// 1.вернути непарні  числа

function noOdds(values) {
  return values.filter((number) => number % 2 === 0);
}

// console.log(noOdds([0,1,2,3]));//[0,2]

// 26 Even numbers in an array

// 1.повернути к-сть парних чисел

function evenNumbers(array, number) {
  let even = array.slice().filter((number) => number % 2 === 0);

  let lastEven = even.slice(-number);
  return lastEven;
}

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]

// 27 Fizz Buzz

function fizzbuzz(n) {
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  let res2 = [];

  list.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      res2.push("FizzBuzz");
    } else if (num % 3 === 0) {
      res2.push("Fizz");
    } else if (num % 5 === 0) {
      res2.push("Buzz");
    } else {
      res2.push(num);
    }
  });
  return res2;
}
// console.log(fizzbuzz(15));

// Якщо значення кратне 3: замість цього використовуйте значення "Fizz".
// Якщо значення кратне 5: замість цього використовуйте значення "Buzz".
// Якщо значення кратне 3 і 5: замість цього використовуйте значення "FizzBuzz".

// 28 Maximum Product

function adjacentElementsProduct(array) {
  let answerArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    answerArray.push(array[i] * array[i + 1]);
  }

  return Math.max(...answerArray);
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));//21

// 29 Minimize Sum Of Array (Array Series #1)

// 1.Відсортувати
// 2.Перемножити найбільше з найменшим
// 3.Знайти суму

function minSum(arr) {
  let res = [];

  while (arr.length > 1) {
    let most = Math.max(...arr);
    let less = Math.min(...arr);

    let multi = most * less;
    res.push(multi);

    arr.splice(arr.indexOf(most), 1);
    arr.splice(arr.indexOf(less), 1);
  }
  let result = res.reduce((acc, ind) => acc + ind);

  return result;

  // let res = 0;
  // let sorted = arr.sort((a, b) => a - b);
  // while (arr.length) {
  //   res += arr.pop() * arr.shift();
  // }
  // return res;
}

// console.log(minSum([12, 6, 10, 26, 3, 24]));

// 30 Product Of Maximums Of Array (Array Series #2)

//Знайти добуток максимальних чисел

// 1.Відсортувати в порядку спадання

function maxProduct(numbers, size) {
  let sorted = numbers.sort((a, b) => b - a);
  console.log(sorted);

  let res = [];

  for (let i = 0; i < size; i++) {
    res.push(numbers[i]);
  }

  return res.reduce((acc, ind) => acc * ind);
}

// console.log(maxProduct([10, 8, 7, 9], 3));

// 31 Array Leaders (Array Series #3)
//Вивести числа,які більші сумі всіх правих чисел

// function partlist(arr) {

//   return arr
// }

// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));

function sortAndFormat(strings) {
  const sortedString = strings.sort()[0];
  const formattedString = sortedString.split("").join("***");
  return formattedString;
}

// Example usage:
const myArray = ["banana", "apple", "cherry", "date"];
const result = sortAndFormat(myArray);
// console.log(result);

// 32 Parts of a list

function partlist(arr) {
  let res = [];

  for (let i = 1; i < arr.length; i++) {
    const leftPart = arr.slice(0, i).join(" ");
    const rightPart = arr.slice(i).join(" ");

    res.push([leftPart, rightPart]);
  }
  return res;
}

// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));

// 33 Convert an array of strings to array of numbers

// з рядка в число

function toNumberArray(stringarray) {
  return stringarray.map((str) => parseFloat(str));
}
// console.log(toNumberArray(["1.1", "2.2", "3.3"]));

// 34 Divide and Conquer

// 1.Найти рядки 2.перетворити їх у число 3. найти їх суму 4.Відняти цю суму на суму цілих чисел

function divCon(x) {
  const filtered = x.filter((el) => typeof el === "string");
  const num = filtered.map((str) => parseFloat(str));
  const summed = num.reduce((acc, ind) => acc + ind, 0);
  const filteredOfIntegers = x.filter((el) => typeof el === "number");
  const summedOfIntegers = filteredOfIntegers.reduce(
    (acc, ind) => acc + ind,
    0
  );

  const difference = summedOfIntegers - summed;
  return difference;
}

// console.log(divCon(["4", 1, 2]));

// 35 max diff - easy

// 1.Найти найбільше значення і найменше 2.Від найбільшого відняти менше

function maxDiff(list) {
  if (list.length === 0) {
    return 0;
  }
  const largest = Math.max(...list);
  const smallest = Math.min(...list);
  return largest - smallest;
}
// console.log(maxDiff([1, 2, 3, -4])); //7

// 36 Lost number in number sequence
// 1.Порівняти перший масив з другим і вивести 2, 'Deletion' або 0, 'No deletion'

function findDeletedNumber(arr, mixArr) {
  // const missingNumbers = arr.filter((num) => !mixArr.includes(num));
  // return Number(missingNumbers)
  for (let i = 0; i < arr.length; i++) {
    if (mixArr.indexOf(arr[i]) === -1) {
      return arr[i];
    }
  }
  return 0;
}
// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); //5

// 37 Sum of Odd Cubed Numbers
// 1.Знайти непарні числа піднести їх куба і посумувати

function cubeOdd(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(arr[i] ** 3);
    }
  }

  const result = res.reduce((acc, ind) => acc + ind, 0);

  return isNaN(result) ? undefined : result;
}

// console.log(cubeOdd([1, 2, 3, 4]));

// 38  Nth Smallest Element (Array Series #4)

// 1.Знайти n найменше значення елемента
function nthSmallest(arr, pos) {
  for (let i = 0; i < pos - 1; i++) {
    const minimun = Math.min(...arr);
    const index = arr.indexOf(minimun);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
  return Math.min(...arr);
}

// console.log(nthSmallest([15, 20, 7, 10, 3, 4], 3));

// 39 Maximum Gap (Array Series #4)

function maxGap(numbers) {
  const result = [];
  const sorted = numbers.slice().sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 1; i++) {
    let res = sorted[i + 1] - sorted[i];
    result.push(res);
  }
  return Math.max(...result);
}

// console.log(maxGap([13, 10, 2, 9, 5])); //2 5 9 10 13

// 40 Product Array (Array Series #5)
// 1.Перемножити числа уникаючи один із індексів числа

function productArray(numbers) {
  const total = numbers.reduce((acc, num) => acc * num, 1);

  const res = numbers.map((num) => total / num);
}

// console.log(productArray([3, 27, 4, 2])); //[216,24,162,324]

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// // doubledNumbers = [2, 4, 6, 8, 10]//повертає масив де функція застосовувалась до кожного елемента

// 41 Maximum Triplet Sum (Array Series #7)

// 1.Видалення дублікатів
// 2.Сортування за спаданням
// 3.Сума перших трьох елементів

function maxTriSum(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  const result = sortedNumbers.slice(0, 3).reduce((acc, sum) => acc + sum);
  return result;
}

// console.log(maxTriSum([-3, -27, -4, -2, -27, -2])); //17

// 42 Tidy Number (Special Numbers Series #9)

// Якщо по зростанню - true, інакше false

function tidyNumber(n) {
  const numTostr = n.toString().split("").map(Number);
  for (let i = 0; i < numTostr.length - 1; i++) {
    if (numTostr[i] > numTostr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(tidyNumber(12));

// 43 Spacify

function spacify(str) {
  return str.split("").join(" ");
}

// console.log(spacify("hello world")); //str

// 44 My Language Skills

// 1.Перетворюємо об'єкт в масив ключ-значення
// 2.Відбираємо елементи, для яких значення перевищує 60
// 3.Відсортувати по спаданню
// 4.Витягуємо тільки назви мов і повертаємо масив

function myLanguages(results) {
  const entries = Object.entries(results);

  const filtered = entries.filter(([lang, num]) => num >= 60);

  const sorted = filtered.sort((a, b) => b[1] - a[1]);

  const mapped = sorted.map(([lang]) => lang);

  return mapped;
}

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

// 45 Help the Fruit Guy

// 1.застосувати умову до кожного елемента map
// 2 перевести в нижній регістр
// 3 перевірити на префікс
// 4 видалити його у разі виявлення

function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) {
    return [];
  }

  const result = bagOfFruits.map((fruit) => {
    const prefix = "rotten";

    const LowercasedFruit = fruit.toLowerCase();

    if (LowercasedFruit.includes(prefix)) {
      return LowercasedFruit.slice(prefix.length);
    } else {
      return LowercasedFruit;
    }
  });

  return result;
}

// console.log(removeRotten(["apple", "rottenBanana", "apple"]));

// 46 Smallest value of an array

function min(arr, toReturn) {
  if (toReturn === "value") {
    const minimum = Math.min(...arr);
    return minimum;
  } else if (toReturn === "index") {
    const minimum = Math.min(...arr);
    const ind = arr.indexOf(minimum);
    return ind;
  }
}

// console.log(min([1, 2, 3, 4, 5], "value"));

// 47 Sort by Last Char

function last(x) {
  const splited = x.split(" ");

  const result = splited.sort((a, b) => {
    const lastCharA = a.charAt(a.length - 1);
    const lastCharB = b.charAt(b.length - 1);

    if (lastCharA < lastCharB) {
      return -1;
    } else if (lastCharA > lastCharB) {
      return 1;
    } else {
      return 0;
    }
  });
  return result;
}

// console.log(last("man i need a taxi up to ubud"));

// 48 The Office I - Outed

// Якщо <= 5, поверніть Get Out Now! Інакше поверніть Nice Work Champ!.

function outed(meet, boss) {
  const entries = Object.entries(meet);
  let totalScore = 0;

  for (const [person, score] of entries) {
    totalScore += person === boss ? score * 2 : score;
  }
  const averageScore = totalScore / entries.length;

  if (averageScore <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
}
// console.log(outed({ tim: 0, jim: 2, laura: 6 }, "laura"));

// 49 Array element parity

function solve(arr) {
  const positive = arr.filter((num) => num > 0);
  const negative = arr.filter((num) => num < 0);

  const filtered =
    positive.find((num) => !negative.includes(-num)) ||
    negative.find((num) => !positive.includes(-num));
  return filtered;
}
// console.log(solve([1, -1, 2, -2, 3]));

// 50 Simple consecutive pairs
// 1.Послідовність у дві сторони і останнє число без пари не враховуємо

  function pairs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i += 2) {
        if (Math.abs(arr[i] - arr[i + 1]) === 1) {
            count++;
        }
    }
    return count;
}

// console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));

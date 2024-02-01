// standard basic decision
// Counting sheep
// 1)Перевірити наявність овечок ,якщо true,то це 1 і потрібно порахувати їх суму

// [[undefined,null,false,true,true,false,null,undefined], 2]

const countSheep = (sheep) => {
  let sum = 0;

  if (Array.isArray(sheep)) {
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) {
        sum += 1; //or sum++ і не треба перевірки на масив
      }
    }
  }
  return sum;
};

// console.log(countSheep([undefined, null, false, true, true, true]));

// 2)To square(root) or not to square(root)

//1.Піднести до цілого квадратного кореня(9 = 3)
//2.Перевірити,якщо число не ціле,тоді підносимо до степеня

const squareOrSquareRoot = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const sqrt = Math.sqrt(array[i]);
    if (Number.isInteger(sqrt)) {
      result.push(sqrt);
    } else {
      result.push(array[i] ** 2);
    }
  }

  return result;
};

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// 3)Merging sorted integer arrays (without duplicates)

// 1.Об'єднати масиви в один
// 2.Перевірити на наявність дублікатів

mergeArrays = (a, b) => {
  const connectArray = a.concat(b);

  for (let i = 0; i < connectArray.length; i++) {
    for (let j = i + 1; j < connectArray.length; j++) {
      if (connectArray[i] === connectArray[j]) {
        connectArray.splice(j, 1);
        j--;
      }
    }
  }
  // Сортировка массива перед возвратом так как после обьеденения и удаления дубликатов всеравно масив остаеться в исходном порядке нужно отсортировать
  return connectArray.sort((a, b) => a - b);
};
// console.log(mergeArrays([2, 4, 8], [2, 4, 6])); //2 4 8 6

// 4)Array plus array

// 1.Об'єднали масиви
// 2.Помістили їх у суму змінну

arrayPlusArray = (arr1, arr2) => {
  let result = 0;
  const connectArray = arr1.concat(arr2);

  for (let i = 0; i < connectArray.length; i++) {
    result += connectArray[i];
  }
  return result;
};
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// 5)Count of positives / sum of negatives

// 1.Порахувати довжину додатніх чисел
// 2.Порахувати СУМУ від'ємних чисел
// 3.Перевірка на [] або null повертає пустий масив

countPositivesSumNegatives = (input) => {
  let positiveCount = 0;
  let negativeSum = 0;

  // Ложные значения включают в себя null, undefined, 0, пустую строку ('') и другие.

  // Соединяя оба условия, выражение !input || input.length === 0 проверяет, что input пустой или равен null.
  // Если хотя бы одно из этих условий выполняется, функция возвращает пустой массив []

  if (!input /*false*/ || input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (Number.isInteger(input[i])) {
      if (input[i] > 0) {
        positiveCount++;
      } else if (input[i] < 0) {
        negativeSum += input[i];
      }
    }
  }
  return [positiveCount, negativeSum];
};

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,null,[]]));

// 6)Fake Binary

// 1.Якщо число менше 5 , замінити на 0,якщо більше 5 на 1

function fakeBin(x) {
  let number = x.split("");
  let res = "";
  for (let i = 0; i < number.length; i++) {
    if (Number(number[i]) < 5) {
      res += "0";
    } else {
      res += "1";
    }
  }
  return res;
}

// 7 Square(n) Sum

/* or example, for [1, 2, 2] it should return 9 because 1 * 1 = 1 + 
  2 * 2 = 4 +
  2 * 2 = 4 
  = 9*/

// 1.підвести до квадрата кожне число
// 2.порахувати їх суму

squareSum = (numbers) => {
  let res = 0;

  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i] ** 2; //Math.pow(numbers[i],2)
  }
  return res;
};
// console.log(squareSum([1, 2]));

// 8 Find the first non-consecutive number

// 1.Знайти не-послідовне число і вивести його числом
// 2.Якщо всі послідовні вивести null
// 3.Якщо на вхід буде пустий масив або лише 1 елемент вивести null2

firstNonConsecutive = (arr) => {
  if (arr.length < 2) {
    return "null2";
  }
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) !== 1) {
      return arr[i];
    }
  }
  return null; // Если все элементы последовательны, вернуть null
};

// console.log(firstNonConsecutive([1, 2, 3])); // Выведет 6, так как это первый элемент, который не является последовательным

// 9 Sort and Star

// 1.Відсортувати в алфавітному порядку ASCII(аске)
// 2.Перший елемент розкласти і вставити туди *** між кожною буквою

twoSort = (s) => {
  const sorting = s.sort();
  const first = sorting[0];
  const formattedString = first.split("").join("***");
  return formattedString;
};
// console.log(twoSort([ "take", "over", "the", "world","bitcoin", "maybe", "who", "knows", "perhaps"]));

// 10 Find Multiples of a Number

// 1.На вхід маємо 2 числа перше ціле число,друге ліміт до якого рахуємо чи кратне ціле число.
// 2.Знайти всі кратні числа

findMultiples = (integer, limit) => {
  const multiples = [];

  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }
  return multiples;
};

// console.log(findMultiples(2,8));

// 11 Remove duplicates from list

// 1.Відсортувати масив чисел
// 2.Видалити дублікати з нього

const distinct = (a) => {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (res.indexOf(a[i]) === -1) {
      //Если indexOf вернул -1, это означает, что элемент a[i] не найден в массиве res.
      res.push(a[i]);
    }
  }

  return res;
};

// console.log(distinct([2, 4, 2]));

// 12 Remove First and Last Character Part Two
// 1.Видалити перший і останній елемент
// 2.Написати умову для непрацюючих значень

const array = (string) => {
  const parts = string.split(","); //отримали масив де A1 має індекс 0 B2 має індекс 1 і тд

  const result = parts.slice(1, -1).join(" ");

  if (parts.length < 3) {
    return null;
  }

  return result === "" ? null : result;

  // return string.split(',').slice(1,-1).join(' '); рішення одним рядком
};

// console.log(array("A1,B2,C3,D4,E5"));

// 13 Printing Array elements with Comma delimiters

const printArray = (array) => {
  const joined = array.join(",");
  return joined; // Добавьте оператор return
};

// console.log(printArray(["h", "o", "l", "a"]));

// 14 Removing Elements

const removeEveryOther = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
};

// 15 Add Length

// 1.Ми рахуємо довжину слова і добавляємо в кінець
// 2.вернути у виді масива

function addLength(str) {
  let res = [];
  const array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    const lengthOfWord = word.length;
    res.push(`${word} ${lengthOfWord}`);
  }
  return res;
}

// console.log(addLength("apple ban"));

// 16 Gravity Flip

// d - direction
// a - arr
const flip = (d, a) => {
  if (d === "R") {
    a.sort((a, b) => a - b);
    console.log(a);
  } else {
    a.sort((a, b) => b - a);
  }
  return a;
};
// console.log(flip("L", [3, 2, 1, 2]));

// 17 Calculate average

// 1.Знайти суму чисел
// 2.Знайти їх середнє значення

const findAverage = (array) => {
  let sum = 0;
  const length = array.length;

  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || array[i] === "") {
      return 0;
    } else {
      sum += array[i];
    }
  }

  const average = sum / length;
  return average;

  // return array.length === 0 ? 0 : array.reduce((acc,ind) => acc + ind,0)/ array.length
};
// console.log(findAverage([]));

// 18 A Needle in the Haystack

// 1.найти індекс нашого слова
// 2.вивести за допомогою інтерполяціх його у консоль

const findNeedle = (haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    const needle = "needle";
    const index = haystack.indexOf(needle);
    if (haystack[i] === needle) {
      return `found the needle at position ${index}`;
    }
  }
  return haystack;
};

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// 19 Sentence Smash

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" ");
}
// console.log(smash(["hello", "world", "this", "is", "great"]));

// 20 Multiple of index
// кратне число - це те яке ділиться без остатка 12 % 3 = 4

// Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина> 1

// 1.елемент поділити на власний індекс

const multipleOfIndex = (array) => {
  let res = [];
  if (array[0] === 0) {
    result.push(0);
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) {
      res.push(array[i]);
    }
  }
  return res;
};

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

// 21  Total amount of points

// 1. Якщо x > y: 3 очка (win)
// Якщо x < y: 0 очків (loss)
// Якщо x = y: 1 очок (tie)

const points = (games) => {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    const ScoreRes = games[i].split(":");
    const ourScore = ScoreRes[0];
    const opponentScore = ScoreRes[1];
    if (ourScore > opponentScore) {
      totalPoints += 3;
    } else if (ourScore === opponentScore) {
      totalPoints += 1;
    }
  }

  return totalPoints;
};

// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

// 22

// 1.вернути перевернутий масив

function digitize(...n) {
  const joined = n.join("");
  const splited = joined.split("");

  let reversed = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    reversed.push(parseInt(splited[i], 10));
  }

  // const reversed = n.map(Number).reverse();

  return reversed;
}

// console.log(digitize(1111, 2, 3));

// 25 Get the mean of an array

// 1.Знайти суму всіх чисел
// 2.Порахувати їх середній бал

const getAverage = (marks) => {
  let numberSum = 0;

  for (let i = 0; i < marks.length; i++) {
    numberSum += marks[i];
  }
  const average = Math.floor(numberSum / marks.length);
  return average;
};

// console.log(getAverage([1, 2, 3, 4, 5]));

// 26 beginner - Reduce but Grow

// 1.Помножити по черзі числа
grow = (x) => {
  let numberMulty = 1;
  // for (let i = 0; i < x.length; i++) {
  //   numberMulty *= x[i];
  // }
  let i = 0;
  while (i < x.length) {
    numberMulty *= x[i];
    i++;
  }
  return numberMulty;

  // return x.reduce((acc, curr) => acc * curr);
};
// console.log(grow([4, 1, 1, 1, 4]));

// 28 Invert values

const invert = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(-array[i]);
    } else if (array[i] < 0) {
      result.push(-array[i]);
    } else if (array[i] === 0) {
      result.push(0);
    }
  }
  return result;
};
// console.log(invert([0]));

// 29 Filter out the geese

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  function isGeese(element) {
    //перевіряєм елемент на елемент з geese
    return geese.includes(element);
  }

  const filteredArray = birds.filter((bird) => !isGeese(bird));
  return filteredArray;
}
const result = gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
]);

// const newArray = [];
// for (let i = 0; i < birds.length; i++) {
//   if (!geese.includes(birds[i])) {
//     newArray.push(birds[i]);
//   }

// }
// return newArray;
// }
// console.log(gooseFilter(["African1", "Roman Tufted2", "Toulouse3", "Pilgrim", "Steinbacher"]));

// 30 CSV representation of array

function toCsvText(array) {
  return array.join("\n");
}
// в итоге вы получаете одну строку, в которой элементы подмассивов разделены запятыми, а подмассивы разделены символами новой строки.
// console.log(toCsvText([[-25, 21, 2, -33, 48],[30, 31, -32, 33, -34],]));

// 31 Is there a vowel in there?

const isVow = (a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 97) {
      res.push("a");
    } else if (a[i] === 101) {
      res.push("e");
    } else if (a[i] === 105) {
      res.push("i");
    } else if (a[i] === 111) {
      res.push("o");
    } else if (a[i] === 117) {
      res.push("u");
    } else {
      res.push(a[i]);
    }
  }
  return res;
};
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
// 97, 101, 105, 111, 117  "a", "e", "i", "o", "u"

// 32 Count the Monkeys!

const monkeyCount = (n) => {
  let res = [];

  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  return res;
};
// console.log(monkeyCount(5));

// for (var i = 0, arr = []; i < n; arr.push(++i));
// return arr;

// 33 You only need one - Beginner

const check = (a, x) => {
  return a.includes(x);
};
// console.log(check([66, 101], 66));

// 34 pick a set of first elements

const first = (arr, n = 1) => {
  if (n <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < n && i < arr.length; i++) {
    // i < arr.length: Ця умова перевіряє, чи i менше за довжину масиву arr. Це гарантує, що ми не намагаємось звертатися до неіснуючих елементів масиву.
    // Якщо обидві умови true, цикл виконується, і ми додаємо елемент до результату. Якщо хоча б одна з умов false, цикл завершується.
    result.push(arr[i]);
  }

  return result;
};
// console.log(first(["a", "b", "c", "d", "e"], 2));

// 35 Duck Duck Goose

// duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

function duckDuckGoose(players, goose) {
  for (let i = 0; i < players.length; i++) {
    if (i === (goose - 1) % players.length) {
      return players[i].name;
    }
  }
}
// console.log(duckDuckGoose([{ name: "a" }, { name: "b" }, { name: "c" }], 5));

// const bob = 2;
// const bob2 = 6;

// const result2 = bob % bob2;
// console.log(result2);//2 !!!!

// 36 Sum of differences in array

// let i = 0;
// while (i < arrSort.length) {
//   const difference = arr[i] - arr[i + 1];
//   i++;
// }
sumOfDifferences = (arr) => {
  const arrSort = [...arr].sort((a, b) => b - a);
  let sum = 0;

  let i = 0;
  while (i < arrSort.length - 1) {
    sum += arrSort[i] - arrSort[i + 1];
    i++;
  }

  return sum;
};

// console.log(sumOfDifferences([10, 4, 2, 1]));

// 37 Beginner - Lost Without a Map

const maps = (x) => {
  return x.map((number) => number * 2);
};
// console.log(maps([1, 2, 3]));

// 38 No Loops 2 - You only need one - без використання цикла
// a - тільки числа і рядки
// x - може мати будь які значення
// 1. перевірити масив на числа і рядки
// 2.

const checking = (arr, x) => {
  return arr.includes(x);
};

// function check(a,x){
//   let result = a.indexOf(x);
//   return result < 0 ? false : true;
// };

// console.log(checking([22, 12], 22));

// 38 Sum Arrays

const sum = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  // return numbers.reduce((acc, elem) => acc + elem);
};
// console.log(sum([1, 5.2, 4, 0, -1]));

// 39 I love you, a little , a lot, passionately ... not at all

const howMuchILoveYou = (nbPetals) => {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  const index = (nbPetals - 1) % phrases.length;

  return phrases[index];
};
// console.log(howMuchILoveYou(1));

// 40 Count by X

function countBy(x, n) {
  let res = [];

  for (let i = 1; i <= x * n; i += x) {
    res.push(i);
  }

  return res;
}

// console.log(countBy(2, 5));

// 41 Find numbers which are divisible by given number

const divisibleBy = (numbers, divisor) => {
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      res.push(numbers[i]);
    }
  }
  return res;

  // return numbers.filter(number => number % divisor === 0);
};

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// 42 Sum Mixed Array

const sumMix = (x) => {
  let res = [];

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      res.push(Number(x[i]));
    } else {
      res.push(x[i]);
    }
  }

  res = res.reduce((acc, num) => acc + num);

  return res;
};
// console.log(sumMix([9, 3, "7", "3"]));

// 43 Merge two sorted arrays into one

// 1.Відсортувати 2 масива позростанню
// 2.Об'єднати їх в один
// 3.Перевірити на унікальність

const mergeArrays2 = (arr1, arr2) => {
  let merge = arr1.concat(arr2);

  merge = merge.sort((c, d) => c - d);

  merge = [...new Set(merge)];
  return merge;
};

// console.log(mergeArrays2([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// 43 Well of Ideas - Easy Versionф

("Fail!");
("Publish!");
("I smell a series!");
("good");
// якщо одна і більше 'good' - 'Publish!'
// якщо 'bad' - 'Fail!'
// якщо більше двох 'good' 'I smell a series!'

const well = (x) => {
  let good = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      good.push(x[i]);
    }
  }
  if (good.length >= 3) {
    return "I smell a series!";
  } else if (good.length >= 1) {
    return "Publish!";
  } else {
    return "Fail!";
  }

  // const arr = x.filter((x) => x == "good").length;

  // switch (arr) {
  //   case 0:
  //     return "Fail!";
  //   case 1:
  //   case 2:
  //     return "Publish!";
  //   default:
  //     return "I smell a series!";
  // }
};
// console.log(well(["good", "bad", "bad", "bad", "bad", "good", "good"]));

// 44 A wolf in sheep's clothing

const warnTheSheep = (queue) => {
  const wolfIndex = queue.indexOf("wolf");
  const from = queue.length - 1;

  if (wolfIndex === from) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepNumber = from - wolfIndex;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
  // 2)
  // const position = queue.reverse().indexOf('wolf');

  // return position === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
};
// console.log(
//   warnTheSheep([
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "wolf",
//     "sheep",
//     "sheep",
//   ])
// );

// 45 Enumerable Magic #20 - Cascading Subsets

function eachCons(array, n) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(array.slice(i, i + n));
  }
  return res.filter((e) => e.length === n);
}

// console.log(eachCons([3, 5, 8, 13], 2));

// Тут я перейшов на тег popularity

// 46 SpeedCode #2 - Array Madness

// 1.Порахувати елемент в квадраті
// 2.Порхувати їх суму
// 3.Підсумувати а b

function arrayMadness(a, b) {
  const sqrtA = a.map((num) => num ** 2);
  const sqrtB = b.map((num) => num ** 3);

  const sumA = sqrtA.reduce((acc, ind) => acc + ind);
  const sumB = sqrtB.reduce((acc, ind) => acc + ind);

  // тернарний оператор
  return sumA > sumB ? true : false;
}
// console.log(arrayMadness([12, 2, 2], [1, 2, 3]));

// 46. Grasshopper - Array Mean

const findAverag = (nums) => nums.reduce((acc, ind) => acc + ind) / nums.length;

// console.log(findAverag([1, 3, 5, 7]));

// 47 Find the Difference in Age between Oldest and Youngest Family Members

// 1.Знайти найменше число
// 2.Знайти найбільше число
// 3.Знайти різницю між ними

const differenceInAges = (ages) => {
  const sortedAges = ages.slice().sort((a, b) => a - b);

  const minAge = sortedAges[0];
  const maxAge = sortedAges[sortedAges.length - 1];
  const difference = maxAge - minAge;

  return [minAge, maxAge, difference];

  // function differenceInAges(ages){
  //   const min = Math.min(...ages);
  //   const max = Math.max(...ages);

  //   return [min, max, max-min];
  // }
};

// console.log(differenceInAges([82, 15, 6, 38, 35]));

// 48 Swap Values

uefaEuro2016(["Germany", "Ukraine"], [2, 0]); // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(["Belgium", "Italy"], [0, 2]); // "At match Belgium - Italy, Italy won!"
uefaEuro2016(["Portugal", "Iceland"], [1, 1]); // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  for (let i = 0; i < teams.length; i++) {
    if (scores[i] > scores[i + 1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
    } else if (scores[i] < scores[i + 1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
    } else if (scores[i] === scores[i + 1]) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
    }
  }
}
// console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]));

// // 49 Logical calculator

// function logicalCalc(array, op) {

// }

// console.log(logicalCalc([true, true, true, false], "AND"));



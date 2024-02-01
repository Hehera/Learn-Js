// 1

// Завершіть рішення так, щоб рядок розбивався на пари по два символи. Якщо рядок містить непарну кількість символів,
// необхідно замінити відсутній другий символ останньої пари підкресленням («_»).

// написали умову якщо непарна к-сть добавляємо нижнє тире
//    об'явили індекс = 0;добавили масив у змінній  result
// за допомогою цикла while перевіряємо кожен елемент
// пушим в масив 2 елемента
// задаємо,щоб при кожній ітерації наш цикл брав по 2 числа

// function twoPairs (str){

// let result = [];
// let i = 0;//тому,що використали цикл while

// if(str.length % 2 !== 0) {
//     str += '_';
// }
// // Цикл буде виконуватися до тих пір, поки i не буде дорівнювати довжині масиву str.
// while(i < str.length) {
//     // result.push(str[i] + str[i + 1]) додає в масив result пару з поточних двох елементів масиву str.
//     result.push(str[i] + str[i + 1])
//     // i += 2; інкрементує змінну i на 2. Це необхідно для того, щоб цикл while перебирав елементи масиву по два.
//     i += 2;
// }
// return result;
// }

// console.log(twoPairs('kappa loler'));

// 1.2
// function getPairsOfNumbers(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i += 2) {
//     result.push(`${str[i] + (str[i + 1] || "_")}`);
//   }
//   return result;
// }
// console.log(getPairsOfNumbers("hello world"));

// 2
// написати блок умову якщо менше 4 симв вертаємо рядок
// написати цикл якшо більше рівне 5 симв тоді вертаємо масив.split('').reverse().join('')
// join('')

// function reverseWords(sentense) {
//   const wordsArray = sentense.split(" ");
//   let result = "";
//   wordsArray.map((str, i) => {
//     if (str.length >= 5) {
//       wordsArray[i] = str.split("").reverse().join("");
//     } else if (str.length <= 4) {
//       wordsArray[i] = str;
//     }
//     result = wordsArray.join(' ');
//   });
//   return result;
// }
// console.log(reverseWords('kappa loler'));

// 3

// Ваше завдання — написати функцію maskify, яка змінює всі символи, крім останніх чотирьох, на '#'.

// function maskify(cc) {
//   if (cc.length < 4) {
//     return cc;
//   } else {
//     // показати останні чотири цифри
//     let lastForNumbers = "";
//     // for (let i = 12; 12 < 16; i++) {
//     //     lastForNumbers += 16[12,13,14,15];
//     //   }
//     for (let i = cc.length - 4; i < cc.length; i++) {
//       lastForNumbers += cc[i];
//     }
//     let mask = "";
//     // for (let j = 0; 0 < 16 - 4 = 12; j++) {
//     //     mask += "#";
//     //   }
//     for (let j = 0; j < cc.length - 4; j++) {
//       mask += "#";
//     }
//     return mask + lastForNumbers;
//   }
// }

// console.log(maskify("1241254151252122112"));

// 4

// Виконайте функцію, яка приймає параметр рядка та змінює кожне слово в рядку. Усі пробіли в рядку мають бути збережені.

// function reverseString(sentense) {
//   const words = sentense.split(" ");

//   const array = words.map((str)  =>  str.split("").reverse().join(""));
//   return array.join(" ");
// }

// console.log(reverseString("hello world"));

// 5

// Створіть функцію, яка повертає суму двох найменших додатних чисел із заданим масивом із мінімум 4 додатних чисел.
// Числа з плаваючою точкою чи недодатні цілі числа не передадуться.
// Знаходимо два найменших числа в масиві
// function sumTwoSmallestNumbers(numbers) {
//   //   const array = [10, 5, 2, 8, 7, 3, 9, 6, 4];

//   // Знаходимо два найменших числа в масиві
//   let minValue1 = numbers[0]; // 0 тому що в задачі сказано від'ємних чисел немає
//   let minValue2 = numbers[1];

//   // Перебираємо всі елементи масиву
//   for (let i = 2; i < numbers.length; i++) {
//     // Якщо поточний елемент менше першого мінімального значення,
//     // то оновіть перше мінімальне значення
//     if (numbers[i] < minValue1) {
//       minValue2 = minValue1;
//       minValue1 = numbers[i];
//     }
//     // Якщо поточний елемент менше другого мінімального значення,
//     // то оновіть друге мінімальне значення
//     else if (numbers[i] < minValue2) {
//       minValue2 = numbers[i];
//     }
//   }
//   return minValue1 + minValue2;
// }

// console.log(sumTwoSmallestNumbers([4, 3, 2, 1])); // 3);

// function SumOfTwoNumbers(numbers) {
//   let minValue1 = numbers[0];
//   let minValue2 = numbers[1];

//   for (let i = 2; i < numbers.length; i++) {
//     if (numbers[i] < minValue1) {
//       minValue2 = minValue1;
//       minValue1 = numbers[i];
//     } else if (numbers[i] < minValue2) {
//       minValue2 = numbers[i];
//     }
//   }
//   return minValue1 + minValue2;
// }
// console.log(SumOfTwoNumbers([11, 1141, 31, 5, 61]));//4

// function stringOfThree(str) {
//   const length = str.length;

//   const result = [];

//   for (let i = 0; i < length; i += 3) {
//     result.push(str.slice(i, i + 3));
//   }
//   return result;
// }
// console.log(stringOfThree("hello world1"));


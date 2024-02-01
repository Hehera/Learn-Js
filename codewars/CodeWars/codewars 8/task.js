// Завершіть рішення так, щоб рядок розбивався на пари по два символи. Якщо рядок містить непарну кількість символів,
// необхідно замінити відсутній другий символ останньої пари підкресленням («_»).

// 1)Написали цикл while

// function splitString (str){
//     let result = [];
//     let i = 0;

//   if (str.length  % 2 !== 0 ) {//шоб не було underfined добавляємо пробіл
//     str = str + '_';
//   }
//   while (i < str.length) {
//       result.push(str[i] + str[i + 1]);//добавили щоб було по 2 символа,а не по одному
//       i += 2;//2 4 6 8 10 12 14 16...
// /*Строка result.push(str[i] + str[i + 1]) добавляет к массиву result новую строку, которая состоит из двух символов:
// // текущего символа str[i] и следующего символа str[i + 1].*/
// /*Строка i = i + 2; увеличивает значение переменной i на 2. Это означает, что при следующем выполнении цикла while цикл будет
//  обрабатывать следующий символ в строке str.*/
//   }
//   return result;
// }

// function solution(str){
//   let res = [];
//                               // i = i + 2
//   for (let i = 0; i < str.length; i +=2)
//    res.push(`${str[i] + (str[i+1] || '_')}`)
//    return res;
// }
// console.log(splitString('hello цвйвц'));
// ================================================================
//Напишіть функцію, яка приймає рядок з одного або кількох слів і повертає той самий рядок, але з усіма п’ятьма або більше літерами слів,
//  перевернутими (так само, як назва цього Kata). Передані рядки складатимуться лише з літер і пробілів. Пробіли будуть додані, лише якщо присутнє
//   більше одного слова.

// 1) Використайте метод split(), щоб повернути новий масив
// 2) Використайте метод reverse(), щоб перевернути новий створений масив
// 3) Використайте метод join(), щоб об’єднати всі елементи масиву в рядок

// function spinWords(sentence) {
//   const wordsArray = sentence.split(" ");
//   console.log(wordsArray);
//   let result = "";

//   wordsArray.map((str, i) => {
//     if (str.length >= 5) {
//       wordsArray[i] = str.split("").reverse().join('');
//     } else {
//       wordsArray[i] = str;
//     }
//     result = wordsArray.join(' ');
//   });
//   return result;
// }
// console.log(spinWords('Hey fellow warriors'));

// // 2 спосіб вирішення

// function spinWords(words) {
//  return words.split(' ').map(function (word){
//     return  (word.length > 4) ? word.split('').reverse().join('') : word;//тернарний оператор
//  }).join(' ');
// }
// console.log(spinWords('Hey fellow warriors'));

/*1. Чтобы разделить строку на слова. Первый вызов метода join() используется для разделения строки на слова с помощью пробела в качестве разделителя. 
Это необходимо, чтобы функция могла перевернуть слова из пяти или более букв.
2. Чтобы объединить слова обратно. Второй вызов метода join() используется для объединения слов обратно с помощью пробела в качестве разделителя. 
Это необходимо, чтобы функция могла вернуть строку, которая состоит из всех слов, как исходных, так и перевернутых.*/

/* Метод map() в JavaScript принимает массив в качестве входных данных и возвращает новый массив, 
в котором каждое значение исходного массива было обработано с помощью указанной функции.*/

// ====================================================================

/*Зазвичай, коли ви щось купуєте, вас запитують, чи номер вашої кредитної картки, номер телефону чи відповідь на ваше 
найпотаємніше запитання досі правильні. Однак, оскільки хтось може зазирнути вам через плече, ви не хочете, щоб це 
відображалося на вашому екрані. Натомість ми маскуємо це.
 Ваше завдання — написати функцію maskify, яка змінює всі символи, крім останніх чотирьох, на '#'.*/

// 1)написати блок-умову  де вказуємо якщо рядок менший 4 символів вертаємо звичайний рядок
// 2)інакше не маскуємо  останні 4 цифри поміщаємо їх в змінну last4 з індексом
// 3)всередині умови-блока пишемо ще один цикл де всі решта символів маскуються

// function maskify(cc) {
//   if (cc.length < 4) {
//     return cc;
//   } else {
//     let last4 = "";
//     // Таким образом, цикл for будет обрабатывать все цифры номера кредитной карты, начиная с четвертой цифры с конца  к первой цифре.
//     for (let i = cc.length - 4; i < cc.length; i++) {
//       last4 += cc[i];
//     }
//     let mask = "";
//     for (let j = 0; j < cc.length - 4; j++) {
//       mask += "#";
//     }
//     return mask + last4;//!! Важливо в якій послідовності додається
//   }
// }
// console.log(maskify("41241244124153"));

// ==========================================================================

// Виконайте функцію, яка приймає параметр рядка та змінює кожне слово в рядку. Усі пробіли в рядку мають бути збережені.

// function reverseWords(string) {
//   const words = string.split(" ");
//   const reverseWords = words.map((str) => str.split("").reverse().join(""));

//   return reverseWords.join(" ");
// }

// console.log(reverseWords("kappa kappa"));

// 2

// function  reverseWords(str){
// return str.split(' ').map(function(word){
// return word.split('').reverse().join('');
// }).join(' ');

// };
// console.log(reverseWords("kappa kappa"));
// =================================================================================

/*Створіть функцію, яка повертає суму двох найменших додатних чисел із заданим масивом із мінімум 4 додатних чисел.
 Числа з плаваючою точкою чи недодатні цілі числа не передадуться.*/

// console.log(sumTwoSmallestNumbers(minValue));

//1) ініціалізуємо змінні minValue1 і minValue2 значеннями першого і другого елементів масиву відповідно.
//  Це будуть перше і друге мінімальні значення.

// function sumTwoSmallestNumbers(numbers) {
// //   const array = [10, 5, 2, 8, 7, 3, 9, 6, 4];

//   // Знаходимо два найменших числа в масиві
//   let minValue1 = numbers[0];// 0 тому що в задачі сказано від'ємних чисел немає
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

// console.log(sumTwoSmallestNumbers([4, 3, 2, 1]));  // 3);
// // console.log(sumTwoSmallestNumbers()); //5
// // // ====================================================================================

// function solution (number){

// let rom = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
// output = '';

// for(let i in rom) {

//     while(number >= rom[i]) {
//         output += i

//         number -= rom[i]//видалили в об'єкті індекс даного ключа бо він вже був добавлений у output
//     }
// }
// return output
// }

// console.log(solution(400));

// 2

// function solution(number) {
//   let result = "",
//     decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//     roman = [
//       "M",
//       "CM",
//       "D",
//       "CD",
//       "C",
//       "XC",
//       "L",
//       "XL",
//       "X",
//       "IX",
//       "V",
//       "IV",
//       "I",
//     ];

//   decimals.map(function (value, index) {
//     while (number >= value) result += roman[index];
//     number -= value;
//   });
//   return result;
// }
// console.log(solution(1000));

// ==========================================
/*Вам буде надано число, і вам потрібно буде повернути його як рядок у розгорнутій формі. Наприклад:expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/

// Логіка

/*Створили масив 
перетворили число в рядок 
цикл де ми забираємо індекс останньої цифри тим самим визначаємо к-сть нулів,яку треба добавити у циклі while ,
 але перед тим ми будемо писати умову if чи індекси нашого числа не дорівнють нулю 
запушити результат у наш масив з пробілом + */

// function expandedForm(num) {
//   // Your code here
//   let sumNumArray = [];
//   let numStr = num.toString();
//   for (let n = 0; n < numStr.length; n++) {
//     let zeroCount = numStr.length /**4 */ - 1 - n; //240 = 2 індекс = 3 (довжина)
//     let subNum = numStr[n];
//     // console.log(subNum);
//     let x = 0;

//     if (/*1240*/numStr[n] /** 0 1 2 3 індекси */ !== "0") {
//       while (x/**0 */ < zeroCount/**3 */) {
//         subNum = subNum + "0";
//         x++;
//       }
//       sumNumArray.push(subNum);
//     }
//   }
// //   1 0 0 0 +  2 0 0 + 4 0
//   return sumNumArray.join(" + ");
// }
// console.log(expandedForm(1240));

// function cycle(number) {
//   let numArray = [];
//   let subNum = number.toString();
//   for (let i = 0; i < number.length; i++) {
//     let res = subNum[i];
//     console.log(res);
//   }
//   return numArray;
// }

// console.log(cycle("12"));

// function expandedForm(num) {
//     let sumArray = [];

//     let strNum = num.toString();
//     console.log(strNum);

//     }
//     console.log(expandedForm(1240))

// 2
// function expandedForm(num) {
//   num = String(num);

//   let result = [];

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] == "0") continue;
//     else result.push(num[i] + "0".repeat(num.length - 1 - i));
//   }
//   return result.join(" + ");
// }
//     console.log(expandedForm(1240))
// ======================================================
// Dominant array elements

// function solve(arr) {
//   let answer = [arr[arr.length - 1]]; //останній елемент в масиві 61
//   let pointer = arr.length - 1; //індекс останнього елемента в масиві 61- індекс:4

//   for (let i = arr.length - 2;/**передостанній елемент масиву,4,з індексом 3 */ i >= 0; i--) {
//     if (arr[i] > arr[pointer]) {//4 > 61 2) 7 > 4
//       answer.unshift(arr[i]); //ми додаємо 4 до початку answer тепер виглядає як [4, 61]. Оновлюємо pointer на індекс 3.
//     //    2)Оскільки 7 більше за 4, ми додаємо 7 до початку answer, і answer тепер виглядає як [7, 4, 61].  Оновлюємо pointer на індекс 2.
//       pointer = i;
//     }
//   }
//   console.log(`answer ${answer}`);
// }
// console.log(solve([4,7,10,14,13]));
// =============================================

// function strongEnough(earthquake, buildingAge) {
//   // Початкова міцність будівлі
//   let initialStrength = 1000;

//   // Розрахунок експоненційного розпаду міцності будівлі з урахуванням віку
//   let currentStrength = initialStrength * Math.pow(0.99, buildingAge);
// console.log(currentStrength);
//   // Розрахунок магнітуди землетрусу
//   let earthquakeMagnitude = 1; // Початкове значення магнітуди
//   for (let i = 0; i < earthquake.length; i++) {
//     let shockwave = 0; // Сума значень в шоквейві
//     for (let j = 0; j < earthquake[i].length; j++) {
//       shockwave += earthquake[i][j];
//     }
//     earthquakeMagnitude *= shockwave; // Перемноження суми на попередню магнітуду
//   }

//   // Порівняти магнітуду землетрусу з поточною міцністю будівлі
//   if (earthquakeMagnitude <= currentStrength) {
//     return "Безпечно!";
//   } else {
//     return "Потрібна підсилення!";
//   }
// }

// console.log(strongEnough([[11,4,5],[2,4,5],[3,4,5]], 5));

// ==============
// console.log(Math.sqrt(x ** 2));

// function distanceBetweenPoints(a, b) {
//   // Різниця між координатами 'x' точки 'a' і точки 'b'
//   const diffX = a.x - b.x;
//   // Різниця між координатами 'y' точки 'a' і точки 'b'
//   const diffY = a.y - b.y;

//   // Обчислення відстані між точками в двовимірному просторі
//   const distanceX = Math.sqrt(diffX ** 2 + diffY ** 2);

//   // Повернення обчисленої відстані
//   return distanceX;
// }

// // Визначення точок 'pointA' і 'pointB' з координатами 'x' та 'y'
// const pointA = { x: 4, y: 11 };
// const pointB = { x: 4, y: 2 };

// // Виклик функції 'distanceBetweenPoints' і виведення результату
// console.log(distanceBetweenPoints(pointA, pointB));

// =============================================

// function spinAround(turns) {
//   let res = 0;

//   for (let i = 0; i < turns.length; i++) {
//     if (turns[i] === "right") {
//       res += 90;
//     } else {
//       res -= 90;
//     }
//   }

//   const rotations = Math.floor(Math.abs(res) / 360);

//   return rotations;
// }

// //   console.log(spinAround(["right", "right", "right", "right"])); // Виведе 1 (360 градусів - 1 оберт)
// console.log(
//   spinAround(["left", "left", "left", "left", "left", "left", "left", "left"])
// ); // Виведе 2 (720 градусів - 2 оберти)
// =====================================================

// Page replacement algorithms: FIFO
// function fifo(n, referenceList) {
//     let result = new Array(n).fill(-1);

//     let position = 0;

//     for (let i of referenceList) {
//       if (!result.includes(i)) {
//         result[position] = i;
//         position = (position + 1) % n;
//       }
//     }
//     return result;
//   }

//   console.log(fifo(5, [1, 4, 5]));// [1, 4, 5, -1, -1]

// ===============================================================
// Elevator Distance
// function elevatorDistance(array) {
//   let res = 0;

//   for (let i = 0; i < array.length - 1; i++) {
//     res += Math.abs(array[i] - array[i + 1]);
//   }
//   return res;
// }
// console.log(elevatorDistance([5, 2, 3]));
// ======================================================

// function nextHappyYear(year) {
//   while (new Set(String(++year).split("")).size < 4) return year;
// }

// console.log(nextHappyYear(2013)); //3 1 0
// ======================================================
// 1)Якщо число парне,тоді визначити числа посередині
// 1.1 додаємо всі числа зліва и всі числа справа
// 1.2 порівнюємо суму лівих чисел із сумою правих чисел
// 2)Якщо число непарне тоді одне число залишаємо

// function findMiddleAndPrintBalanced(number) {

//   }

// Примеры вызова функции:
// findMiddleAndPrintBalanced(6); // Выведет "balanced"
// findMiddleAndPrintBalanced(42); // Выведет "balanced"
// findMiddleAndPrintBalanced(1234); // Выведет "23"
// findMiddleAndPrintBalanced(789); // Выведет "8"
// findMiddleAndPrintBalanced(11111789); // Выведет "8"

// function isBalanced(num) {
//   const numStr = num.toString();
//   const numLength = numStr.length;

//   if (numLength === 1) {
//     console.log('not balanced');
//     return;
//   } else if (numLength % 2 === 0) {
//     if (numLength === 2) {
//       console.log('Balanced');
//       return;
//     } else {
//       const middleIndex = numLength / 2 - 1;
//       const leftSum = numStr.slice(0, middleIndex).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//       const rightSum = numStr.slice(middleIndex + 2).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//       if (leftSum === rightSum) {
//         console.log('Balanced');
//       } else {
//         console.log('Not Balanced');
//       }
//     }
//   } else {
//     const middleIndex = Math.floor(numLength / 2);
//     const leftSum = numStr.slice(0, middleIndex).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//     const rightSum = numStr.slice(middleIndex + 1).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//     if (leftSum === rightSum) {
//       console.log('Balanced');
//     } else {
//       console.log('Not balanced');
//     }
//   }
// }

// // Примеры использования:
// isBalanced(12);            // Вывод: balanced
// isBalanced(4012);          // Вывод: balanced
// isBalanced(1241245452);    // Вывод: not balanced
// isBalanced(343);           // Вывод: balanced
// isBalanced(414524124);     // Вывод: balanced
// isBalanced(7);             // Вывод: not balanced

// function isBalanced(num) {
//   let string = String(num);

//   let res = 0;

//   for (let i = 0; i < string.length / 2 - 1; i++) {
//     res += Number(string[i] - Number(string[string.length - 1 - i]));
//     console.log(res);
//   }

//   return res == 0 ? "Balanced" : "Not balanced";
// // }
// // console.log(isBalanced(323));
function balancedNum(number) {
  number = number.toString().split("");
  if (number.length > 2) {
    leftSum = number
      .filter((val, index) => index < number.length / 2 - 1)
      .reduce((val, index) => +val + +index);

    rightSum = number
      .filter((val, index) => index > number.length / 2)
      .reduce((val, index) => +val + +index);

    return rightSum === leftSum ? "Balanced" : "Not Balanced";
  } else {
    return "Balanced";
  }
}
// console.log(balancedNum(410));
// filter
// let a = [1, 4, 5, 52, 525, 2, 52, 15, 2];
// // Якщо true елементи проходять якщо false не проходять
// let b = a.filter((item) => {
//   return true;
// });
// console.log(a);
// console.log(b);

// let c = a.filter((item) => {
//   if (item > 5) return true;
// });
// console.log(c);

// const clients = [
//   { debt: 4 },
//   { debt: 0 },
//   { debt: 1234 },
//   { debt: 314 },
//   { debt: 24 },
// ];

// let debts = clients
//   .filter((item) => item.debt > 10)
//   .sort((a, b) => b.debt - a.debt);
// console.log(debts);

// reduce - якщо вам потрібно щось зробити один раз

// let a = [-1, -4, 21, 3];
// let b = a.reduce((accum, item) => {
//   // accum = accum + item;//99 сума елементів

//   if (item > accum) {
//     accum = item;
//   }
//   return accum;
// }/**пишемо ноль тому що з від'ємного значення починається масив і  він попаде в результат ,а потім вже почне діяти умова */);
// console.log(b);

// // Ex 2
// const c = [
//   { id: 55, city: "lviv" },
//   { id: 35, city: "lviv 45" },
// ];

// let d = c.reduce((accum, item) => {
//   accum.push(item.id);
//   return accum;
// },[]);//Коли ви використовуєте порожній масив [] як початкове значення, це означає, що reduce почне з порожнього масиву, і в кожній ітерації він буде додавати item.id
// console.log(d);

// const strong = (n) => {
//   console.log(n);
// };

// const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

// const getAverage = (numbers) => {
//   const total = numbers.reduce((total, number) => {
//     return total + number;
//   }, 0);

//   return total / numbers.length;
// };
// console.log(getAverage(numbers));

// const users = [
//   {
//     username: "lando12",
//     jedi: false,
//   },
//   {
//     username: "kappa99",
//     jedi: true,
//   },
//   {
//     username: "pogger92",

//     jedi: false,
//   },
//   {
//     username: "conslusions12",
//     jedi: true,
//   },
//   {
//     username: "conslusions12",
//     jedi: true,
//   },
// ];

// const countJedi = (users) => {
//   return users.reduce((count, user) => {
//     if (user.jedi) {
//       count++;
//     }
//     return count;
//   }, 0);
// };
// console.log(countJedi(users));

// const getNamesArray = (users) => {
//   return users.reduce((names, user) => {
//     if (user.jedi) {
//       names.push(user.username);
//     }
//     return names;
//   }, []);
// };

// console.log(getNamesArray(users));

// Склеєння об'єктів

const documents = [
  {
    content: "i love you",
    author: "Obi-van-zalupa",
    date: "2017-01-17  07:13:05",
  },
  {
    content: "i love you 2",
    author: "Leila Gorgana",
    date: "2019-11-27  21:17:05",
  },
  {
    content: "Fear Open Door",
    author: "Yoda",
    date: "1999-02-27  17:17:05",
  },
];

const composeDocument = () => {
  return documents.reduce(
    (generalDocument, document) => {
      // generalDocument.content = generalDocument.content += document.content;
      generalDocument.content =
        generalDocument.content + " " + document.content;
      generalDocument.author.push(document.author);

      if (
        !generalDocument.date ||
        new Date(generalDocument.date).valueOf() <= new Date(document.date)
      ) {
        generalDocument.date = document.date;
      }

      return generalDocument;
    },
    {
      content: "",
      author: [],
      date: null,
    }
  );
};
// console.log(composeDocument());
// В вашем коде new Date(generalDocument.date) создает объект Date на основе значения, переданного в generalDocument.date,
//  и затем метод valueOf() вызывается для этого объекта, чтобы получить timestamp этой даты в миллисекундах.Здесь timestamp
// будет содержать количество миллисекунд с начала эпохи Unix для даты "2023-11-01T12:00:00Z". Это полезно, например, для сравнения
// дат или выполнения арифметических операций с датами.

// let a = [1, 2, 3, 4];

// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
// // console.log(sum);

// let b = a.reduce((max, item) => {
//   if (item > max) {
//     return item;
//   }

//   return max;
// });
// // console.log(b);

// let max = 0;
// let i = 0;

// while (i < a.length) {
//   if (a[i] > max) {
//     max += a[i];
//   }
//   i++;
// }
// console.log(max);
// var a1 = "A",
//   a2 = "a",
//   b1 = "B",
//   b2 = "b",
//   c1 = "C",
//   c2 = "c",
//   d1 = "D",
//   d2 = "d",
//   e1 = "E",
//   e2 = "e",
//   n1 = "N",
//   n2 = "n";
// const Dad = () => d1 + a2 + d2;

// const Bee = () => b1 + e2 + e2;

// const banana = () => b2 + a2 + n2 + a2 + n2 + a2;

// console.log(Dad(), Bee(), banana());

// const getLength = (arr) => arr.length;
//
// const getFirst = (arr) => arr[0];
//return the first element of arr

// const getLast = (arr) => arr.pop();
//return the last element of arr

// function pushElement(arr) {
//   let el = 11;

//   arr.push(el);
//   return arr;
// }

// function popElement(arr) {
//   arr.pop();
//   return arr;
// }
// console.log(popElement([1, 2, 3]));

// function animal(obj) {
//   const desc = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
//   return desc;
// }
// console.log(
//   animal({
//     name: "dog",
//     legs: 2,
//     color: "white",
//   })
// );
// // "This white dog has 4 legs."

// function trueOrFalse(val) {
//   if (val === false || !val) {
//     return "false";
//   } else {
//     return "true";
//   }
// }
// console.log(trueOrFalse([1,2,3]));

// function howManydays(month) {
//   var days;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;

//     case 2:
//       days = 28;
//       break;
//   }
//   return days;
// }
// console.log(howManydays(2));

// const countSheeps = (sheep) => {
//   let a = 0;

//   if (Array.isArray(sheep)) {
//     for (let i = 0; i < sheep.length; i++) {
//       if (sheep[i] === true) {
//         a += 1;
//       }
//     }
//   }
//   return a;
// };

// console.log(countSheeps([undefined, null, false, true, true, true]));

// const countSheep = (sheep) => {
//   let sum = 0;

//   if (Array.isArray(sheep)) {
//     return sheep.reduce((count, isSheep) => {
//       if (isSheep === true) {
//         return count + 1;
//       }
//       return count;
//     }, 0);
//   }
//   return 0; //Мы возвращаем 0 в блоке return 0; в случае, если массив sheep либо не является массивом
// };
// console.log(countSheep([undefined, null, false, true, true, true]));

// for(let i = 0;i < sheep.length;i++){
//   if()
// }

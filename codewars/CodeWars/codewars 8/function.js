// function імя (параметри){
//     тіло(код функції)
"use strict";
// }
/*
функції називають за їх призначенням наприклад:
"show" - показати 
"get" - вернути значення
"calc" - обчислення
"create" - створення
"check" - перевка і повернення логічного значення
*/
/* Приклади
showMessage - показати повідомлення
getOptions - отримати параметри
calcSum - обчислити суму
*/

// Об'ява функції (function declaration) тим самим ми можемо зменшувати наш код,визивавши скільки нам потрібно
// showMessage () //до
// function showMessage() {
//   console.log("kappa");
// }
// showMessage ()//після

// =====================================
// Вкладеність і видимість функції
// getSumm is not defined
// if (2 > 1) {
//   //Якщо функція находиться всередині блока викликати функцію поза неї ми не можемо,але за допомогою function Expression можемо записавши функцію у змінну
//   function getSumm() {
//     let numOne, numTwo;

//     function getNumOne() {
//       numOne = 1;
//     }
//     function getNumTwo() {
//       numTwo = 2;
//     }
//     getNumOne();
//     getNumTwo();

//     let numSumm = numOne + numTwo;
//     console.log(numSumm);
//   }
// }
// getSumm();
// getNumOne()//викликати функцію дочірнього елемента викличе помилку

// ==========================================
// локальна змінна та глобальна змінна
// function showMessage() {
//   //локальна змінна message за межами функції її викликати не можна
//   let message = "повідомлення";
//   console.log(message); //
// }
// showMessage()
// console.log(message);//не виведеться

// 2)
// Зовнішня змінна
// let message;
// function showMessage2() {
//   //глобальна змінна message
//   message = "повідомлення";
// }
// // також console.log перед функцією писати не можна
// showMessage2()
// console.log(message);//виводити тільки після об'яви функції showMessage2()

// 3)
// let message = "повідомлення-1";
// function showMessage2() {

//  let message = "повідомлення-2";
//  console.log(message);
// }
// console.log(message);//повідомлення-1 юо це глобальна змінна
// showMessage2()//"повідомлення-2" бо запуск функції

// Тобто,не дивлячись на одинакову назву це різні змінні

// 4)
// Використання глобальної змінної
// let globalVar = 'Я глобальна змінна';
// function getSumm() {
//   let numOne, numTwo;

//   function getNumOne() {
//     numOne = 1;
//     console.log(globalVar);
//   }
//   function getNumTwo() {
//     numTwo = 2;
//   }
//   getNumOne();
//   getNumTwo();

//   let numSumm = numOne + numTwo;
//   console.log(globalVar);
// }
// console.log(globalVar);
// getSumm();

// ===============================================================

// Параметри функції (аргументи) Якщо передаємо аргументи,то обов'язково при виклику функції вказуємо їх,інакше буде underfined

// function calcSumm (numOne,numTwo){// numOne = 1,numTwo = 2   2)спосіб або передати в аргументи функції
//     console.log(`Змінна numOne:${numOne}`);
//     console.log(`Змінна numTwo:${numTwo}`);

//     let numSumm = numOne + numTwo;

//     console.log(`Сума:${numSumm}`);

// }
// calcSumm(1,2);//передача значень у функцію

//Функції-колбеки(відомі великою к-стю аргументів)

// function calcSumm (numOne,numTwo,more,less){
//     let numSumm = numOne + numTwo;

//     if (numSumm > 3) {
//         more()
//     } else {
//         less()
//     }
// }

// function showMoreMessage (){
//     console.log("Більше ніж 3");
// }

// function showLessMessage (){
//     console.log("менше ніж 3");
// }

// calcSumm(1,3,showMoreMessage,showLessMessage);

// Повернення результата result

// function calcSumm(numOne, numTwo) {
//   let numSumm = numOne + numTwo;

//   // повернення результату і  зупиняє свою роботу
//   return numSumm;//писати в один рядок або просто return
//   // дальше код не виконується
// }

// let result = calcSumm(1, 2);
// console.log(`Sum:${result}`);

// Рекурсія - функція викликає сама себе всередині функції

// function getSumm(numOne, numTwo) {
//   let numSumm = calcSumm(numOne, numTwo);

//   console.log(numSumm);

//   function calcSumm(numOne, numTwo) {
//     return numOne + numTwo;
//   }
// }
// getSumm(4, 4);

// 2)приклад
// function calcSumm(numOne, numTwo) {
//   let result = 1;

//   // множимо result на numOne numTwo раз в циклі

//   for (i = 0; i < numTwo; i++) {
//     result = result * numOne;
//   }
//   return result;
// }
// console.log(calcSumm(2,3));

// тепер вищенаписаний код у рекурсії
// function calcSumm(numOne, numTwo) {
//  if(numTwo === 1) {
//     return  numOne;
//  }   else {
//     return numOne * calcSumm(numOne,numTwo - 1)//глубина рекурсії(10 000 вложеність движка js)
//  }
// }
// console.log(calcSumm(3,2));

// Функціональне вираження (Function Exspression)

// let showMessage = function  (){
//     console.log('Привіт');
// };
// //
// showMessage()

// 2)
// function getSum (){
//     let sum = 1 + 2;
//     console.log(sum);
// }
// let someVar = getSum;//в момент копіювання getSum функція не виконується так як нема дужок ()
// someVar();
// getSum ();

// 3)
// "use strict"
// if(2 > 1) {
//      function getResult(){
//         let summ = 2 + 1;
//         // console.log(summ)
//     }
// }
// getResult()

// // Щоб можна було виводити результат getResult() 1)let getResult; 2)getResult = function  () присвоїли змінній функцію 3)getResult() викликали
// let getResult;

// if(2 > 1) {
//     getResult = function(){
//         let summ = 1 + 1;
//         console.log(summ)
//     }
// }
// getResult()

// різниця між function Declaration function Expression така, що в Declaration ми можемо викликати її де завгодно,
// а Expression тільки після її створення

//Стрілочні функції(arrow functions)

// Функціональне вираження (function Expression)

// let /*ім'я змінної*/ = function(/*параметр,параметр*/) {
//     return /*вираження*/;
// }

// Стрілочна функція

// let /*ім'я змінної*/ = (/*параметр,параметр*/) => {}

// Однорядкова стрілочна функція
// let getMessage = (text,name) => text + ', ' + name + '!';

// console.log(getMessage('Привіт','Вася!'));

// Багаторядкова стрілочна функція

// let getMessage = (text, name) => {
// let message = text + ', ' + name + '!';
// return message;
// }

// console.log(getMessage('Привіт','Вася!'));

// setTimeout,setInterval

// setTimeout - викликає функцію один раз через певний проміжок часу.
// setInterval - викликає функцію регулярно через певний проміжок часу.

// function showMessage (text,name){
//     console.log(`${text},${name}`);
// }

// setTimeout(showMessage, 3000 ,'Привіт','Вася');
// setInterval(showMessage, 500 ,'Привіт','Вася');
// setInterval не завжди гарантує точну затримку так як залежить від загруженості
//  процесора ,економії батареї,тому треба використати рекурсивний метод

// рекурсивний метод

// function showMessage (text,name){
//     console.log(`${text},${name}`);
//     setTimeout(showMessage, 500 ,text,name);
// }
// setTimeout(showMessage, 3000 ,'Привіт','Вася');

// 2

// function showNumber (num){
// console.log(num);
// if(num < 5) {
//     setTimeout(showNumber,500,++num)
// }
// }
// setTimeout(showNumber,500,1)

// 3 clearTimeout

// function showNumber (num){
// console.log(num);
// let timeId = setTimeout(showNumber,500,++num)

// if(num === 6) {
//     clearTimeout(timeId)
// }
// }
// setTimeout(showNumber,500,1)

//

// let result = 0;
// function showNumber (num){
// result += num;
// console.log(result);

// if(result === 5) {
//     clearInterval(timerId)
// }
// }

// let timerId = setInterval(showNumber,500,1)

// Призначення функцій

// Потрібно завжди тянуся до скорочення функцій щоб одним рядком можна було передати декілька функцій

// функція поєдання рядків
// function createMessage(text, name) {
//   return `${text},${name} !`;
// }


// // функція вивода в консоль
// function showMessage(message) {
//   console.log(message);
// }

// //об'єднані дві функції

// function initMessage(text, name) {
//   showMessage(createMessage(text, name));
// }
// initMessage("Привіт", " Вася");

// Задача №1
// Кто попадет в консоль первым Вася или Коля?
// function showName() {
// 	console.log('Вася!');

// }
// setTimeout(showName, 0);
// console.log('Коля!');//Коля

// Задача №2
// // Верно ли вызвана функция
// showMessage();
// function showMessage() {
// 	console.log('Сообщение');
// }//правильно

// Задача №3
// Верно ли вызвана функция
// showMessage();
// let showMessage = function () {
// 	console.log('Сообщение');
// }//ні

// Задача №4
// Как решить проблему?
// 'use strict'
// let showMessage;
// if (2 > 1) {
// 	showMessage =  function () {
// 		console.log('Сообщение');
// 	}
// }
// showMessage(); // Error (showMessage is not defined)

// ===============================================================

// Замикання функцій

// =================================================================
// =====   функції і внутрішні перемінні
// =================================================================

// ex 1
// let a = 10;

// function f1() {
//   console.log(a);
// }

// f1();
// a = 99;
// f1();

// ex2

function f2() {
  //   a = 133; не писати так,бо при виклику вона буде шукати зовнішні змінні ,обов'язково оголошуємо let

  // Достукатися до локальної змінної неможливо
  let a = 133;

  console.log(a);
}
// f2();
// f1();

// =================================================================
// =====   Інколи глобальні перемінні тоже потрібні
// =================================================================

let count = 0;

function step() {
  count++;
  console.log(count);
}

// step()//коли змінні зовнішня count буде збільшуватись 1 / при локальній змінній по виклику буде 1
// step()//коли змінні зовнішня count буде збільшуватись 2 / при локальній змінній по виклику буде 1
// step()//коли змінні зовнішня count буде збільшуватись 3 / при локальній змінній по виклику буде 1
// step()//коли змінні зовнішня count буде збільшуватись 4 / при локальній змінній по виклику буде 1
// step()//коли змінні зовнішня count буде збільшуватись 5 / при локальній змінній по виклику буде 1

// ex 2
/*1)помістили функцію всередині якої вже є ще одна функція 2)вивели змінну в яку помістили функцію отримали undefined*/
function ttt(n = 0) {
  let count = n;

  return function () {
    count++;
    console.log(count);
  };
  //   step();//так краще не викликати так як безкорисно
}
// let z = ttt();
// console.log(z); //undefined

/*Замикання це прийом у програмуванні,коли створюється функція всередині якої поміщаються потрібні дані(змінні)
 і спосіб маніпулювання ними(тобто функціями) із-за того,що функція вкладена у функцію створиться ізольована область де наші 
 змінні будуть находитися і функції прописані всередині нашого замикання отримують до них доступ.
 Плюси такого підходу що з ізольованою областю можна виконувати один і той же код з різними змінними,і можна перевикористовувати.

 Також потрібно пам'ятати що замикання файлів JS дуже важливо оскільки в різних файлах це може викликати помилки.
 Бажано коли ми замикаємо функції зробити її анонімною(1)добавити дужки 2)забрати її назву 3)вкінці викликати її),оскільки 
 певні бібліотеки мають схожі назви функції,а це вже може зламати код.

 ex.3 
робимо анонімною
 (function () {
  let p = 60;   
  //    код
})();

3)Щоб не було undefined:1) добавляємо до внутрішньої функції return 2)Присвоюємо змінній всю функцію let step1 = ttt(); 3)викликаємо її step1();
4)тоді є сенс зробити внутрішню функцію анонімною забрати назву її і все буде працювати,але якщо присутня рекурсія тоді назву залишаємо
5)викликати як функцію змінну !!!*/

let step1 = ttt();
let step2 = ttt(200); //201
// step1(); //1
// step1(); //2
// step1(); //3
// step2(); // 1,але неважливо в якій послідовності ми викликаємо так як кожна функція виконує свою роботу
// step1(); //4
// step1(); //5

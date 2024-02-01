/* Всього існує 3 типи лапок*/
let textHi = 'Hello!';//одинарні 
let textName = "What's up?";//двойні лапки
let textAll = `${textHi,textName} i'm Nazar!`;//інтерполяція
// console.log(textAll)




function Sum (a, b){
    return a + b;
}   








// console.log(`Сума:${Sum(4,5)}`);


/*Багаторядковий запис,бетікі дають можливість зберегти перенос рядка*/

let text = `Привіт
Я Назар
,а тебе як звати?`
// console.log(text);

// Все що в лапках,завжди тип данних рядок


let someString = '158';
let someNum = 158;

// console.log(someString + someNum);//158158 рядок 


/**Всередині рядків можна використовувати ряд спецсимволів 
Всі спецсимволи починаються зі зворотнього слеша,
\ - символ екранування 
Ось декілька з них:
*/

//1)Перенос рядка на наступний рядок \n
let textOne = `Привіт
як справи ?
як тебе звати?`;

let textTwo = "Привіт\nяк справи ?\nяк тебе звати?"
// console.log(textOne); //обидва ці варіанти правильні
// console.log(textTwo);


// 2)Табуляція \t (відступ,там де вставновили цей спецсимвол)

let tabulation = "Привіт\n\tяк справи ?\n\t\tяк тебе звати?"

// console.log(tabulation);


// 3)Зворотній слеш \,всередині рядка інколи необхідно показати зворотній слеш як символ,тоді використовуємо два рази \\

let slashTwo = "Привіт\\Як справи ?\\Як тебе звати?"
// console.log(slashTwo);//   Привіт\Як справи ?\Як тебе звати?

// 4) Лапки \' \"

let quotes = "\'Привіт\' \'Як справи ?\' \'Як тебе звати?\'"
// console.log(quotes);//      'Привіт' 'Як справи ?' 'Як тебе звати?'

// 5)Іконки,символи UTF-16 \ uКОД, UTF-32 \ u{КОД}

let icon = "Я тебе люблю! \u00A9 \u{1F60D}"
// console.log(icon);
// =================================================================


// Робота з рядками 

let len = 'Hello!'
// console.log(len.length);//6

// 1.Отримуємо символи з рядків
let text1 = 'Привіт!';

let firstSymbol = text1[0];
let lastSymbol = text1[text1.length - 1];
// console.log(firstSymbol);// П
// console.log(lastSymbol);// !

// for of - виведе всі символи рядка

for(const char of text1) {
    // console.log(char);
}

// 2.Зміна рядків
// Вибравши позицію символа ми не можемо його змінити 

let symbolChange = 'Привіт!'
symbolChange[2] = '3';
// console.log(symbolChange);

// 3.Зміна регістра рядка 

let textLowerandUpper = 'Привіт';

// console.log(textLowerandUpper.toLocaleLowerCase());//привіт
// console.log(textLowerandUpper.toUpperCase());//ПРИВІТ


// 4. Пошук підрядка 

// метод str.indexOf((subsrt, pos))

/**Він шукає підрядок substr в рядку str,починаючи з позиції pos,
 * і вертає позицію на якій находиться збіг,
 * в іншому випадку повертає -1
 */

let index = 'Привіт';

// console.log(index.indexOf('рив'));//1
// console.log(index.indexOf('рив', 3/**пошук йде з 3 індекса,такого немає тому -1 */));//-1


// методи includes,startsWith, endsWith

/**Більш сучасний метод str.includes(substr, pos) повертає true,а якщо немає 
 * шукаємого підрядка false
*/

let index2 = 'Привіт!';

// console.log(index2.includes('рив'));//1
// console.log(index2.includes('рив', 3/**пошук йде з 3 індекса,такого немає тому -1 */));//-1

// console.log(index2.startsWith('рив'));//1
// console.log(index2.endsWith('!'/**пошук йде з 3 індекса,такого немає тому -1 */));//-1

// Звертати увагу на регістр!!!

let text3 = 'Привіт!';
let searchText = 'пР';

// console.log(text3.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));//true


/**В результаті indexOf варто використовувати,коли нам потрібна позиція найденного підрядка.В усіх інших
 * випадках використовуємо includes
 */


/**Метод str.slice (start,[end]) - повертає частину рядка 
 * від start до end(не включаючи)
 */

let text4 = 'Привіт!';

// console.log(text4.slice(1,2));//р
// console.log(text4.slice(-2,-1/**Якщо мінус то з кінця ра*/));//т


// Порівняння рядків

// Порівняння рядків

// Порівняння строк за допомогою оператора > виконується за кодами ASCII символів.

// Алфавітний порядок
// console.log("A" > "Б");//false бо Б 2-гий в алфавіті,відповідно А не більше Б
// console.log("a" > "Б");менший регістр завжди більший,тому true

// Алфавітний порядок

console.log('Скрипт' > 'Скрипка');// true.


// Кількість символів 

console.log('Слайдер' > 'Слайд');//true

//Регистр

console.log('Фрилансер' > 'фрилансер');//false




// Алгоритм порівняння рядків:
// 1.Спочатку порівнюються перші символи рядків.
// 2.Якщо,перший символ першого рядка більше(менше),чим перший символ другого,
// то перший рядок більше(менше) другого.Порівняння завершено.
// 3.Якщо символи рівні ,то таким чином порівнюються вже другі символи рядків
// 4.Порівняння продовжується ,поки не завершиться один із рядків.
// 5.Якщо два рядка закінчуюються одночасно то вони рівні,інакше більший рядок вважається більшим.
// 1
let fls = "фрилансер";
let text5 = `Привет я ${fls}`;

console.log(text5);
// 2
let text6 = 'фрилансер';

console.log(text6.slice(5,6));
// 3

let num = 123 + '456'
console.log(num);//не правильно,відповідь 123456
// 4

console.log(text6.toLocaleUpperCase());
// 5
console.log(text6.substring(3,6));
// 6 false


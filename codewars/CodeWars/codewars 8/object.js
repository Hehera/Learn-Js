// Синтаксис

// створення об'єктів

let userInfo = new Object(); // синтаксис 'конструктор об'єкта'
let userInfo2 = {}; // синтаксис 'літерал об'єкта'

let firstPart = "just";

let userInfo3 = {
  // name - ключ ,kappa - значення
  name: "kappa",
  age: 20, //бажано висячу кому залишати як є бо їх можна міняти місцями тоді зручно
  javaScript: true,
  [firstPart]: true,
};
// console.log(userInfo3);
// console.log(userInfo3.age);
// console.log(userInfo3['name']);// можна так виводити
// console.log(userInfo3['javaScript','name']);// коли більше двох слів виводимо у квадратних дужках
// console.log(userInfo3[firstPart]);//true
// ========================
//Перевага квадратних дужок

let key = "name";
// console.log(userInfo3.key);//undefined
// console.log(userInfo3[key]);//kappa !!!

// =========================
/* В уроці про перемінні ми казали,що не можна використовувати спеціально зарезервовані слова let const if for і тд,
але імена властивойстей всередині об'єкта не підлягають під це правило*/

// let userInfo4 = {
//     let:'kappa',
//     for:20,
//     'javaScript': true,
//     [firstPart]:true,
// }

// ===============
let userInfo5 = {
  0: "kappa", //0 те саме що і рядок '0'
};

// console.log(userInfo5[0]);
// console.log(userInfo5["0"]);
// ======================

// Тип даних Symbol

let id = Symbol("id");
let userInfo6 = {
  0: "kappa", //0 те саме що і рядок '0'
  [id]: "loler",
};

// console.log(userInfo6);
// Основне застосування символів
// 1.Скриття властивостей об'єкта
// символьна властивість не появиться в for in
// 2.Використання системних символів
// Symbol.iterator, Symbol.toPrimitive і тд

// ================================

// Вкладеність

let userInfo7 = {
  0: "kappa", //0 те саме що і рядок '0'
  oneMoreObj: {
    street: "freedom",
    city: "Lviv",
  },
};
// console.log(userInfo7);
// console.log(userInfo7.oneMoreObj);
// console.log(userInfo7.oneMoreObj.street);
// =================================================

// Властивості із перемінной

function makeUserInfo(name, age) {
  return {
    name, //те саме що і name:name,
    age, //те саме що і age:age,
    javaScript: true, //інші властивості об'єкта
  };
}

let user = makeUserInfo("loler", 20);
// console.log(user);

// ===================================

// Зміна об'єктів(добавляння)

let userInfo8 = {
  name: "loler",
};

userInfo8.age = 30;
// console.log(userInfo8);//age 30

userInfo8["JavaScript"] = true;
// console.log(userInfo8);

userInfo8.adress = {
  street: "Freedom",
  city: "Lviv",
};

// console.log(userInfo8);

//Видалення властивостей

let userInfoDelete = {
  name: "loler",
  age: 20,
  JavaScript: true, //бажано писати без коми останній елемент бо порядок виводу може зупинитись,якщо доставити кому
};

delete userInfoDelete.age;
// console.log(userInfoDelete);

delete userInfoDelete["JavaScript"];
// console.log(userInfoDelete);

//Зміна властивойстей

let userInfoChange = {
  name: "loler",
  age: 20,
  JavaScript: true, //бажано писати без коми останній елемент бо порядок виводу може змінитись,якщо доставити кому
};

userInfoChange.age = 18;

// console.log(userInfoChange);

// Змінювати властивості всередині об'єкта можна навіть в const !!!!

const userInfo11 = {
  name: "loler",
  age: 20,
  JavaScript: true,
};

userInfo11.age = 19;
// console.log(userInfo11);//19

// ===============================

// Копіювання об'єктів

// При копіюванні іншого об'єкта в іншу перемінну,сам об'єкт не дублюється ,а копіюється лише посилання на нього !!!

const userInfoCopy = {
  name: "loler",
  age: 20,
  JavaScript: true, 
};

let user1 = userInfoCopy;

user1.age = 18;
//   console.log(user1);


//Отже,неважливо яким ключем ми відкриваємо об'єкт,сам об'єкт залишається тим же об'єктом

//   ============================================

// Дублювання об'єктів Object.assign()

const userInfoDuplicate = {
  name: "loler",
  age: 20,
  JavaScript: true, 
};

let user2 = Object.assign({}, userInfoDuplicate);

user2.age = 19;

//   console.log(user2);

//Зміна об'єкта за допомогою Object.assign() добавляння

Object.assign(userInfoDuplicate, { city: "London", ["JavaScript"]: true });
// console.log(userInfoDuplicate);

//Перевірка існування властивості

const userInfoExist = {
  name: "loler",
  // age: 20,
  JavaScript: true, 
};

if (userInfoExist.age) {
  //false не виведеться в консоль  or true виведеться
  // console.log(userInfoExist.age);
}

//   Опціональний ланцюжок
//Оператор 'in' за допомогою оператора 'in' зможемо перевірити наявність даної властивості в об'єкті 
let userInfoObj = {
  name: "loler",
  age: 20,
  JavaScript: true,

  //   adress: {
  //     city: "Lviv",
  //     street: "Freedom",
  //   },
};
// console.log(userInfoObj.adress.city);//Cannot read properties of undefined (reading 'city')
//                                   буде помилка якщо не буде об'єкта adress

// за допомого оператора '?' ми можемо це написати і замість помилки оримаємо underfined
// console.log(userInfoObj?.adress?.city);//undefined

//Оператор 'in' за допомогою оператора 'in' зможемо перевірити наявність даної властивості в об'єкті

let userInfoObjCheck = {
  name: "loler",
  age: 20,
  JavaScript: true,

  adress: {
    city: "Lviv",
    street: "Freedom",
  },
};

if ("name" in userInfoObjCheck) {
  // console.log(userInfoObjCheck.name);
}

// В більшості випадків спрацьовує порівняння  underfined
// або опціональний ланцюжок ?.
// Але є особливі випадки,коли властивість існує,але містить значення underfined,в цьому випадку юзаєм 'in'

let userInfoUnderfined = {
  name: undefined,
  //наступні властивості
};

// if(userInfoUnderfined.name) {//false - не виведеться,але такий оператор існує тому робимо перевірку,яка нижче
// console.log(userInfoUnderfined.name);
// }

if ("name" in userInfoUnderfined) {
  // console.log(userInfoUnderfined.name);//undefined
}
// =========================================

// for in - використовується для перебора всіх властивойстей об'єкта

let userInfoObject = {
  name: "loler",
  age: 20,
  JavaScript: true,

  adress: {
    city: "Lviv",
    street: "Freedom",
  },
};

for (let key /**змінна */ in userInfoObject) {
  // ключі
  // console.log(key);//name age JavaScript adress
  //значення ключів
  // console.log(userInfoObject[key]);
}

for (let key in userInfoObject.adress) {
  // console.log(key);
  // console.log(userInfoObject.adress[key]);
}

// Методи об'єкта

// в якості методів об'єкта можуть бути і функції

let userInfoObjectMethod = {
  name: "loler",
  age: 20,
  JavaScript: true,

  adress: {
    city: "Lviv",
    street: "Freedom",
  },
  showInfo() {
    // console.log(`${userInfoObjectMethod.name}, ${userInfoObjectMethod.age} років, Адреса: м. ${userInfoObjectMethod.adress.city} ,вулиця ${userInfoObjectMethod.adress.street}`)

   //Використання this
    // console.log((`${this.name}, ${this.age} років, Адреса: м. ${this.adress.city} ,вулиця ${this.adress.street}`));  
// 
  },
};
// userInfoObjectMethod.showInfo();


// Ex.2 Ми створили функцію і вложили туди ще одну 

let userInfoObjectMethod2 = {
    name: "loler",
    age: 20,
    JavaScript: true,
  
    adress: {
      city: "Lviv",
      street: "Freedom",
    },
    showInfo() {
    //     function show(){
    //         console.log(`${this.name}, ${this.age} років, Адреса: м. ${this.adress.city} ,вулиця ${this.adress.street}`);
    //     }
    //   show();
    // let show = () =>  console.log(`${this.name}, ${this.age} років, Адреса: м. ${this.adress.city} ,вулиця ${this.adress.street}`);
    // show();
    },
  };
  userInfoObjectMethod2.showInfo();/*ошибка бо this звертається до вложеного першого батьківсього об'єкта,так як у нас ще одна додаткова 
  вложеність show() і this звертається до showInfo() де немає name age.. Але Якщо використати стрілочну функцію тоді все спрацює тобто ми
   в змінну show присвоюємо стрілочну функцію і тоді для неї вложеності не існує,а посилається вона на батьківський об'єкт*/

//Приклад переваги this



let userInfoObjectThisBenefits = {
    name: "loler",
    age: 20,
    JavaScript: true,
  
    adress: {
      city: "Lviv",
      street: "Freedom",
    },
    showInfo() {
            // console.log(`${userInfoObjectThisBenefits.name}, ${userInfoObjectThisBenefits.age} років, Адреса: м. ${userInfoObjectThisBenefits.adress.city} ,вулиця ${userInfoObjectThisBenefits.adress.street}`)
            // console.log(`${this.name}, ${this.age} років, Адреса: м. ${this.adress.city} ,вулиця ${this.adress.street}`);
    },
  };
  userInfoObjectThisBenefits.showInfo();


  let copy = userInfoObjectThisBenefits;
  userInfoObjectThisBenefits = null;//обнулили
  copy.showInfo(); // не спрацює,бо перед тим ми обнулили об'єкт тому краще юзати this

// ========================
/**Зазвчичай синтаксис створення об'єкта дозволяє створити тільки один об'єкт,але часто нам потрібно створити 
 * багато однотипних об'єктів,таких як користувачі ,елементи меню і тд...
 * Це можна зробити за допомогою функції-конструктора і оператора 'new'
 */
/* Функція-конструктори - це звичайні функції,але є 2 правила :
 1)Ім'я функції з великої букви
 2)Фукнкція-конструктор має викликатися за допомогою оператора 'new'*/
 

function UserInfo (name){
    // this {} -  створюється пустий об'єкт
    this.name = name;
    this.age = 30;

    // return this ми це не пишемо,але нам вертається об'єкт
}

// console.log(new UserInfo('loler'));
// console.log(new UserInfo('loler-02'));
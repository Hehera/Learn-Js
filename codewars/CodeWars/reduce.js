let arr = [2, 3, 22];
let maxValue = arr[0];//2,3,22
let c = 1;//2,3 і цикл завершився

while (c < arr.length) {
  if (arr[c] > maxValue) {
    maxValue = arr[c];
  }
  c++;
}
// console.log(maxValue);//22 найбільше число

// ===========================================

// let red = arr.reduce((max, item) => {
//   if (max < item) {
//     return item;
//   } else {
//     return max;
//   }
// });
// console.log(red);

// ===========================================

// let c = a[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > c) {
//     c = arr[i];
//   }
// }
// console.log(c);

// ===============================================

// Знайти найбільший індекс в масиві

// с = a[0];
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > c) {
//     c = arr[i];
//     index = i;
//   }
// }
// // console.log(index);

// let r = arr.reduce((accum,item,index) =>{
//     if(item > accum[1]/**a[0] */){
//         return [index,item]
//     } else {
//         return prev
//     }
// },[0,a[0]])
// // 0 - індекс ,a[0] - значення під індексом 1

// ==========================================================

// склеїти в одномірний масив

// let data = [
//   [1, 2, 3],
//   [3, 1, 1],
//   [2, 3, 4],
// ];

// let flat = data.reduce((accum, item) => {
//   return accum.concat(item);
// }, []);
// console.log(fl);
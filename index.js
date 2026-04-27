// // 文字列型の変数
// const str = "Hello World2222222!!";
// console.log(str);

// // 数字型の変数
// const num = 1234;
// console.log(num);

// // 真偽値型の変数
// const bool = false;
// console.log(bool);

// // 文字列型の連結
// const hoge = "ほげ";
// const fuga= "ふが";
// console.log(hoge + fuga);

// // 文字列型の連結2(よく使う)
// const sei = "竹内";
// const mei = "甫";
// const aisatsu = `おかえりなさい！ ${sei} ${mei} さん`;
// console.log(aisatsu);


// // 数字型配列の定義
// const arrayNum = [1,2,3];
// console.log(arrayNum[0]);
// console.log(arrayNum[1]);
// console.log(arrayNum[2]);

// arrayNum.push(4);
// console.log(arrayNum[3]);

// // 文字列型配列の定義
// const arrayStr = ["りんご","ごりら","らっぱ"];
// console.log(arrayStr[0]);
// console.log(arrayStr[1]);
// console.log(arrayStr[2]);
// console.log(arrayStr);
// console.log(arrayStr.length);

// arrayStr.push("ぱせり");
// console.log(arrayStr[3]);

// // オブジェクト型(連想配列)
// const obj = {
//   name: "田中 太郎",
//   age: 25,
//   email: "tarou@example.com",
// };
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.email);
// console.log(obj);

// // 条件分岐
// const num = 2;
// if (num == 2) {
//   console.log("num は２です。");
// } else {
//   console.log("num は2ではない数値です。");
// }

// // if, else if
// const num = 1;
// if (num == 1) {
//   console.log("num は1です。");
// } else if (num == 2) {
//   console.log("num は２です。");
// } else {
//   console.log("num は2ではない数値です。");
// }

// const num = 5;
// if (num >= 5) {
//   console.log("条件を満たしましたよ！")
// }

// // 複数条件
// const str1 = "ほげほげ";
// const str2 = "ふがふがｓ";

// if (str1 == "ほげほげ") {
//   console.log("str1は ほげほげです。");
// }
// if (str2 == "ふがふが") {
//   console.log("str2は ふがふがです。");
// }

// // && 演算子 AND
// if (str1 == "ほげほげ" && str2 == "ふがふが") {
//   console.log("str1は ほげほげ かつ str2は ふがふがです。");
// }

// // || 演算子 OR
// if (str1 == "ほげほげ" || str2 == "ふがふが") {
//   console.log("str1は ほげほげ もしくは、 str2は ふがふがです。");
// }


// const city = "岡山";

// switch (city) {
//   case "東京都":
//     console.log("tokyo");
//     break;
//   case "大阪":
//     console.log("oosaka");
//     break;
//   case "神奈川":
//     console.log("kanagawa"); 
//     break;
//   default:
//     console.log("知らない県です");
//     break;
// }

// 繰り返し処理
// for (let i = 0; i < 9; i++) {
//   const foo = i * 2;
//   console.log(foo);
// }

// const numRange = [1, 2, 3, 4, 5];

// for (let i = 0; i < numRange.length; i++) {
//   const value = numRange[i];
//   console.log(value);
// }

// for (const num of numRange) {
//   console.log(num);
// }

// const newNumRange = [];
// for (const num of numRange) {
//   newNumRange.push(num * 2);
// }
// console.log(newNumRange);

// const foo = numRange.map((num) => {
//   return num * 2;
// });

// console.log(foo);


// 関数
// function sampleFunc() {
//   const str = "sample";
//   console.log(str);
// }
// const sampleArrow1 = () => {
//   const str = "sample";
//   console.log(str);
// }
// sampleArrow1();

// 引数あり
// function sampleFunc2(num, num2, num3) {
//   const result = num + num2 + num3;
//   console.log(result);
// }
// sampleFunc2(3, 4, 5);
// const sampleArrow2 = (num, num2, num3) => {
//   const result = num + num2 + num3;
//   console.log(result);
// }
// sampleArrow2(3,4,5);

// 引数あり & 返り値あり
function sampleFunc3(num1, num2) {
  const result = num1 * num2;
  return result;
}
const res = sampleFunc3(2, 4);
console.log(res);
// const sampleArrow3 = (num1, num2) => {
//   const result = num1 * num2;
//   return result;
// }
// const res = sampleArrow3(2, 4);
// console.log(res);


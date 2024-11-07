// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
const str = "aaabbbbcddaadddyyyy";

// 출력
// a3b4c1d4

// my code
const arr = str.split("");
let resultStr = "";
let prevChar = arr[0];
let count = 1;
for (let i = 1; i < arr.length; i++) {
  const curChar = arr[i];
  if (curChar !== prevChar) {
    // 다른 문자가 출현했다면 prevChar와 count를 저장
    resultStr += prevChar + count.toString();
    count = 1;
  } else {
    // 같은 문자가 출현했다면 count만 증가시킴
    count += 1;
  }
  prevChar = curChar;
}
// 가장 마지막 char와 count를 저장
resultStr += prevChar + count.toString();

console.log(resultStr);

// answer
let result_s = "";
let store_s = user_s[0];
// let count = 0;

for (let i of user_s) {
  if (i === store_s) {
    count += 1;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);

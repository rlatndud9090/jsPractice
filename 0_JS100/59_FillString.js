// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

// 입력
// hi

// 출력
// ========================hi========================

// my code
// const str = prompt("텍스트를 입력하세요").slice(50);
const str = "helloyesy";
const leftStr = "=".repeat(Math.floor((50 - str.length) / 2));
const rightStr = "=".repeat(
  50 - str.length - Math.floor((50 - str.length) / 2)
);

const fillStr = leftStr + str + rightStr;

console.log(fillStr);

// answer
const n = 25 + parseInt(str.length / 2, 10);

//왼쪽부터 채우기
const a = str.padStart(n, "=");

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, "="));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움

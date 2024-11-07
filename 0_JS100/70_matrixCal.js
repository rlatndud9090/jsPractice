// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력;
const input1 = [
  [1, 2],
  [2, 6],
];

const input2 = [
  [1, 0],
  [0, 3],
];

// 출력[
//      [7, 12],
//      [14, 24],
//    ];

// my code
const matrixMul = (a, b) => {
  if (a[0].length !== b.length) {
    return "-1";
  }
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const aSubArr = a[i];
    const resultSubArr = [];
    for (let j = 0; j < b[0].length; j++) {
      let resultVal = 0;
      for (let k = 0; k < a[i].length; k++) {
        resultVal += a[i][k] * b[k][j];
      }
      resultSubArr.push(resultVal);
    }
    result.push(resultSubArr);
  }
  return result;
};

console.log(matrixMul(input1, input2));

// answer
function solution(a, b) {
  let c = [];
  const len = a[0].length;

  if (len === b.length) {
    for (let i = 0; i < len; i++) {
      let row = [];
      for (let j = 0; j < len; j++) {
        let x = 0;
        for (let k = 0; k < len; k++) {
          x += a[i][k] * b[k][j];
        }
        row.push(x);
      }
      c.push(row);
    }
    return c;
  } else {
    return -1;
  }
}

// gpt
const matrixMulGpt = (a, b) => {
  if (a[0].length !== b.length) return "-1"; // a의 열 개수와 b의 행 개수가 같아야 함

  return a.map((row) =>
    b[0].map((_, colIndex) =>
      row.reduce((sum, elem, rowIndex) => sum + elem * b[rowIndex][colIndex], 0)
    )
  );
};

console.log(solution(input1, input2));

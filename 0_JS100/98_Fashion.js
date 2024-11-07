// 패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
// 청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다.
// 이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

//     1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
//          ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
//     2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
//     3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
//          ex) 출력은 [3,1,4,2]입니다.

// 입출력예시

// 입력
// const inputStr = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";

// 출력
// [4, 2, 3, 1]

// 입력
const inputStr = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";

// 출력
// [3, 1, 4, 2]

const inputArr = inputStr.split(" ");

const result = new Set();
for (let i = 1; i < inputArr.length; i += 2) {
  const fashionStr = inputArr[i];
  fashionStr.split(",").forEach((ch) => {
    const num = parseInt(ch);
    if (!result.has(num)) {
      result.add(num);
    }
  });
}

console.log([...result]);

// answer
function solution(i) {
  //먼저 번호로 자릅니다.
  let idx = i.split(/[0-9]번: /g);

  //잘라낸 문자열의 첫번째 요소 ""를 없애줍니다.
  idx.shift();

  for (let i = 0; i < idx.length; i++) {
    //공백을 없애주고 ',' 단위로 잘라줍니다.
    idx[i] = idx[i].replace(/ /g, "").split(",");

    for (let j = 0; j < idx[i].length; j++) {
      idx[i][j] = parseInt(idx[i][j], 10);
    }
  }

  let answer = [];

  //기록된 번호 순서대로 값이 중복 되지 않게 answer에 넣어줍니다.
  for (let i of idx) {
    for (let j of i) {
      if (!answer.includes(j)) {
        answer.push(j);
      }
    }
  }

  return answer;
}

let i = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
console.log(solution(i));

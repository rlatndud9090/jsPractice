// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
// 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
// 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
// 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

// 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.
// 입력
const inputNum = 156;

// 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]

// my code
let i = 0;
while (true) {
  const maxShake = (i * (i - 1)) / 2;
  if (maxShake > inputNum) {
    const minkyuShake = i - 1 - (maxShake - inputNum);
    if (minkyuShake < i) {
      console.log([minkyuShake, i]);
      break;
    }
  }
  i += 1;
}

//answer
function solution(n) {
  let 사람 = 0;
  let 총악수 = 0;
  let temp = 0;
  while (true) {
    총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
    if (n < 총악수) {
      break;
    }
    temp = 총악수;
    사람 += 1;
  }
  return [parseInt(n - temp, 10), 사람];
}

console.log(solution(inputNum));

// n 명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
// 각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다.
// 거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.

// 1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
// 2. 택배는 물류창고에서 출발합니다.
// 3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
// 4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
// 5. 택배를 상차할 때 시간은 걸리지 않습니다.

// 입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.

// ex) 배달원이 3명이고 각 거리가 [1,2,1,3,3,3]인 순서로 들어오는 경우
function solution(m, h) {
  //코드 작성
  let time = 0;
  let mans = new Array(m).fill(0);
  while (h.length) {
    // 배달중이지 않은 배달원에게 택배 할당하기
    for (let i = 0; i < mans.length; i++) {
      if (mans[i] === 0 && h.length) {
        mans[i] += h.shift();
      }
    }

    // 1 hours later
    time += 1;
    mans = mans.map((n) => n - 1);
  }

  // 마지막 남아 있는 택배 시간까지 더하기
  time += Math.max.apply(null, mans);

  return time;
}

const man = 3;
const hours = [1, 2, 1, 3, 3, 3];

console.log(solution(man, hours));
// 출력값 = 5

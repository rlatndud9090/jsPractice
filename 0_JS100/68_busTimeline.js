// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

// 입력
const timeLine = ["12:30", "13:20", "14:13"];
const currentTimeStr = "12:40";

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

// my code
const timeStrToValue = (str) => {
  const arr = str.split(":");

  return parseInt(parseInt(arr[0]) * 60 + parseInt(arr[1]));
};
const currentTimeValue = timeStrToValue(currentTimeStr);
const resultArr = timeLine.map((time) => {
  const timeValue = timeStrToValue(time);
  if (timeValue < currentTimeValue) {
    return "지나갔습니다";
  } else {
    const timeDiff = parseInt(timeValue - currentTimeValue);
    const hourDiff = parseInt(timeDiff / 60);
    const minuteDiff = parseInt(timeDiff % 60);
    return (
      hourDiff.toString().padStart(2, "0") +
      "시간 " +
      minuteDiff.toString().padStart(2, "0") +
      "분"
    );
  }
});

console.log(resultArr);

//answer
function solution(버스시간, 기준시간) {
  let answer = [];
  기준시간 = 기준시간.split(":").map((n) => parseInt(n, 10));
  기준시간 = 기준시간[0] * 60 + 기준시간[1];

  for (let i in 버스시간) {
    let time = 버스시간[i].split(":").map((n) => parseInt(n, 10));
    time = time[0] * 60 + time[1];

    if (time < 기준시간) {
      answer.push("지나갔습니다");
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = (time - 기준시간) % 60;
      answer.push(
        String(시간).padStart(2, 0) + "시간 " + String(분).padStart(2, 0) + "분"
      );
    }
  }
  return answer;
}

console.log(solution(["12:30", "13:20", "14:13"], "12:40"));

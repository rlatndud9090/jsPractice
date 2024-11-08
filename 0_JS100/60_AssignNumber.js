// 새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

// 데이터
const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

// 출력
// 번호: 1, 이름: 강은지
// 번호: 2, 이름: 강채연
// 번호: 3, 이름: 권윤일
// 번호: 4, 이름: 김민호
// 번호: 5, 이름: 김유정
// 번호: 6, 이름: 김진이
// 번호: 7, 이름: 김채리
// 번호: 8, 이름: 박지호
// 번호: 9, 이름: 박현서
// 번호: 10, 이름: 최성훈
// 번호: 11, 이름: 한지호
// 번호: 12, 이름: 홍유진

// my code
const studentsMap = new Map(
  students.sort().map((value, index) => {
    return [index + 1, value];
  })
);

for (let students of studentsMap) {
  console.log("번호: ", students[0], "이름: ", students[1]);
}

// answer
students.sort();

for (let key in students) {
  console.log(`번호: ${parseInt(key, 10) + 1}, 이름: ${students[key]}`);
}

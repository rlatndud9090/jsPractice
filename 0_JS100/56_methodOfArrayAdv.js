// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// 데이터
const nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

// 출력
// England 22023

const findCountry = (obj) => {
  const sortedNationArr = Object.entries(nationWidth).sort((a, b)=> a[1] - b[1]);
  
  const koreaIndex = sortedNationArr.indexOf(['korea', 220877]);
  
  const nextCountry = koreaIndex === sortedNationArr.length - 1 ? null : sortedNationArr[koreaIndex + 1];
  const prevCountry = koreaIndex === 0 ? null : sortedNationArr[koreaIndex -1];
  
  if (nextCountry === null) {
    console.log(prevCountry[0], ' ', prevCountry[1].toString());
    return;
  }
  if (prevCountry === null) {
    console.log(nextCountry[0], ' ', nextCountry[1].toString());
    return; 
  }
  if (nextCountry[1] > prevCountry[1]) {
    console.log(prevCountry[0], ' ', prevCountry[1].toString());
    return; 
  }else {
    console.log(nextCountry[0], ' ', nextCountry[1].toString());
    return; 
  }
}

// answer
const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//gap에 최댓값 저장
let gap = Math.max.apply(null, values); // Math.max는 배열을 받지 않으나, apply를 사용하면 values 배열을 전달해서 그 중 최대값을 찾을 수 있음
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);
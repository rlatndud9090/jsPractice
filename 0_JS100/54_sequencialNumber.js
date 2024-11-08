// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

const inputArr = '1 3 6 4 5'.split(' ').map(n => parseInt(n, 10));

const checkSequencial = arr => {
  if (!arr.length) {
    return 'NO;'
  }
  const sortedArr = arr.sort((a, b) => a-b);
  let prevNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num - prevNum !== 1) {
      return 'NO';
    }
    prevNum = num;
  }
  return 'YES';
}

console.log(checkSequencial(inputArr));


// answer
function sol(l){
  l.sort((a,b) => {
    return a-b;
  });

  for (let i=0; i<l.length-1; i++){
    if(l[i]+1 !== l[i+1]){
      return 'NO';
    }
  }
  return 'YES';
}

// const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

// console.log(sol(n));
// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

// my code
function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(arr[i] < pivot){ // my code
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right)); // my code: 그냥 pivot으로 해도 동작
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));
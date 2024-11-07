const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = ["a", "b", "c", "d", "e", "f", "g", "h"];
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

// my code
const result = a.map((value, index) => {
  return index % 2 === 0 ? [value, b[index]] : [b[index], value];
});

console.log(result);

// answer
// 방법 1 - forEach 사용
let c = [];

a.forEach(function (e, i) {
  if (i % 2 === 0) {
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});

console.log(c);

// 방법 2 - map 사용
let c2 = a.map(function (e, i) {
  if (i % 2 === 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});

console.log(c2);

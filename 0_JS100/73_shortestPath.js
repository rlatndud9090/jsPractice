// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터;
const inputGraph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// 입력
const inputStart = "C";
const inputEnd = "E";

// 출력
// 2
const findByBFS = (graph, start, end) => {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const node = queue.shift();
    if (node[0] === end) {
      return node[1];
    }
    if (!visited.has(node[0])) {
      visited.add(node[0]);
      graph[node[0]]
        .filter((next) => !visited.has(next))
        .forEach((next) => queue.push([next, node[1] + 1]));
    }
  }

  return -1;
};

console.log(findByBFS(inputGraph, inputStart, inputEnd));

// answer

let queue = [inputStart];
let visited = [inputStart];

function solution() {
  let count = -1;

  while (queue.length !== 0) {
    count += 1;

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
      if (node == inputEnd) {
        return count;
      }

      for (let next_node in inputGraph[node]) {
        if (!visited.includes(inputGraph[node][next_node])) {
          visited.push(inputGraph[node][next_node]);
          queue.push(inputGraph[node][next_node]);
        }
      }
    }
  }
}
console.log(solution());

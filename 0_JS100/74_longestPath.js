// 다음과 같이 노드의 연결 관계가 주어집니다.
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다.
// 우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
const inputGraph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

// 입력
const inputStart = 1;
const inputEnd = 7;

// 출력
// 6

// my code
const longestPathDFS = (graph, start, end) => {
  const visited = new Set();

  const dfs = (node, distance) => {
    if (node === end) return distance;

    visited.add(node);
    let maxDistance = distance;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        maxDistance = Math.max(maxDistance, dfs(neighbor, distance + 1));
      }
    }

    visited.delete(node);
    return maxDistance;
  };

  return dfs(start, 0);
};

console.log(longestPathDFS(inputGraph, inputStart, inputEnd));

// answer
// let queue = [start];
// let visited = [];

// function sol(n, visited) {
//   let node = n[n.length - 1];
//   let length = 0;

//   if (node == end) {
//     return visited.length;
//   }

//   if (visited.includes(node)) {
//     return visited.length;
//   } else {
//     visited.push(node);
//   }
//   let max = [];

//   for (let next_node in graph[node]) {
//     n.push(graph[node][next_node]);

//     max.push(length, sol(n, visited));
//     length = Math.max.apply(null, max);

//     queue.pop();
//   }
//   return length;
// }

// console.log(sol(queue, visited));

// 가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

// 예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

// 이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

// 입력
const str1_1 = "THISISSTRINGS";
const str1_2 = "THISIS";

// 출력
// 6

const str2_1 = "THISISSTRINGS";
const str2_2 = "TATHISISKKQQAEW";

// 출력
// 6

const str3_1 = "THISISSTRINGS";
const str3_2 = "KIOTHIKESSISKKQQAEW";

// 출력
// 3

const str4_1 = "THISISSTRINGS";
const str4_2 = "TKHKIKSIS";

// 출력
// 3

const findLCS = (str1, str2) => {
  const firstArr = str1.split("");
  const secondArr = str2.split("");
  const dp = Array.from({ length: firstArr.length + 1 }, () =>
    Array(secondArr.length + 1).fill(0)
  );
  let maxValue = 0;
  for (let i = 1; i < firstArr.length + 1; i++) {
    for (let j = 1; j < secondArr.length + 1; j++) {
      if (firstArr[i - 1] === secondArr[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxValue = Math.max(maxValue, dp[i][j]);
      }
    }
  }

  console.log(maxValue);
};

findLCS(str1_1, str1_2);
findLCS(str2_1, str2_2);
findLCS(str3_1, str3_2);
findLCS(str4_1, str4_2);

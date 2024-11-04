let target = document.querySelector('#dynamic');

// 랜덤한 String을 뽑아서 한 글자씩 배열로 반환하는 함수
function randomString() {
  let stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to Javascript', 'Learn to Python', 'Learn to Ruby'];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

// 한번의 타이핑이 끝나면 text를 지우고 다른 String을 생성하여 처음부터 다시 타이핑 시작하는 함수
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

// string을 한 글자씩 담은 배열을 일정 간격으로 순서대로 p tag의 textContent로 추가하는 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    // randomArr에 글자가 남아있다면, shift를 통해 한 글자를 뽑아 textContent에 추가
    target.textContent += randomArr.shift();
    setTimeout(function() { // 80ms 간격으로 동작을 반복함
      dynamic(randomArr);
    }, 80);
  } else {
    // randomArr가 비었을 때, resetTyping을 호출
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// 커서 깜빡임 함수
function blink() {
  target.classList.toggle('active');
}
setInterval(blink, 500);
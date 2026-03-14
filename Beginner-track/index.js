function countLength(string) {
  return string.length;
}

// countLength 함수에 '사과'를 전달하고 반환된 값을 appleCount 변수에 할당
let appleCount = countLength('사과');

// appleCount에 할당된 값 출력
console.log(appleCount); // 2

// countLength 함수에 '바나나'를 전달하고 반환된 값을 bananaCount 변수에 할당
let bananaCount = countLength('바나나');

// bananaCount에 할당된 값 출력
console.log(bananaCount); // 3

// appleCount에 할당된 숫자 2와 bananaCount에 할당된 숫자 3을 더한 값을 출력
console.log(appleCount + bananaCount); // 5

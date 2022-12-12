// 최대 차이
// N개의 +, -로 이루어진 수식이 들어있을 떄, 괄호를 적절하게 쳐서 값이 최소가 되도록
// 값이 최소가 되려면 => -가 들어오기 전까지는 계속 더하다가 -가 들어오면 빼는 식으로 로직

const input = ["55-50+40", "10+20+30+40", "9-9", "1-1-1"];

input.forEach((calc) => {
  let arr = calc.split("-").map(
    (el) =>
      el
        .split("+")
        .map((num) => Number(num))
        .reduce((sum, val) => sum + val),
    0
  ); // - 기준으로 분리

  // 첫번째 원소에서 나머지 원소를 모두 뺀다.
  // 첫번째 원소 * 2를 한 이유는 reduce에서 첫 번째 원소를 빼기 위함
  arr = arr[0] * 2 - arr.reduce((sum, val) => sum + val, 0);
  console.log(arr);
});

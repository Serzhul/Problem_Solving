/** 1에서 100까지 숫자를 출력하는 프로그램을 만들어라.
 * 숫자가 3으로 나누어떨어지면 그 숫자 대신 Fizz를, 5로 나누어 떨어지면 Buzz를
 * 3과 5 모두로 나누어 떨어지면 그 숫자 대신 FizzBuzz를 출력한다.
 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz();

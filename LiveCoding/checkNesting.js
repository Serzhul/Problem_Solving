/** 왼쪽과 오른쪽 괄호 문자가  포함된 문자열이 주어졌다. 괄호가 제대로 중첩되어 있는지 판단하는 코드를 작성하라.
 *  예를 들어 (()) 와 ()()에서는 괄호가 제대로 중첩되어 있지만 (()() 나 )( 에서는 그렇지 않다.
 * */

function checkNesting(brackets) {
  let count = 0;

  for (let i = 0; i < brackets.length; i += 1) {
    const cur = brackets[i];

    if (cur === "(") count += 1;
    else if (cur === ")") {
      count -= 1;
      if (count < 0) return false; // 만약 count가 음수가 되면 그 시점에서 이미 제대로 중첩되어 있지 않다는 의미이므로 false를 반환한다.
    }
  }

  return count === 0;
}

console.log(checkNesting(")("));

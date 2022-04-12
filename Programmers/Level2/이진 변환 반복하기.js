function solution(s) {
  const answer = [0, 0];

  function toBinary(str) {
    if (str === "1") return;

    const delZero = [...str].filter((char) => char !== "0");

    answer[0] += 1;
    answer[1] += str.length - delZero.length;

    toBinary(delZero.length.toString(2));
  }

  toBinary(s);

  return answer;
}
solution("110010101001");

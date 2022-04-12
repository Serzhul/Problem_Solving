function solution(s) {
  const arr = s.split(" ").map((char) => Number(char));

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

solution("1 2 3 4");

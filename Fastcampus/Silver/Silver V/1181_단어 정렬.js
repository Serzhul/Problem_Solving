const solution = (input) => {
  const [N, ...words] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el;
    });

  let answer = "";

  words.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });

  let lastWord = "";

  words.forEach((word) => {
    if (lastWord === word) return;
    lastWord = word;
    answer += `${word}\n`;
  });

  console.log(answer);
};

solution(`13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`);

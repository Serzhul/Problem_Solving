var reorderLogFiles = function (logs) {
  const letter_logs = [];
  const digit_logs = [];
  logs.forEach((log) => {
    if (/ \d/.test(log)) {
      digit_logs.push(log);
    } else {
      letter_logs.push(log);
    }
  });

  letter_logs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(" ") + 1);
    const bBody = b.slice(b.indexOf(" ") + 1);

    const c = aBody.localeCompare(bBody);
    if (c) return c;
    return a.localeCompare(b);
  });
  return [...letter_logs, ...digit_logs];
};

console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);

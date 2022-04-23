const reverseWords = (s) =>
  s
    .split(" ")
    .map((splitted) => [...splitted].reverse().join(""))
    .join(" ");

reverseWords("Let's take LeetCode contest");

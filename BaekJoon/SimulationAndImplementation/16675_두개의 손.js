const solution = (input) => {
  let [ML, MR, TL, TR] = input
    .toString()
    .trim()
    .split(" ")
    .map((el) => "SPR".indexOf(el));

  if (ML === MR && [TL, TR].includes((ML + 2) % 3)) {
    console.log("TK");
  } else if (TL === TR && [ML, MR].includes((TL + 2) % 3)) {
    console.log("MS");
  } else {
    console.log("?");
  }
};

solution(`R R S S`);

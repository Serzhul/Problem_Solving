const subtractProductAndSum = (n) => {
  const stringNum = String(n);

  return (
    [...stringNum].reduce((acc, cur) => acc * Number(cur), 1) -
    [...stringNum].reduce((acc, cur) => acc + Number(cur), 0)
  );
};

console.log(subtractProductAndSum(234));

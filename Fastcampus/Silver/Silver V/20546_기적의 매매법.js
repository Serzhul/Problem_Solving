const solution = (input) => {
  const [cash, prices] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let jun = [cash, 0, 0]; // 현재 현금보유량, 현재 주식 보유량, 수익
  let sung = [cash, 0, 0];

  let upCount = 0;
  let downCount = 0;
  let lastPrice = 0;

  for (let i = 0; i < prices.length; i += 1) {
    const curPrice = prices[i];

    if (curPrice > lastPrice) {
      upCount += 1;
      downCount = 0;
    } else if (curPrice < lastPrice) {
      upCount = 0;
      downCount += 1;
    }

    lastPrice = curPrice;

    if (jun[0] >= curPrice) {
      const stockNum = Math.floor(jun[0] / curPrice);
      jun[0] -= stockNum * curPrice;
      jun[1] += stockNum;
    }

    if (upCount >= 3) {
      sung[0] += sung[1] * curPrice;
      sung[1] = 0;
      sung[2] += sung[1] * curPrice;
    } else if (downCount >= 3) {
      const stockNum = Math.floor(sung[0] / curPrice);
      sung[0] -= stockNum * curPrice;
      sung[1] += stockNum;
    }
  }

  const junResult = jun[0] + jun[1] * prices.at(-1);
  const sungResult = sung[0] + sung[1] * prices.at(-1) + sung[2];

  if (junResult > sungResult) {
    console.log("BNP");
  } else if (sungResult > junResult) {
    console.log("TIMING");
  } else {
    console.log("SAMESAME");
  }
};

solution(`15
20 20 33 98 15 6 4 1 1 1 2 3 6 14`);

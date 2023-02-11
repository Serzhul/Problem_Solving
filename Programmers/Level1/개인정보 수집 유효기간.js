const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

// Solution 1 : year, month, date를 구분해서 생각
// function solution(today, terms, privacies) {
//   const res = [];
//   const [todayYear, todayMonth, todayDay] = today
//     .split(".")
//     .map((date) => Number(date));

//   const termsMap = {};

//   terms.forEach((term) => {
//     const [termType, validation] = term.split(" ");
//     termsMap[termType] = Number(validation);
//   });

//   for (let i = 0; i < privacies.length; i += 1) {
//     const [privacy, type] = privacies[i].split(" ");
//     const [privacyYear, privacyMonth, privacyDay] = privacy
//       .split(".")
//       .map((el) => Number(el));

//     let [validateYear, validateMonth, validateDay] = [0, 0, privacyDay];

//     const canSaveMonth = termsMap[type];

//     validateMonth = privacyMonth + canSaveMonth;

//     let yearCount = 0;

//     while (validateMonth > 12) {
//       validateMonth -= 12;
//       yearCount += 1;
//     }

//     validateYear = privacyYear + yearCount;

//     if (validateMonth > 12) {
//       validateYear += 1;
//       validateMonth -= 12;
//     }

//     if (privacyDay === 1) {
//       validateMonth -= 1;
//       validateDay = 28;
//     } else validateDay = privacyDay - 1;

//     if (todayYear > validateYear) {
//       res.push(i + 1);
//     } else if (todayYear === validateYear) {
//       if (todayMonth > validateMonth) res.push(i + 1);
//       else if (todayMonth === validateMonth) {
//         if (todayDay > validateDay) res.push(i + 1);
//       }
//     }
//   }

//   return res;
// }

// Solution 2 : year, month, date를 더해서 하나의 숫자로 계산
function solution(today, terms, privacies) {
  const res = [];
  const [year, month, day] = today.split(".").map((date) => Number(date));
  const dates = year * 12 * 28 + month * 28 + day;

  const termsMap = {};

  terms.forEach((term) => {
    const [type, validMonth] = term.split(" ");

    termsMap[type] = Number(validMonth);
  });

  privacies.forEach((privacy, idx) => {
    let [day, term] = privacy.split(" ");
    const [pYear, pMonth, pDay] = day.split(".").map(Number);

    const privacyDates =
      pYear * 12 * 28 + pMonth * 28 + pDay + termsMap[term] * 28;

    if (privacyDates <= dates) res.push(idx + 1);
  });

  return res;
}

console.log(solution(today, terms, privacies));

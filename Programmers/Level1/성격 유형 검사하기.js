const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  let answer = "";

  const indices = ["RT", "CF", "JM", "AN"];

  const surveyMap = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i += 1) {
    const [disagree, agree] = survey[i].split("");
    const choice = choices[i];

    if (choice <= 3) surveyMap[disagree] += 4 - choice;
    else if (choice >= 5) surveyMap[agree] += choice - 4;
  }

  for (let i = 0; i < indices.length; i += 1) {
    const [type1, type2] = indices[i].split("").sort((a, b) => a - b);

    if (surveyMap[type1] === surveyMap[type2]) answer += type1;
    else answer += surveyMap[type1] > surveyMap[type2] ? type1 : type2;
  }

  return answer;
}

console.log(solution(survey, choices));

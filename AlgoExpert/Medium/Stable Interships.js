const interns = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 2, 0],
];

const teams = [
  [2, 1, 0],
  [0, 1, 2],
  [0, 1, 2],
];

function stableInternships(interns, teams) {
  const chosenInterns = {};
  const freeInterns = interns.map((_, i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);

  const teamMaps = teams.map((team) => {
    const map = {};
    team.forEach((pref, idx) => {
      map[pref] = idx;
    });

    return map;
  });

  while (freeInterns.length > 0) {
    const internNum = freeInterns.pop();

    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];

    currentInternChoices[internNum] += 1;

    if (!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }

    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamMaps[teamPreference][previousIntern];
    const currentInternRank = teamMaps[teamPreference][internNum];

    if (currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeInterns.push(internNum);
    }
  }

  const matches = Object.entries(chosenInterns).map(([teamNum, interNum]) => [
    interNum,
    parseInt(teamNum, 10),
  ]);

  return matches;
}

console.log(stableInternships(interns, teams));

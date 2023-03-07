const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  const bestAlbums = {};

  for (let i = 0; i < genres.length; i += 1) {
    if (!bestAlbums[genres[i]]) {
      bestAlbums[genres[i]] = [plays[i], {}];
      bestAlbums[genres[i]][1][i] = plays[i];
    } else {
      bestAlbums[genres[i]][0] += plays[i];
      bestAlbums[genres[i]][1][i] = plays[i];
    }
  }

  const albumsArr = Object.values(bestAlbums).sort((a, b) => {
    const [totalPlaysA, playsA] = a;
    const [totalPlaysB, playsB] = b;

    if (totalPlaysA > totalPlaysB) return -1;
    if (totalPlaysA < totalPlaysB) return 1;
    return 0;
  });

  const playsMap = albumsArr.flatMap((el) =>
    Object.entries(el[1])
      .sort((a, b) => {
        const [albumNumA, playsA] = a;
        const [albumNumB, playsB] = b;

        if (playsA < playsB) return 1;
        if (playsA > playsB) return -1;
        return 0;
      })
      .map((album) => Number(album[0]))
      .slice(0, 2)
  );

  return playsMap;
}

console.log(solution(genres, plays));

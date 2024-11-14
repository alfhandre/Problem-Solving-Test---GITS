const denseRanking = (scores, gitsScores) => {
  const uniqueScores = [];
  // hilangkan value yg sama
  for (let i = 0; i < scores.length; i++) {
    if (!uniqueScores.includes(scores[i])) {
      uniqueScores.push(scores[i]);
    }
  }

  const results = [];
  for (let i = 0; i < gitsScores.length; i++) {
    const score = gitsScores[i];
    let rank = 1;

    // peringkat yang sesuai dengan Dense Ranking
    while (rank <= uniqueScores.length && score < uniqueScores[rank - 1]) {
      rank++;
    }

    results.push(rank);
  }

  return results;
};

// input 1
const playerCount1 = 7;
const scores1 = [100, 100, 50, 40, 40, 20, 10];
const gamesCount1 = 4;
const gitsScores1 = [5, 25, 50, 120];
console.log(`output 1 : ${denseRanking(scores1, gitsScores1)}`);

// input 2
const playerCount2 = 7;
const scores2 = [120, 100, 100, 90, 85, 85, 60];
const gamesCount2 = 3;
const gitsScores2 = [50, 85, 130];
console.log(`output 2 : ${denseRanking(scores2, gitsScores2)}`);

// input 3
const playerCount3 = 5;
const scores3 = [200, 180, 160, 160, 150];
const gamesCount3 = 3;
const gitsScores3 = [120, 160, 210];
console.log(`output 3 : ${denseRanking(scores3, gitsScores3)}`);

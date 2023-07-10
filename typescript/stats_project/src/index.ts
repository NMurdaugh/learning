import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
  return row.split(',');
});

const matchKey = {
  dateOfMatch: 0,
  homeTeam: 1,
  awayTeam: 2,
  homePoints: 3,
  awayPoints: 4,
  winningTeam: 5,
  refereeName: 6,
}

let { dateOfMatch, homeTeam, awayTeam, homePoints, awayPoints, winningTeam, refereeName } = matchKey

let manUnitedWins = 0;

for (let match of matches) {
  if (match[homeTeam] === 'Man United' && match[winningTeam] === 'H') {
    manUnitedWins++
  } else if (match[awayTeam] === 'Man United' && match[winningTeam] === 'A') {
    manUnitedWins++
  }
}

console.log(manUnitedWins);

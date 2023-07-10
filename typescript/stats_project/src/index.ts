import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('./football.csv');

reader.read();

enum MatchKey {
  dateOfMatch = 0,
  homeTeam = 1,
  awayTeam = 2,
  homePoints = 3,
  awayPoints = 4,
  matchResults = 5,
  refereeName = 6,
}

const { dateOfMatch, homeTeam, awayTeam, homePoints, awayPoints, matchResults, refereeName } = MatchKey

enum MatchResultsKey {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

const { homeWin, awayWin, draw } = MatchResultsKey

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[homeTeam] === 'Man United' && match[matchResults] === homeWin) {
    manUnitedWins++
  } else if (match[awayTeam] === 'Man United' && match[matchResults] === awayWin) {
    manUnitedWins++
  }
}

console.log(manUnitedWins);

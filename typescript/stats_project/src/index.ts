import { CsvFileReader } from './CsvFileReader';
import { MatchKey, MatchResultsKey } from './EnumLibrary';

const reader = new CsvFileReader('./football.csv');

reader.read();

const { dateOfMatch, homeTeam, awayTeam, homePoints, awayPoints, matchResults, refereeName } = MatchKey

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

import { MatchReader } from './MatchReader';
import { MatchKey, MatchResultsKey } from './EnumLibrary';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)

matchReader.load()

const { dateOfMatch, homeTeam, awayTeam, homePoints, awayPoints, matchResults, refereeName } = MatchKey

const { homeWin, awayWin, draw } = MatchResultsKey

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[homeTeam] === 'Man United' && match[matchResults] === homeWin) {
    manUnitedWins++
  } else if (match[awayTeam] === 'Man United' && match[matchResults] === awayWin) {
    manUnitedWins++
  }
}

console.log(manUnitedWins);

import { MatchReader } from './MatchReader';
import { MatchKey, MatchResultsKey } from './ReferenceLibrary';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)



console.log(manUnitedWins);

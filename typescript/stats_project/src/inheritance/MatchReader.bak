import { CsvFileReader } from './CsvFileReader';
import { stringToDate } from './utils';
import { MatchResultsKey } from './EnumLibrary';


type MatchData = [Date, string, string, number, number, MatchResultsKey, string]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResultsKey,
      row[6],
    ]
  }
}
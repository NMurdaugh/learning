import fs from 'fs';
import { stringToDate } from './stringToDate';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
    .readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
      }
    )
    .map((row: string[]): any => {
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5],
        row[6],
      ]
    })
  }
}
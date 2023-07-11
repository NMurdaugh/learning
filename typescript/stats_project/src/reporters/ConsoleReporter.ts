import { OutputTarget } from '../RunAnalysis';

export class ConsoleReporter implements OutputTarget {
  constructor() {}

  print(report: string): void {
    console.log(report)
  }
}
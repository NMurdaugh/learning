import { MatchData } from './ReferenceLibrary';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';


export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class RunAnalysis {
  constructor(
    public analyzer: Analyzer, 
    public reporter: OutputTarget) {}

    analyzeAndPrint(matches: MatchData[]): void {
      const results = this.analyzer.run(matches);
      this.reporter.print(results);
    }
}
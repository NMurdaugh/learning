import { MatchData } from './ReferenceLibrary';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReporter } from './reporters/HtmlReporter';
import { ConsoleReporter } from './reporters/ConsoleReporter';


export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class RunAnalysis {
  static winsToHtml(team: string): RunAnalysis {
    return new RunAnalysis(new WinsAnalyzer(team), new HtmlReporter());
  }

  static winsToConsole(team: string): RunAnalysis {
    return new RunAnalysis(new WinsAnalyzer(team), new ConsoleReporter());
  }

  constructor(
    public analyzer: Analyzer, 
    public reporter: OutputTarget) {}

    analyzeAndPrint(matches: MatchData[]): void {
      const results = this.analyzer.run(matches);
      this.reporter.print(results);
    }
}
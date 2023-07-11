import { MatchData } from './ReferenceLibrary';

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class RunAnalysis {
  constructor(
    public analyzer: Analyzer, 
    public exportTarget: OutputTarget) {}

    analyzeAndPrint() {
      
    }
}
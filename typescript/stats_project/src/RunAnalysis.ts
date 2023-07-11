import { MatchData } from './ReferenceLibrary';

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface ExportTarget {
  print(report: string): void
}

export class RunAnalysis {
  constructor(
    public analyzer: Analyzer, 
    public exportTarget: ExportTarget) {}
}
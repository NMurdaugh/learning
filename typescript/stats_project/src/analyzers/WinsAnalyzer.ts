import { Analyzer } from '../RunAnalysis';
import { MatchKey, MatchResultsKey, MatchData } from '../ReferenceLibrary';

const { dateOfMatch, homeTeam, awayTeam, homePoints, awayPoints, matchResults, refereeName } = MatchKey

const { homeWin, awayWin, draw } = MatchResultsKey

export class WinsAnalyzer implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]):string {    
    let numberOfWins = 0;

    for (let match of matches) {
      if (match[homeTeam] === teamName && match[matchResults] === homeWin) {
        numberOfWins++
      } else if (match[awayTeam] === teamName && match[matchResults] === awayWin) {
        numberOfWins++
      }
    }

    return `${this.teamName} won ${numberOfWins} games.`;
  }
}
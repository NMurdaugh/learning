export enum MatchKey {
  dateOfMatch = 0,
  homeTeam = 1,
  awayTeam = 2,
  homePoints = 3,
  awayPoints = 4,
  matchResults = 5,
  refereeName = 6,
}

export enum MatchResultsKey {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

export type MatchData = [Date, string, string, number, number, MatchResultsKey, string]

import { MatchReader } from './MatchReader';
import { RunAnalysis } from './RunAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');
const analysisToHtml = RunAnalysis.winsToHtml('Man United');
const analysisToConsole = RunAnalysis.winsToConsole('Man United');

matchReader.load();
analysisToConsole.analyzeAndPrint(matchReader.matches);
analysisToHtml.analyzeAndPrint(matchReader.matches);

import { MatchReader } from './MatchReader';
import { RunAnalysis } from './RunAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

const analysisToConsole = RunAnalysis.winsToConsole('Man United');
const analysisToHtml = RunAnalysis.winsToHtml('Man United');

analysisToConsole.analyzeAndPrint(matchReader.matches);
analysisToHtml.analyzeAndPrint(matchReader.matches);
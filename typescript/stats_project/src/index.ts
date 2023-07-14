import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { RunAnalysis } from './RunAnalysis';

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const analysisToConsole = RunAnalysis.winsToConsole('Man United');
const analysisToHtml = RunAnalysis.winsToHtml('Man United');

analysisToConsole.analyzeAndPrint(matchReader.matches);
analysisToHtml.analyzeAndPrint(matchReader.matches);
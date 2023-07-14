import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { RunAnalysis } from './RunAnalysis';

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader);

const analyzer = new WinsAnalyzer('Man United');

const reporter = new ConsoleReporter();

const analysis = new RunAnalysis(analyzer, reporter);

matchReader.load();

analysis.analyzeAndPrint(matchReader.matches);
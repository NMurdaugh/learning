import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReporter } from './reporters/ConsoleReporter';
import { RunAnalysis } from './RunAnalysis';
import { HtmlReporter } from './reporters/HtmlReporter';


const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const analyzer = new WinsAnalyzer('Man United');

const reporter = new HtmlReporter();

const analysis = new RunAnalysis(analyzer, reporter);

analysis.analyzeAndPrint(matchReader.matches);
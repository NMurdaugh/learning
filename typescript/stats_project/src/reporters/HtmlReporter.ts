import { OutputTarget } from '../RunAnalysis';
import fs from 'fs';

export class HtmlReporter implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Results<h1\>
      <h1>${report}<h1\>
    <div\>
    `;
    fs.writeFileSync('report.html', html);
  }
}
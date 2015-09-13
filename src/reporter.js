import util from 'util';
import mocha from 'mocha';
import { Result } from './result';
import { ReportWriter } from './writer';

/**
 * TextReporter
 * 
 * options.reporterOptions
 * satisfactory - Satisfactory code coverage of value
 * critical - Critical code coverage of value
 */
export class TextReporter extends mocha.reporters.Base {
  constructor(runner, options) {
    let opts = options || {};
    super(runner);
    this.writer = new ReportWriter(opts);
    runner.on('end', this.end.bind(this));
  }
  end() {
    let coverages = this.getCoverages();
    let result = Result.createFrom(coverages);
    result.sendTo(this.writer);
    this.result = result;
  }
  getCoverages() {
    global._$jscoverage || {};
  }
  getFiles() { 
    return this.result.files;
  }
}

'use strict';

import { color } from 'mocha/reporters/base';
import { vsprintf as format } from 'sprintf-js';
import _ from 'lodash/object';

let writer = {
  write(text) {
    process.stdout.write(text); 
  },
  writeln(text) {
    this.write(text);
    this.writeEOL();
  },
  writeEOL() {
    this.write("\n");
  }
};

export default writer;

export class ReportWriter {
  defaultOptions: {
    critical: 30.0,
    satisfactory: 70.0
  }
  constructor(options) {
    this.mergeOptions(options);
  }
  mergeOptions (options) {
    this.options = _.merge({}, this.defaultOptions, options);
    this.options.critical = parseFloat(this.options.critical);
    this.options.satisfactory = parseFloat(this.options.satisfactory);
  }
  writeReport(result) {
    writer.writeln("\nCode Coverage Results:\n");

    for (let file of result.files) {
      this.formatFileResult(file);
    }
    let coverage = this.colorize(result.coverage);

    writer.writeEOL();
    writer.writeln("Total Coverage: " + coverage);
    writer.writeEOL();
  }
  formatFileResult(file) {
    let coverage = this.olorize(file.coverage);
    this.writeFileResult(coverage, file.executed, file.total, file.fileName);
  }
  colorize(coverage) {
    let percent = format( '%6.2f%%', [ coverage ]);

    if (coverage >= this.options.satisfactory) {
      color('green', percent);
    } else if (coverage < this.options.critical) {
      color('fail', percent);
    } else {
      color('bright yellow', percent);
    }
  }
  writeFileResult(...values) {
    let output = format('%s (%2d/%2d) %s', values);
    writer.writeln(output);
  }
}

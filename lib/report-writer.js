var ReportWriter, _, color, format, writer,
  slice = [].slice;

color = require('mocha').reporters.Base.color;

format = require('sprintf-js').vsprintf;

writer = require('./console-writer');

_ = require('lodash/object');

ReportWriter = (function() {
  ReportWriter.prototype.defaultOptions = {
    critical: 30.0,
    satisfactory: 70.0
  };

  function ReportWriter(options) {
    this.mergeOptions(options);
  }

  ReportWriter.prototype.mergeOptions = function(options) {
    this.options = _.merge({}, this.defaultOptions, options);
    this.options.critical = parseFloat(this.options.critical);
    return this.options.satisfactory = parseFloat(this.options.satisfactory);
  };

  ReportWriter.prototype.writeReport = function(result) {
    var coverage;
    writer.writeln("\nCode Coverage Results:\n");
    result.files.forEach(this.formatFileResult, this);
    coverage = this.colorize(result.coverage);
    writer.writeEOL();
    writer.writeln("Total Coverage: " + coverage);
    return writer.writeEOL();
  };

  ReportWriter.prototype.formatFileResult = function(file) {
    var coverage;
    coverage = this.colorize(file.coverage);
    return this.writeFileResult(coverage, file.executed, file.total, file.fileName);
  };

  ReportWriter.prototype.colorize = function(coverage) {
    var percent;
    percent = format('%6.2f%%', [coverage]);
    if (coverage >= this.options.satisfactory) {
      return color('green', percent);
    } else if (coverage < this.options.critical) {
      return color('fail', percent);
    } else {
      return color('bright yellow', percent);
    }
  };

  ReportWriter.prototype.writeFileResult = function() {
    var output, values;
    values = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    output = format('%s (%2d/%2d) %s', values);
    return writer.writeln(output);
  };

  return ReportWriter;

})();

module.exports = ReportWriter;

//# sourceMappingURL=../sourcemap/report-writer.js.map
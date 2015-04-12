var Base, FileResult, ReportWriter, Result, TextReporter, util,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

util = require('util');

Base = require('mocha').reporters.Base;

FileResult = require('./file-result');

Result = require('./result');

ReportWriter = require('./report-writer');

TextReporter = (function(superClass) {
  extend(TextReporter, superClass);

  function TextReporter(runner, options) {
    var opts;
    opts = options || {};
    this.writer = new ReportWriter(opts);
    runner.on('end', this.end.bind(this));
  }

  TextReporter.prototype.end = function() {
    var coverages, result;
    coverages = this.getCoverages();
    result = Result.createFrom(coverages);
    result.sendTo(this.writer);
    return this.result = result;
  };

  TextReporter.prototype.getCoverages = function() {
    return global._$jscoverage || {};
  };

  TextReporter.prototype.getFiles = function() {
    return this.result.files;
  };

  return TextReporter;

})(Base);

module.exports = TextReporter;

//# sourceMappingURL=../sourcemap/reporter.js.map
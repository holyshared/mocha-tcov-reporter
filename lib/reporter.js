var Base, FileResult, Result, TextReporter, formatter, util,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

util = require('util');

Base = require('mocha').reporters.Base;

FileResult = require('./file-result');

Result = require('./result');

formatter = require('./formatter');

TextReporter = (function(_super) {
  __extends(TextReporter, _super);

  function TextReporter(runner) {
    runner.on('end', this.end.bind(this));
  }

  TextReporter.prototype.end = function() {
    var coverages, result, results;
    results = [];
    coverages = this.getCoverages();
    result = Result.createFrom(coverages);
    formatter.format(result);
    return this.result = result;
  };

  TextReporter.prototype.getCoverages = function() {
    return global._$jscoverage || {};
  };

  TextReporter.prototype.getResults = function() {
    return this.result.files;
  };

  return TextReporter;

})(Base);

module.exports = TextReporter;

//# sourceMappingURL=../sourcemap/reporter.js.map
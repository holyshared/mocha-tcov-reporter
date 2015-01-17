var Base, FileResult, TextReporter, util,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

util = require('util');

Base = require('mocha').reporters.Base;

FileResult = require('./file-result');

TextReporter = (function(_super) {
  __extends(TextReporter, _super);

  function TextReporter(runner) {
    runner.on('end', this.end.bind(this));
  }

  TextReporter.prototype.end = function() {
    var coverages, file, lineResults, results;
    results = [];
    coverages = this.getCoverages();
    for (file in coverages) {
      lineResults = coverages[file];
      results.push(new FileResult(file, lineResults));
    }
    results.forEach(function(result) {
      return util.log(result.getCodeCoverage());
    });
    return this.results = results;
  };

  TextReporter.prototype.getCoverages = function() {
    return global._$jscoverage || {};
  };

  TextReporter.prototype.getResults = function() {
    return this.results;
  };

  return TextReporter;

})(Base);

module.exports = TextReporter;

//# sourceMappingURL=reporter.js.map
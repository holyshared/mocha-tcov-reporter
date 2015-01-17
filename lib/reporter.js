var Base, FileResult, TextReporter, util,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

util = require('util');

Base = require('mocha').reporters.Base;

TextReporter = (function(_super) {
  __extends(TextReporter, _super);

  function TextReporter(runner) {
    runner.on('end', this.end);
  }

  TextReporter.prototype.end = function() {
    var coverages, file, lineResults, results;
    results = [];
    coverages = global._$jscoverage || {};
    for (file in coverages) {
      lineResults = coverages[file];
      results.push(new FileResult(file, lineResults));
    }
    results.forEach(function(result) {
      return util.log(result.getCodeCoverage());
    });
    return this.results = results;
  };

  TextReporter.prototype.getResults = function() {
    return this.results;
  };

  return TextReporter;

})(Base);

FileResult = (function() {
  function FileResult(name, results) {
    this.name = name;
    this.calculate(results);
  }

  FileResult.prototype.calculate = function(results) {
    var executed, lineNumber, total, unused;
    lineNumber = 0;
    total = 0;
    unused = 0;
    executed = 0;
    results.forEach(function(result) {
      lineNumber++;
      if (result === 0) {
        unused++;
        return total++;
      } else if (result !== void 0) {
        executed++;
        return total++;
      }
    });
    this.unused = unused;
    this.executed = executed;
    return this.total = total;
  };

  FileResult.prototype.getCodeCoverage = function() {
    return this.executed / this.total * 100;
  };

  return FileResult;

})();

module.exports = TextReporter;

//# sourceMappingURL=reporter.js.map
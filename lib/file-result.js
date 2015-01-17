var FileResult, LineResult;

LineResult = require('./line-result');

FileResult = (function() {
  function FileResult(name, results) {
    this.name = name;
    this.result = new LineResult(results);
  }

  FileResult.prototype.getCodeCoverage = function() {
    var coverage;
    coverage = this.result.executed / this.result.total * 100;
    return coverage.toFixed(2);
  };

  return FileResult;

})();

module.exports = FileResult;

//# sourceMappingURL=../sourcemap/file-result.js.map
var FileResult;

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

module.exports = FileResult;

//# sourceMappingURL=file-result.js.map
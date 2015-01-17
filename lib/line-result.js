var LineResult;

LineResult = (function() {
  function LineResult(results) {
    this.calculate(results);
    Object.freeze(this);
  }

  LineResult.prototype.calculate = function(results) {
    var calculator;
    this.total = 0;
    this.unused = 0;
    this.executed = 0;
    calculator = this.append.bind(this);
    return results.forEach(calculator);
  };

  LineResult.prototype.append = function(result) {
    if (result === 0) {
      this.unused++;
      return this.total++;
    } else if (result !== void 0) {
      this.executed++;
      return this.total++;
    }
  };

  return LineResult;

})();

module.exports = LineResult;

//# sourceMappingURL=../sourcemap/line-result.js.map
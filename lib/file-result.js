var FileResult, LineResult, path;

path = require('path');

LineResult = require('./line-result');

FileResult = (function() {
  function FileResult(name, results) {
    this._name = name;
    this._result = new LineResult(results);
  }

  return FileResult;

})();

Object.defineProperty(FileResult.prototype, 'fileName', {
  get: function() {
    return path.relative(process.cwd(), this._name);
  }
});

Object.defineProperty(FileResult.prototype, 'executed', {
  get: function() {
    return this._result.executed;
  }
});

Object.defineProperty(FileResult.prototype, 'unused', {
  get: function() {
    return this._result.unused;
  }
});

Object.defineProperty(FileResult.prototype, 'total', {
  get: function() {
    return this._result.total;
  }
});

Object.defineProperty(FileResult.prototype, 'coverage', {
  get: function() {
    var coverage;
    coverage = this.executed / this.total * 100;
    return parseFloat(coverage.toFixed(2));
  }
});

module.exports = FileResult;

//# sourceMappingURL=../sourcemap/file-result.js.map
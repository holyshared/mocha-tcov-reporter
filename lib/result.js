var FileResult, Result;

FileResult = require('./file-result');

Result = (function() {
  function Result(files) {
    this._files = files;
  }

  return Result;

})();

Object.defineProperty(Result.prototype, 'files', {
  get: function() {
    return this._files;
  }
});

Object.defineProperty(Result.prototype, 'coverage', {
  get: function() {
    var coverage, executed, total;
    total = executed = 0;
    this.files.forEach(function(file) {
      total += file.total;
      return executed += file.executed;
    });
    coverage = executed / total * 100;
    return parseFloat(coverage.toFixed(2));
  }
});

Result.createFrom = function(coverages) {
  var file, files, lineResults;
  files = [];
  for (file in coverages) {
    lineResults = coverages[file];
    files.push(new FileResult(file, lineResults));
  }
  return new Result(files);
};

module.exports = Result;

//# sourceMappingURL=../sourcemap/result.js.map
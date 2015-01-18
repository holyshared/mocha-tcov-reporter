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
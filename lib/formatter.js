var color, formatter, stdout, write,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

stdout = process.stdout;

formatter = function(result) {
  var coverage, lineResult;
  coverage = color('green', result.getCodeCoverage() + "%");
  lineResult = result.getExecutedLineCount() + '/' + result.getTotalLineCount();
  return write(coverage, lineResult, result.getFileName());
};

write = function() {
  var output, values;
  values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  output = values.join(' ');
  return stdout.write(output);
};

module.exports = formatter;

//# sourceMappingURL=../sourcemap/formatter.js.map
var color, formatter, stdout, write,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

stdout = process.stdout;

formatter = function(result) {
  var coverage, lineResult;
  coverage = color('green', result.coverage + "%");
  lineResult = result.executed + '/' + result.total;
  return write(coverage, lineResult, result.fileName);
};

write = function() {
  var output, values;
  values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  output = values.join(' ');
  return stdout.write(output);
};

module.exports = formatter;

//# sourceMappingURL=../sourcemap/formatter.js.map
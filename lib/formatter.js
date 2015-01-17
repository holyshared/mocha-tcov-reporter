var color, colorize, formatter, stdout, write,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

stdout = process.stdout;

formatter = function(result) {
  var coverage, lineResult;
  coverage = colorize(result.coverage);
  lineResult = result.executed + '/' + result.total;
  return write(coverage, lineResult, result.fileName);
};

colorize = function(coverage) {
  var percent;
  percent = coverage + "%";
  if (coverage >= 75) {
    return color('green', percent);
  } else if (coverage < 30) {
    return color('fail', percent);
  } else {
    return color('bright yellow', percent);
  }
};

write = function() {
  var output, values;
  values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  output = values.join(' ') + '\n';
  return stdout.write(output);
};

module.exports = formatter;

//# sourceMappingURL=../sourcemap/formatter.js.map
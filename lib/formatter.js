var color, colorize, format, formatter, stdout, write,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

stdout = process.stdout;

format = require('sprintf-js').vsprintf;

formatter = function(result) {
  var coverage;
  coverage = colorize(result.coverage);
  return write(coverage, result.executed, result.total, result.fileName);
};

colorize = function(coverage) {
  var percent;
  percent = format('%6.2f%%', [coverage]);
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
  output = format('%s (%2d/%2d) %s', values);
  return stdout.write(output + '\n');
};

module.exports = formatter;

//# sourceMappingURL=../sourcemap/formatter.js.map
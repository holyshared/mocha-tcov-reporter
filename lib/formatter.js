var color, colorize, fileResultFormatter, format, stdout, writeFileResult,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

stdout = process.stdout;

format = require('sprintf-js').vsprintf;

module.exports.format = function(result) {
  var coverage;
  stdout.write("\nCode Coverage Results:\n\n");
  result.files.forEach(fileResultFormatter);
  stdout.write("\n");
  coverage = colorize(result.coverage);
  stdout.write("Total Coverage: " + coverage + "\n");
  return stdout.write("\n");
};

fileResultFormatter = function(file) {
  var coverage;
  coverage = colorize(file.coverage);
  return writeFileResult(coverage, file.executed, file.total, file.fileName);
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

writeFileResult = function() {
  var output, values;
  values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  output = format('%s (%2d/%2d) %s', values);
  return stdout.write(output + '\n');
};

//# sourceMappingURL=../sourcemap/formatter.js.map
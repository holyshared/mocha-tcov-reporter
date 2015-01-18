var color, colorize, fileResultFormatter, format, writeFileResult, writer,
  __slice = [].slice;

color = require('mocha').reporters.Base.color;

format = require('sprintf-js').vsprintf;

writer = require('./report-writer');

module.exports.format = function(result) {
  var coverage;
  writer.writeln("\nCode Coverage Results:\n");
  result.files.forEach(fileResultFormatter);
  coverage = colorize(result.coverage);
  writer.writeEOL();
  writer.writeln("Total Coverage: " + coverage);
  return writer.writeEOL();
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
  return writer.writeln(output);
};

//# sourceMappingURL=../sourcemap/formatter.js.map
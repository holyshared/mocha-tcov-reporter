var report = {};

var source = [
  "'use strict';",
  "",
  "module.exports = function(value) {",
  "  if (value) {",
  "    return true;",
  "  } else {",
  "    return false;",
  "  }",
  "};"
];

var lineResults = [
  1,
  undefined,
  1,
  1,
  1,
  undefined,
  0,
  undefined,
  undefined
];

lineResults.source = source;

report['path/to/source.js'] = lineResults;

module.exports = report;

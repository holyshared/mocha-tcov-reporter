var fs = require('fs');
var path = require('path');
var Bluebird = require('bluebird');
var readFile = Bluebird.promisify(fs.readFile);

module.exports = function() {
  var sourceFile = path.join(__dirname, 'source.js');

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

  return readFile(sourceFile).then(function(content) {
    var report = {};

    lineResults.source = content.toString();
    report[sourceFile] = lineResults;

    return Bluebird.resolve({
      path: sourceFile,
      resultReport: report
    });
  });

};

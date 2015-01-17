color = require('mocha').reporters.Base.color
stdout = process.stdout

formatter = (result) ->
  coverage = color('green', result.getCodeCoverage() + "%")
  lineResult = result.getExecutedLineCount() + '/' + result.getTotalLineCount()

  write coverage, lineResult, result.getFileName()

write = (values...) ->
  output = values.join(' ')
  stdout.write output

module.exports = formatter

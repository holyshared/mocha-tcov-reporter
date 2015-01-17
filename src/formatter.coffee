color = require('mocha').reporters.Base.color
stdout = process.stdout

formatter = (result) ->
  coverage = color('green', result.coverage + "%")
  lineResult = result.executed + '/' + result.total

  write coverage, lineResult, result.fileName

write = (values...) ->
  output = values.join(' ')
  stdout.write output

module.exports = formatter

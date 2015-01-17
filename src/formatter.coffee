color = require('mocha').reporters.Base.color
stdout = process.stdout

formatter = (result) ->
  coverage = colorize(result.coverage)
  lineResult = result.executed + '/' + result.total

  write coverage, lineResult, result.fileName

colorize = (coverage) ->
  percent = coverage + "%"

  if coverage >= 75
    color('green', percent)
  else if coverage < 30
    color('fail', percent)
  else
    color('yellow', percent)

write = (values...) ->
  output = values.join(' ')
  stdout.write output

module.exports = formatter

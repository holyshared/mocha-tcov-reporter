color = require('mocha').reporters.Base.color
stdout = process.stdout
format = require('sprintf-js').vsprintf

formatter = (result) ->
  coverage = colorize(result.coverage)
  write coverage, result.executed, result.total, result.fileName

colorize = (coverage) ->
  percent = format '%6.2f%%', [coverage]

  if coverage >= 75
    color('green', percent)
  else if coverage < 30
    color('fail', percent)
  else
    color('bright yellow', percent)

write = (values...) ->
  output = format '%s (%2d/%2d) %s', values
  stdout.write output + '\n'

module.exports = formatter

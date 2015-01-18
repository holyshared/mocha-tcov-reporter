color = require('mocha').reporters.Base.color
stdout = process.stdout
format = require('sprintf-js').vsprintf

module.exports.format = (result) ->
  stdout.write "\nCode Coverage Results:\n\n"
  result.files.forEach fileResultFormatter
  stdout.write "\n"

fileResultFormatter = (file) ->
  coverage = colorize(file.coverage)
  writeFileResult coverage, file.executed, file.total, file.fileName

colorize = (coverage) ->
  percent = format '%6.2f%%', [coverage]

  if coverage >= 75
    color('green', percent)
  else if coverage < 30
    color('fail', percent)
  else
    color('bright yellow', percent)

writeFileResult = (values...) ->
  output = format '%s (%2d/%2d) %s', values
  stdout.write output + '\n'

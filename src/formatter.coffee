color = require('mocha').reporters.Base.color
format = require('sprintf-js').vsprintf
writer = require('./report-writer')

module.exports.format = (result) ->
  writer.writeln "\nCode Coverage Results:\n"
  result.files.forEach fileResultFormatter

  coverage = colorize(result.coverage)

  writer.writeEOL()
  writer.writeln "Total Coverage: " + coverage
  writer.writeEOL()

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
  writer.writeln output

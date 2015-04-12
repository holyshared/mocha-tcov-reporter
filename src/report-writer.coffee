color = require('mocha').reporters.Base.color
format = require('sprintf-js').vsprintf
writer = require('./console-writer')
_ = require('lodash/object')

class ReportWriter

  defaultOptions: {
    critical: 30.0,
    satisfactory: 70.0
  }

  constructor: (options) ->
    @mergeOptions(options)

  mergeOptions: (options) ->
    @options = _.merge({}, @defaultOptions, options)
    @options.critical = parseFloat(@options.critical)
    @options.satisfactory = parseFloat(@options.satisfactory)

  writeReport: (result) ->
    writer.writeln "\nCode Coverage Results:\n"
    result.files.forEach @formatFileResult, @

    coverage = @colorize(result.coverage)

    writer.writeEOL()
    writer.writeln "Total Coverage: " + coverage
    writer.writeEOL()

  formatFileResult: (file) ->
    coverage = @colorize(file.coverage)
    @writeFileResult coverage, file.executed, file.total, file.fileName

  colorize: (coverage) ->
    percent = format '%6.2f%%', [coverage]

    if coverage >= @options.satisfactory
      color('green', percent)
    else if coverage < @options.critical
      color('fail', percent)
    else
      color('bright yellow', percent)

  writeFileResult: (values...) ->
    output = format '%s (%2d/%2d) %s', values
    writer.writeln output

module.exports = ReportWriter

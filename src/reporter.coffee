util = require 'util'
Base = require('mocha').reporters.Base
FileResult = require './file-result'
Result = require './result'
ReportWriter = require './report-writer'

#
# TextReporter
#
# options.reporterOptions
#   satisfactory -
#   critical -
#
class TextReporter extends Base
  constructor: (runner, options) ->
    @options = @parseOptions(options.reporterOptions)
    @writer = new ReportWriter(@options)

    runner.on 'end', @end.bind @

  end: ->
    coverages = @getCoverages()
    result = Result.createFrom coverages
    result.sendTo @writer
    @result = result

  getCoverages: ->
    global._$jscoverage || {}

  getFiles: () ->
    @result.files

  parseOptions: (options) ->
    opts = {}
    opts.critical = parseFloat(options.critical) || 30.0
    opts.satisfactory = parseFloat(options.satisfactory) || 70.0
    opts

module.exports = TextReporter

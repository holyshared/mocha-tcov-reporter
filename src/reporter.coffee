util = require 'util'
Base = require('mocha').reporters.Base
FileResult = require './file-result'
Result = require './result'
ReportWriter = require './report-writer'

#
# TextReporter
#
# options.reporterOptions
#   satisfactory - Satisfactory code coverage of value
#   critical - Critical code coverage of value
#
class TextReporter extends Base
  constructor: (runner, options) ->
    opts = options || {}
    @writer = new ReportWriter(opts)
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

module.exports = TextReporter

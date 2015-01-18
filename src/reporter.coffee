util = require 'util'
Base = require('mocha').reporters.Base
FileResult = require './file-result'
Result = require './result'
formatter = require './formatter'


class TextReporter extends Base
  constructor: (runner) ->
    runner.on 'end', @end.bind @

  end: ->
    coverages = @getCoverages()
    result = Result.createFrom coverages
    formatter.format result
    @result = result

  getCoverages: ->
    global._$jscoverage || {}

  getFiles: () ->
    @result.files

module.exports = TextReporter

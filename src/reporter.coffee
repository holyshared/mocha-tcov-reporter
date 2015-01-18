util = require 'util'
Base = require('mocha').reporters.Base
FileResult = require './file-result'
Result = require './result'
formatter = require './formatter'


class TextReporter extends Base
  constructor: (runner) ->
    runner.on 'end', @end.bind @

  end: ->
    results = []
    coverages = @getCoverages()

    result = Result.createFrom coverages

#    for file, lineResults of coverages
#      results.push new FileResult(file, lineResults)

    formatter.format result

    @result = result

  getCoverages: ->
    global._$jscoverage || {}

  getResults: () ->
    @result.files

module.exports = TextReporter

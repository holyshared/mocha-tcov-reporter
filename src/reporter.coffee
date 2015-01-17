util = require 'util'
Base = require('mocha').reporters.Base
FileResult = require './file-result'
formatter = require './formatter'


class TextReporter extends Base
  constructor: (runner) ->
    runner.on 'end', @end.bind @

  end: ->
    results = []
    coverages = @getCoverages()

    for file, lineResults of coverages
      results.push new FileResult(file, lineResults)

    formatter.format results

    @results = results

  getCoverages: ->
    global._$jscoverage || {}

  getResults: () ->
    @results

module.exports = TextReporter

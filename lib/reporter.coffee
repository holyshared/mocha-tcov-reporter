util = require 'util'
Base = require('mocha').reporters.Base

class TextReporter extends Base
  constructor: (runner) ->
    runner.on 'end', @end

  end: ->
    results = []
    coverages = global._$jscoverage || {}

    for file, lineResults of coverages
      results.push new FileResult(file, lineResults)

    results.forEach (result) ->
      util.log result.getCodeCoverage()

    @results = results

  getResults: () ->
    @results

class FileResult
  constructor: (name, results) ->
    @name = name
    @calculate(results)

  calculate: (results) ->
    lineNumber = 0
    total = 0
    unused = 0
    executed = 0

    results.forEach (result) ->
      lineNumber++
      if result == 0
        unused++
        total++
      else if result != undefined  
        executed++
        total++

    @unused = unused
    @executed = executed
    @total = total

  getCodeCoverage: ->
    @executed / @total * 100

module.exports = TextReporter

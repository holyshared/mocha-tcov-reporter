LineResult = require './line-result'

class FileResult
  constructor: (name, results) ->
    @name = name
    @result = new LineResult(results)

  getFileName: ->
    @name

  getCodeCoverage: ->
    coverage = @result.executed / @result.total * 100
    coverage.toFixed 2

module.exports = FileResult

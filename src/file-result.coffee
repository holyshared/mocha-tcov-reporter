LineResult = require './line-result'

class FileResult
  constructor: (name, results) ->
    @_name = name
    @_result = new LineResult(results)

Object.defineProperty FileResult::, 'fileName', get: -> @_name
Object.defineProperty FileResult::, 'executed', get: -> @_result.executed
Object.defineProperty FileResult::, 'total', get: -> @_result.total
Object.defineProperty FileResult::, 'coverage', get: ->
  coverage = @executed / @total * 100
  coverage.toFixed 2

module.exports = FileResult

FileResult = require './file-result'

class Result
  constructor: (files) ->
    @_files = files
  sendTo: (writer) ->
    writer.writeReport @

Object.defineProperty Result::, 'files', get: -> @_files
Object.defineProperty Result::, 'coverage', get: ->
  total = executed = 0

  @files.forEach (file) ->
    total += file.total
    executed += file.executed

  coverage = executed / total * 100
  parseFloat(coverage.toFixed(2))

Result.createFrom = (coverages) ->
  files = []
  for file, lineResults of coverages
    files.push new FileResult(file, lineResults)
  new Result(files)

module.exports = Result

FileResult = require './file-result'

class Result
  constructor: (files) ->
    @_files = files

Object.defineProperty Result::, 'files', get: -> @_files

Result.createFrom = (coverages) ->
  files = []
  for file, lineResults of coverages
    files.push new FileResult(file, lineResults)
  new Result(files)

module.exports = Result

class LineResult

  constructor: (results) ->
    @calculate(results)

  calculate: (results) ->
    @total = 0
    @unused = 0
    @executed = 0

    calculator = @append.bind @
    results.forEach calculator

  append: (result) ->
    if result == 0
      @unused++
      @total++
    else if result != undefined
      @executed++
      @total++

module.exports = LineResult

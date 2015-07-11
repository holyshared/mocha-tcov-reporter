expect = require('chai').expect
report = require './fixtures/report'
LineResult = require '../lib/line-result'

describe 'LineResult', ->
  beforeEach ->
    report().bind(@).then (result) ->
      path = result.path
      resultReport = result.resultReport

      @result = new LineResult(resultReport[path])

  describe 'executed', ->
    it 'return executed line count', ->
      expect(@result.executed).to.be.equal 4

  describe 'unused', ->
    it 'return unused line count', ->
      expect(@result.unused).to.be.equal 1

  describe 'total', ->
    it 'return total line count', ->
      expect(@result.total).to.be.equal 5

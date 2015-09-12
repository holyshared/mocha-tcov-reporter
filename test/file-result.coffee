expect = require('chai').expect
report = require './fixtures/report'
FileResult = require('../lib/result').FileResult

describe 'FileResult', ->
  beforeEach ->
    report().bind(@).then (result) ->
      path = result.path
      resultReport = result.resultReport

      @result = new FileResult path, resultReport[path]

  describe 'fileName', ->
    it 'return relative file name', ->
      expect(@result.fileName).to.be.equal 'test/fixtures/source.js'

  describe 'executed', ->
    it 'return executed line count', ->
      expect(@result.executed).to.be.equal 4

  describe 'unused', ->
    it 'return unused line count', ->
      expect(@result.unused).to.be.equal 1

  describe 'total', ->
    it 'return total line count', ->
      expect(@result.total).to.be.equal 5

  describe 'coverage', ->
    it 'return coverage value', ->
      expect(@result.coverage).to.be.equal 80.00

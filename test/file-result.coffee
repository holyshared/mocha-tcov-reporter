expect = require('chai').expect
report = require './fixtures/report'
FileResult = require '../lib/file-result'

describe 'FileResult', ->
  beforeEach ->
    @coverages = report['path/to/source.js']
    @result = new FileResult 'path/to/source.js', @coverages

  describe 'fileName', ->
    it 'return file name', ->
      expect(@result.fileName).to.be.equal 'path/to/source.js'

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

expect = require('chai').expect
util = require 'util'
TextReporter = require '../lib/reporter'
report = require './fixtures/report'
sinon = require 'sinon'

describe 'TextReporter', ->
  beforeEach ->
    runner = {
      on: (event, callback) ->
        @callback = callback
      emmit: () ->
        @callback()
    }
    @reporter = new TextReporter(runner)
    sinon.stub(@reporter, "getCoverages").returns(report);
    @runner = runner

  describe '#getFiles', ->
    beforeEach ->
      @runner.emmit()

    it 'return file results', ->
      results = @reporter.getFiles()
      expect(results.length).to.be.equal(1)

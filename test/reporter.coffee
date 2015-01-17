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

  describe '#getResults', ->
    beforeEach ->
      @runner.emmit()

    it 'return results', ->
      results = @reporter.getResults()
      expect(results.length).to.be.equal(1)

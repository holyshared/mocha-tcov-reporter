describe 'TextReporter', ->
  beforeEach ->
    report().bind(@).then (result) ->
      runner = {
        on: (event, callback) ->
          @callback = callback
        emmit: () ->
          @callback()
      }
      @reporter = new TextReporter(runner)
      sinon.stub(@reporter, "getCoverages").returns(result.resultReport);
      @runner = runner

  describe '#getFiles', ->
    beforeEach ->
      @runner.emmit()

    it 'return file results', ->
      results = @reporter.getFiles()
      expect(results.length).to.be.equal(1)

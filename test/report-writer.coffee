expect = require('chai').expect
util = require 'util'
ReportWriter = require '../lib/report-writer'

describe 'ReportWriter', ->
  describe '#mergeOptions', ->
    context 'when none options', ->
      beforeEach ->
        @writer = new ReportWriter
      it 'default option is applied', ->
        expect(@writer.options.critical).to.be.equal(30.0)
        expect(@writer.options.satisfactory).to.be.equal(70.0)

    context 'when options', ->
      beforeEach ->
        @writer = new ReportWriter { critical: '50.0', satisfactory: '90.0' }
      it 'specified option is applied', ->
        expect(@writer.options.critical).to.be.equal(50.0)
        expect(@writer.options.satisfactory).to.be.equal(90.0)

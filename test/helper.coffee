global.util = require 'util'
global.expect = require('chai').expect
global.sinon = require 'sinon'
global.report = require './fixtures/report'
global.FileResult = require('../lib/result').FileResult
global.LineResult = require('../lib/result').LineResult
global.ReportWriter = require('../lib/writer').ReportWriter
global.TextReporter = require '../lib/index'

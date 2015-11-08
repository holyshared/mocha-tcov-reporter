'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _result = require('./result');

var _writer = require('./writer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TextReporter
 *
 * options.reporterOptions
 * satisfactory - Satisfactory code coverage of value
 * critical - Critical code coverage of value
 */

var TextReporter = (function (_mocha$reporters$Base) {
  _inherits(TextReporter, _mocha$reporters$Base);

  function TextReporter(runner, options) {
    _classCallCheck(this, TextReporter);

    var opts = options || {};

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextReporter).call(this, runner));

    _this.writer = new _writer.ReportWriter(opts);
    runner.on('end', _this.end.bind(_this));
    return _this;
  }

  _createClass(TextReporter, [{
    key: 'end',
    value: function end() {
      var coverages = this.getCoverages();
      var result = _result.Result.createFrom(coverages);
      result.sendTo(this.writer);
      this.result = result;
    }
  }, {
    key: 'getCoverages',
    value: function getCoverages() {
      return global._$jscoverage || {};
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.result.files;
    }
  }]);

  return TextReporter;
})(_mocha2.default.reporters.Base);

exports.default = TextReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWNRLFlBQVk7WUFBWixZQUFZOztBQUMvQixXQURtQixZQUFZLENBQ25CLE1BQU0sRUFBRSxPQUFPLEVBQUU7MEJBRFYsWUFBWTs7QUFFN0IsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7dUVBRlIsWUFBWSxhQUd2QixNQUFNOztBQUNaLFVBQUssTUFBTSxHQUFHLFlBYlQsWUFBWSxDQWFjLElBQUksQ0FBQyxDQUFDO0FBQ3JDLFVBQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQUssR0FBRyxDQUFDLElBQUksT0FBTSxDQUFDLENBQUM7O0dBQ3ZDOztlQU5rQixZQUFZOzswQkFPekI7QUFDSixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEMsVUFBSSxNQUFNLEdBQUcsUUFuQlIsTUFBTSxDQW1CUyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsWUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7OzttQ0FDYztBQUNiLGFBQU8sTUFBTSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7S0FDbEM7OzsrQkFDVTtBQUNULGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDMUI7OztTQWxCa0IsWUFBWTtHQUFTLGdCQUFNLFNBQVMsQ0FBQyxJQUFJOztrQkFBekMsWUFBWSIsImZpbGUiOiJyZXBvcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgbW9jaGEgZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi9yZXN1bHQnO1xuaW1wb3J0IHsgUmVwb3J0V3JpdGVyIH0gZnJvbSAnLi93cml0ZXInO1xuXG4vKipcbiAqIFRleHRSZXBvcnRlclxuICpcbiAqIG9wdGlvbnMucmVwb3J0ZXJPcHRpb25zXG4gKiBzYXRpc2ZhY3RvcnkgLSBTYXRpc2ZhY3RvcnkgY29kZSBjb3ZlcmFnZSBvZiB2YWx1ZVxuICogY3JpdGljYWwgLSBDcml0aWNhbCBjb2RlIGNvdmVyYWdlIG9mIHZhbHVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRSZXBvcnRlciBleHRlbmRzIG1vY2hhLnJlcG9ydGVycy5CYXNlIHtcbiAgY29uc3RydWN0b3IocnVubmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHN1cGVyKHJ1bm5lcik7XG4gICAgdGhpcy53cml0ZXIgPSBuZXcgUmVwb3J0V3JpdGVyKG9wdHMpO1xuICAgIHJ1bm5lci5vbignZW5kJywgdGhpcy5lbmQuYmluZCh0aGlzKSk7XG4gIH1cbiAgZW5kKCkge1xuICAgIGxldCBjb3ZlcmFnZXMgPSB0aGlzLmdldENvdmVyYWdlcygpO1xuICAgIGxldCByZXN1bHQgPSBSZXN1bHQuY3JlYXRlRnJvbShjb3ZlcmFnZXMpO1xuICAgIHJlc3VsdC5zZW5kVG8odGhpcy53cml0ZXIpO1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICB9XG4gIGdldENvdmVyYWdlcygpIHtcbiAgICByZXR1cm4gZ2xvYmFsLl8kanNjb3ZlcmFnZSB8fCB7fTtcbiAgfVxuICBnZXRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuZmlsZXM7XG4gIH1cbn1cbiJdfQ==
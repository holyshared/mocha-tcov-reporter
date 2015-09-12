'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _result = require('./result');

var _writer = require('./writer');

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
    _get(Object.getPrototypeOf(TextReporter.prototype), 'constructor', this).call(this, runner);
    this.writer = new _writer.ReportWriter(opts);
    runner.on('end', this.end.bind(this));
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
      global._$jscoverage || {};
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.result.files;
    }
  }]);

  return TextReporter;
})(_mocha2['default'].reporters.Base);

exports.TextReporter = TextReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRUksTUFBTTs7OztxQkFDTCxPQUFPOzs7O3NCQUNGLFVBQVU7O3NCQUNKLFVBQVU7Ozs7Ozs7Ozs7SUFTMUIsWUFBWTtZQUFaLFlBQVk7O0FBQ1osV0FEQSxZQUFZLENBQ1gsTUFBTSxFQUFFLE9BQU8sRUFBRTswQkFEbEIsWUFBWTs7QUFFckIsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QiwrQkFIUyxZQUFZLDZDQUdmLE1BQU0sRUFBRTtBQUNkLFFBQUksQ0FBQyxNQUFNLEdBQUcseUJBQWlCLElBQUksQ0FBQyxDQUFDO0FBQ3JDLFVBQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDdkM7O2VBTlUsWUFBWTs7V0FPcEIsZUFBRztBQUNKLFVBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQyxVQUFJLE1BQU0sR0FBRyxlQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxZQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7O1dBQ1csd0JBQUc7QUFDYixZQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztLQUMzQjs7O1dBQ08sb0JBQUc7QUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQzFCOzs7U0FsQlUsWUFBWTtHQUFTLG1CQUFNLFNBQVMsQ0FBQyxJQUFJIiwiZmlsZSI6InJlcG9ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCBtb2NoYSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL3Jlc3VsdCc7XG5pbXBvcnQgeyBSZXBvcnRXcml0ZXIgfSBmcm9tICcuL3dyaXRlcic7XG5cbi8qKlxuICogVGV4dFJlcG9ydGVyXG4gKiBcbiAqIG9wdGlvbnMucmVwb3J0ZXJPcHRpb25zXG4gKiBzYXRpc2ZhY3RvcnkgLSBTYXRpc2ZhY3RvcnkgY29kZSBjb3ZlcmFnZSBvZiB2YWx1ZVxuICogY3JpdGljYWwgLSBDcml0aWNhbCBjb2RlIGNvdmVyYWdlIG9mIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0UmVwb3J0ZXIgZXh0ZW5kcyBtb2NoYS5yZXBvcnRlcnMuQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bm5lciwgb3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBzdXBlcihydW5uZXIpO1xuICAgIHRoaXMud3JpdGVyID0gbmV3IFJlcG9ydFdyaXRlcihvcHRzKTtcbiAgICBydW5uZXIub24oJ2VuZCcsIHRoaXMuZW5kLmJpbmQodGhpcykpO1xuICB9XG4gIGVuZCgpIHtcbiAgICBsZXQgY292ZXJhZ2VzID0gdGhpcy5nZXRDb3ZlcmFnZXMoKTtcbiAgICBsZXQgcmVzdWx0ID0gUmVzdWx0LmNyZWF0ZUZyb20oY292ZXJhZ2VzKTtcbiAgICByZXN1bHQuc2VuZFRvKHRoaXMud3JpdGVyKTtcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgfVxuICBnZXRDb3ZlcmFnZXMoKSB7XG4gICAgZ2xvYmFsLl8kanNjb3ZlcmFnZSB8fCB7fTtcbiAgfVxuICBnZXRGaWxlcygpIHsgXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmZpbGVzO1xuICB9XG59XG4iXX0=
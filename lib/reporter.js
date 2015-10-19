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

exports['default'] = TextReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29CQUFpQixNQUFNOzs7O3FCQUNMLE9BQU87Ozs7c0JBQ0YsVUFBVTs7c0JBQ0osVUFBVTs7Ozs7Ozs7OztJQVNsQixZQUFZO1lBQVosWUFBWTs7QUFDcEIsV0FEUSxZQUFZLENBQ25CLE1BQU0sRUFBRSxPQUFPLEVBQUU7MEJBRFYsWUFBWTs7QUFFN0IsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QiwrQkFIaUIsWUFBWSw2Q0FHdkIsTUFBTSxFQUFFO0FBQ2QsUUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBaUIsSUFBSSxDQUFDLENBQUM7QUFDckMsVUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUN2Qzs7ZUFOa0IsWUFBWTs7V0FPNUIsZUFBRztBQUNKLFVBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQyxVQUFJLE1BQU0sR0FBRyxlQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxZQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7O1dBQ1csd0JBQUc7QUFDYixZQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztLQUMzQjs7O1dBQ08sb0JBQUc7QUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQzFCOzs7U0FsQmtCLFlBQVk7R0FBUyxtQkFBTSxTQUFTLENBQUMsSUFBSTs7cUJBQXpDLFlBQVkiLCJmaWxlIjoicmVwb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCBtb2NoYSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL3Jlc3VsdCc7XG5pbXBvcnQgeyBSZXBvcnRXcml0ZXIgfSBmcm9tICcuL3dyaXRlcic7XG5cbi8qKlxuICogVGV4dFJlcG9ydGVyXG4gKlxuICogb3B0aW9ucy5yZXBvcnRlck9wdGlvbnNcbiAqIHNhdGlzZmFjdG9yeSAtIFNhdGlzZmFjdG9yeSBjb2RlIGNvdmVyYWdlIG9mIHZhbHVlXG4gKiBjcml0aWNhbCAtIENyaXRpY2FsIGNvZGUgY292ZXJhZ2Ugb2YgdmFsdWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFJlcG9ydGVyIGV4dGVuZHMgbW9jaGEucmVwb3J0ZXJzLkJhc2Uge1xuICBjb25zdHJ1Y3RvcihydW5uZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgc3VwZXIocnVubmVyKTtcbiAgICB0aGlzLndyaXRlciA9IG5ldyBSZXBvcnRXcml0ZXIob3B0cyk7XG4gICAgcnVubmVyLm9uKCdlbmQnLCB0aGlzLmVuZC5iaW5kKHRoaXMpKTtcbiAgfVxuICBlbmQoKSB7XG4gICAgbGV0IGNvdmVyYWdlcyA9IHRoaXMuZ2V0Q292ZXJhZ2VzKCk7XG4gICAgbGV0IHJlc3VsdCA9IFJlc3VsdC5jcmVhdGVGcm9tKGNvdmVyYWdlcyk7XG4gICAgcmVzdWx0LnNlbmRUbyh0aGlzLndyaXRlcik7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gIH1cbiAgZ2V0Q292ZXJhZ2VzKCkge1xuICAgIGdsb2JhbC5fJGpzY292ZXJhZ2UgfHwge307XG4gIH1cbiAgZ2V0RmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmZpbGVzO1xuICB9XG59XG4iXX0=
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
      return global._$jscoverage || {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRUksTUFBTTs7OztxQkFDTCxPQUFPOzs7O3NCQUNGLFVBQVU7O3NCQUNKLFVBQVU7Ozs7Ozs7Ozs7SUFTbEIsWUFBWTtZQUFaLFlBQVk7O0FBQ3BCLFdBRFEsWUFBWSxDQUNuQixNQUFNLEVBQUUsT0FBTyxFQUFFOzBCQURWLFlBQVk7O0FBRTdCLFFBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDekIsK0JBSGlCLFlBQVksNkNBR3ZCLE1BQU0sRUFBRTtBQUNkLFFBQUksQ0FBQyxNQUFNLEdBQUcseUJBQWlCLElBQUksQ0FBQyxDQUFDO0FBQ3JDLFVBQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDdkM7O2VBTmtCLFlBQVk7O1dBTzVCLGVBQUc7QUFDSixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEMsVUFBSSxNQUFNLEdBQUcsZUFBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsWUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7OztXQUNXLHdCQUFHO0FBQ2IsYUFBTyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztLQUNsQzs7O1dBQ08sb0JBQUc7QUFDVCxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQzFCOzs7U0FsQmtCLFlBQVk7R0FBUyxtQkFBTSxTQUFTLENBQUMsSUFBSTs7cUJBQXpDLFlBQVkiLCJmaWxlIjoicmVwb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IG1vY2hhIGZyb20gJ21vY2hhJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vcmVzdWx0JztcbmltcG9ydCB7IFJlcG9ydFdyaXRlciB9IGZyb20gJy4vd3JpdGVyJztcblxuLyoqXG4gKiBUZXh0UmVwb3J0ZXJcbiAqXG4gKiBvcHRpb25zLnJlcG9ydGVyT3B0aW9uc1xuICogc2F0aXNmYWN0b3J5IC0gU2F0aXNmYWN0b3J5IGNvZGUgY292ZXJhZ2Ugb2YgdmFsdWVcbiAqIGNyaXRpY2FsIC0gQ3JpdGljYWwgY29kZSBjb3ZlcmFnZSBvZiB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0UmVwb3J0ZXIgZXh0ZW5kcyBtb2NoYS5yZXBvcnRlcnMuQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bm5lciwgb3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBzdXBlcihydW5uZXIpO1xuICAgIHRoaXMud3JpdGVyID0gbmV3IFJlcG9ydFdyaXRlcihvcHRzKTtcbiAgICBydW5uZXIub24oJ2VuZCcsIHRoaXMuZW5kLmJpbmQodGhpcykpO1xuICB9XG4gIGVuZCgpIHtcbiAgICBsZXQgY292ZXJhZ2VzID0gdGhpcy5nZXRDb3ZlcmFnZXMoKTtcbiAgICBsZXQgcmVzdWx0ID0gUmVzdWx0LmNyZWF0ZUZyb20oY292ZXJhZ2VzKTtcbiAgICByZXN1bHQuc2VuZFRvKHRoaXMud3JpdGVyKTtcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgfVxuICBnZXRDb3ZlcmFnZXMoKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5fJGpzY292ZXJhZ2UgfHwge307XG4gIH1cbiAgZ2V0RmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmZpbGVzO1xuICB9XG59XG4iXX0=
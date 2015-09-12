'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var LineResult = (function () {
  function LineResult(results) {
    _classCallCheck(this, LineResult);

    this.calculate(results);
    Object.freeze(this);
  }

  _createClass(LineResult, [{
    key: 'calculate',
    value: function calculate(results) {
      this.total = 0;
      this.unused = 0;
      this.executed = 0;

      var calculator = this.append.bind(this);
      results.forEach(calculator);
    }
  }, {
    key: 'append',
    value: function append(result) {
      if (result === 0) {
        this.unused++;
        this.total++;
      } else if (result !== undefined) {
        this.executed++;
        this.total++;
      }
    }
  }]);

  return LineResult;
})();

exports.LineResult = LineResult;

var FileResult = (function () {
  function FileResult(name, results) {
    _classCallCheck(this, FileResult);

    this._name = name;
    this._result = new LineResult(results);
  }

  _createClass(FileResult, [{
    key: 'fileName',
    get: function get() {
      return _path2['default'].relative(process.cwd(), this._name);
    }
  }, {
    key: 'executed',
    get: function get() {
      return this._result.executed;
    }
  }, {
    key: 'unused',
    get: function get() {
      return this._result.unused;
    }
  }, {
    key: 'total',
    get: function get() {
      return this._result.total;
    }
  }, {
    key: 'coverage',
    get: function get() {
      coverage = this.executed / this.total * 100;
      return parseFloat(coverage.toFixed(2));
    }
  }]);

  return FileResult;
})();

exports.FileResult = FileResult;

var Result = (function () {
  function Result(files) {
    _classCallCheck(this, Result);

    this._files = files;
  }

  _createClass(Result, [{
    key: 'sendTo',
    value: function sendTo(writer) {
      writer.writeReport(this);
    }
  }, {
    key: 'files',
    get: function get() {
      return this._files;
    }
  }, {
    key: 'coverage',
    get: function get() {
      var file = null;
      var total = executed = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          file = _step.value;

          total += file.total;
          executed += file.executed;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var coverage = executed / total * 100;
      return parseFloat(coverage.toFixed(2));
    }
  }], [{
    key: 'createFrom',
    value: function createFrom(coverages) {
      var files = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(coverages)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var file = _step2.value;

          files.push(new FileResult(file, coverages[file]));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return new Result(files);
    }
  }]);

  return Result;
})();

exports.Result = Result;
//# sourceMappingURL=data:application/json;base64,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QVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN0QyxhQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7OztXQUNnQixvQkFBQyxTQUFTLEVBQUU7QUFDM0IsVUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFDZiw4QkFBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUlBQUU7Y0FBaEMsSUFBSTs7QUFDWCxlQUFLLENBQUMsSUFBSSxDQUFFLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsYUFBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7O1NBM0JVLE1BQU0iLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNsYXNzIExpbmVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzKSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocmVzdWx0cyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuICBjYWxjdWxhdGUocmVzdWx0cykge1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMudW51c2VkID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkID0gMDtcblxuICAgIGxldCBjYWxjdWxhdG9yID0gdGhpcy5hcHBlbmQuYmluZCh0aGlzKTtcbiAgICByZXN1bHRzLmZvckVhY2goY2FsY3VsYXRvcik7IFxuICB9XG4gIGFwcGVuZChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICB0aGlzLnVudXNlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCByZXN1bHRzKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IExpbmVSZXN1bHQocmVzdWx0cyk7XG4gIH1cbiAgZ2V0IGZpbGVOYW1lKCkge1xuICAgIHJldHVybiBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIHRoaXMuX25hbWUpO1xuICB9XG4gIGdldCBleGVjdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LmV4ZWN1dGVkO1xuICB9XG4gIGdldCB1bnVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC51bnVzZWQ7XG4gIH1cbiAgZ2V0IHRvdGFsKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudG90YWw7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGNvdmVyYWdlID0gdGhpcy5leGVjdXRlZCAvIHRoaXMudG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzKSB7XG4gICAgdGhpcy5fZmlsZXMgPSBmaWxlcztcbiAgfVxuICBzZW5kVG8od3JpdGVyKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwb3J0KHRoaXMpO1xuICB9XG4gIGdldCBmaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZXM7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBsZXQgdG90YWwgPSBleGVjdXRlZCA9IDA7XG5cbiAgICBmb3IgKGZpbGUgb2YgdGhpcy5maWxlcykge1xuICAgICAgdG90YWwgKz0gZmlsZS50b3RhbDtcbiAgICAgIGV4ZWN1dGVkICs9IGZpbGUuZXhlY3V0ZWQ7XG4gICAgfVxuICAgIGxldCBjb3ZlcmFnZSA9IGV4ZWN1dGVkIC8gdG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUZyb20oY292ZXJhZ2VzKSB7XG4gICAgbGV0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBPYmplY3Qua2V5cyhjb3ZlcmFnZXMpKSB7XG4gICAgICBmaWxlcy5wdXNoKCBuZXcgRmlsZVJlc3VsdChmaWxlLCBjb3ZlcmFnZXNbZmlsZV0pICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzdWx0KGZpbGVzKTtcbiAgfVxufVxuIl19
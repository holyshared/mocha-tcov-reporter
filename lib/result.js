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
      var coverage = this.executed / this.total * 100;
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

      for (var _iterator = this.files, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        if (_isArray) {
          if (_i >= _iterator.length) break;
          file = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          file = _i.value;
        }

        total += file.total;
        executed += file.executed;
      }
      var coverage = executed / total * 100;
      return parseFloat(coverage.toFixed(2));
    }
  }], [{
    key: 'createFrom',
    value: function createFrom(coverages) {
      var files = [];
      for (var _iterator2 = Object.keys(coverages), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref = _i2.value;
        }

        var file = _ref;

        files.push(new FileResult(file, coverages[file]));
      }
      return new Result(files);
    }
  }]);

  return Result;
})();

exports.Result = Result;
//# sourceMappingURL=data:application/json;base64,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QUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdEMsYUFBTyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hDOzs7V0FDZ0Isb0JBQUMsU0FBUyxFQUFFO0FBQzNCLFVBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLDRCQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5SEFBRTs7Ozs7Ozs7Ozs7O1lBQWhDLElBQUk7O0FBQ1gsYUFBSyxDQUFDLElBQUksQ0FBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsQ0FBQztPQUNyRDtBQUNELGFBQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7OztTQTNCVSxNQUFNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjbGFzcyBMaW5lUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocmVzdWx0cykge1xuICAgIHRoaXMuY2FsY3VsYXRlKHJlc3VsdHMpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbiAgY2FsY3VsYXRlKHJlc3VsdHMpIHtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLnVudXNlZCA9IDA7XG4gICAgdGhpcy5leGVjdXRlZCA9IDA7XG5cbiAgICBsZXQgY2FsY3VsYXRvciA9IHRoaXMuYXBwZW5kLmJpbmQodGhpcyk7XG4gICAgcmVzdWx0cy5mb3JFYWNoKGNhbGN1bGF0b3IpO1xuICB9XG4gIGFwcGVuZChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICB0aGlzLnVudXNlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCByZXN1bHRzKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IExpbmVSZXN1bHQocmVzdWx0cyk7XG4gIH1cbiAgZ2V0IGZpbGVOYW1lKCkge1xuICAgIHJldHVybiBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIHRoaXMuX25hbWUpO1xuICB9XG4gIGdldCBleGVjdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LmV4ZWN1dGVkO1xuICB9XG4gIGdldCB1bnVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC51bnVzZWQ7XG4gIH1cbiAgZ2V0IHRvdGFsKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudG90YWw7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBjb3ZlcmFnZSA9IHRoaXMuZXhlY3V0ZWQgLyB0aGlzLnRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihmaWxlcykge1xuICAgIHRoaXMuX2ZpbGVzID0gZmlsZXM7XG4gIH1cbiAgc2VuZFRvKHdyaXRlcikge1xuICAgIHdyaXRlci53cml0ZVJlcG9ydCh0aGlzKTtcbiAgfVxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzO1xuICB9XG4gIGdldCBjb3ZlcmFnZSgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgbGV0IHRvdGFsID0gZXhlY3V0ZWQgPSAwO1xuXG4gICAgZm9yIChmaWxlIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgIHRvdGFsICs9IGZpbGUudG90YWw7XG4gICAgICBleGVjdXRlZCArPSBmaWxlLmV4ZWN1dGVkO1xuICAgIH1cbiAgICBsZXQgY292ZXJhZ2UgPSBleGVjdXRlZCAvIHRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVGcm9tKGNvdmVyYWdlcykge1xuICAgIGxldCBmaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGZpbGUgb2YgT2JqZWN0LmtleXMoY292ZXJhZ2VzKSkge1xuICAgICAgZmlsZXMucHVzaCggbmV3IEZpbGVSZXN1bHQoZmlsZSwgY292ZXJhZ2VzW2ZpbGVdKSApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3VsdChmaWxlcyk7XG4gIH1cbn1cbiJdfQ==
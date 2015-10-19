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
//# sourceMappingURL=data:application/json;base64,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QUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLGFBQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4Qzs7O1dBQ2dCLG9CQUFDLFNBQVMsRUFBRTtBQUMzQixVQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZiw0QkFBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMseUhBQUU7Ozs7Ozs7Ozs7OztZQUFoQyxJQUFJOztBQUNYLGFBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7T0FDckQ7QUFDRCxhQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7U0EzQlUsTUFBTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgTGluZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdHMpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZShyZXN1bHRzKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG4gIGNhbGN1bGF0ZShyZXN1bHRzKSB7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy51bnVzZWQgPSAwO1xuICAgIHRoaXMuZXhlY3V0ZWQgPSAwO1xuXG4gICAgbGV0IGNhbGN1bGF0b3IgPSB0aGlzLmFwcGVuZC5iaW5kKHRoaXMpO1xuICAgIHJlc3VsdHMuZm9yRWFjaChjYWxjdWxhdG9yKTtcbiAgfVxuICBhcHBlbmQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgdGhpcy51bnVzZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmV4ZWN1dGVkKys7XG4gICAgICB0aGlzLnRvdGFsKys7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgcmVzdWx0cykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBMaW5lUmVzdWx0KHJlc3VsdHMpO1xuICB9XG4gIGdldCBmaWxlTmFtZSgpIHtcbiAgICByZXR1cm4gcGF0aC5yZWxhdGl2ZShwcm9jZXNzLmN3ZCgpLCB0aGlzLl9uYW1lKTtcbiAgfVxuICBnZXQgZXhlY3V0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC5leGVjdXRlZDtcbiAgfVxuICBnZXQgdW51c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudW51c2VkO1xuICB9XG4gIGdldCB0b3RhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LnRvdGFsO1xuICB9XG4gIGdldCBjb3ZlcmFnZSgpIHtcbiAgICBjb3ZlcmFnZSA9IHRoaXMuZXhlY3V0ZWQgLyB0aGlzLnRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihmaWxlcykge1xuICAgIHRoaXMuX2ZpbGVzID0gZmlsZXM7XG4gIH1cbiAgc2VuZFRvKHdyaXRlcikge1xuICAgIHdyaXRlci53cml0ZVJlcG9ydCh0aGlzKTtcbiAgfVxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzO1xuICB9XG4gIGdldCBjb3ZlcmFnZSgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgbGV0IHRvdGFsID0gZXhlY3V0ZWQgPSAwO1xuXG4gICAgZm9yIChmaWxlIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgIHRvdGFsICs9IGZpbGUudG90YWw7XG4gICAgICBleGVjdXRlZCArPSBmaWxlLmV4ZWN1dGVkO1xuICAgIH1cbiAgICBsZXQgY292ZXJhZ2UgPSBleGVjdXRlZCAvIHRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVGcm9tKGNvdmVyYWdlcykge1xuICAgIGxldCBmaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGZpbGUgb2YgT2JqZWN0LmtleXMoY292ZXJhZ2VzKSkge1xuICAgICAgZmlsZXMucHVzaCggbmV3IEZpbGVSZXN1bHQoZmlsZSwgY292ZXJhZ2VzW2ZpbGVdKSApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3VsdChmaWxlcyk7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,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R0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLGFBQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4Qzs7O1dBQ2dCLG9CQUFDLFNBQVMsRUFBRTtBQUMzQixVQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Ozs7OztBQUNmLDhCQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtSUFBRTtjQUFoQyxJQUFJOztBQUNYLGVBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxhQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7U0EzQlUsTUFBTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNsYXNzIExpbmVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzKSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocmVzdWx0cyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuICBjYWxjdWxhdGUocmVzdWx0cykge1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMudW51c2VkID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkID0gMDtcblxuICAgIGxldCBjYWxjdWxhdG9yID0gdGhpcy5hcHBlbmQuYmluZCh0aGlzKTtcbiAgICByZXN1bHRzLmZvckVhY2goY2FsY3VsYXRvcik7IFxuICB9XG4gIGFwcGVuZChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICB0aGlzLnVudXNlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCByZXN1bHRzKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IExpbmVSZXN1bHQocmVzdWx0cyk7XG4gIH1cbiAgZ2V0IGZpbGVOYW1lKCkge1xuICAgIHJldHVybiBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIHRoaXMuX25hbWUpO1xuICB9XG4gIGdldCBleGVjdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LmV4ZWN1dGVkO1xuICB9XG4gIGdldCB1bnVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC51bnVzZWQ7XG4gIH1cbiAgZ2V0IHRvdGFsKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudG90YWw7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGNvdmVyYWdlID0gdGhpcy5leGVjdXRlZCAvIHRoaXMudG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzKSB7XG4gICAgdGhpcy5fZmlsZXMgPSBmaWxlcztcbiAgfVxuICBzZW5kVG8od3JpdGVyKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwb3J0KHRoaXMpO1xuICB9XG4gIGdldCBmaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZXM7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBsZXQgdG90YWwgPSBleGVjdXRlZCA9IDA7XG5cbiAgICBmb3IgKGZpbGUgb2YgdGhpcy5maWxlcykge1xuICAgICAgdG90YWwgKz0gZmlsZS50b3RhbDtcbiAgICAgIGV4ZWN1dGVkICs9IGZpbGUuZXhlY3V0ZWQ7XG4gICAgfVxuICAgIGxldCBjb3ZlcmFnZSA9IGV4ZWN1dGVkIC8gdG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUZyb20oY292ZXJhZ2VzKSB7XG4gICAgbGV0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBPYmplY3Qua2V5cyhjb3ZlcmFnZXMpKSB7XG4gICAgICBmaWxlcy5wdXNoKCBuZXcgRmlsZVJlc3VsdChmaWxlLCBjb3ZlcmFnZXNbZmlsZV0pICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzdWx0KGZpbGVzKTtcbiAgfVxufVxuIl19
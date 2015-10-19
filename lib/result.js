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
      var total = 0;
      var executed = 0;

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
//# sourceMappingURL=data:application/json;base64,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QUM7T0FDM0I7QUFDRCxVQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN0QyxhQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7OztXQUNnQixvQkFBQyxTQUFTLEVBQUU7QUFDM0IsVUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsNEJBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlIQUFFOzs7Ozs7Ozs7Ozs7WUFBaEMsSUFBSTs7QUFDWCxhQUFLLENBQUMsSUFBSSxDQUFFLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxDQUFDO09BQ3JEO0FBQ0QsYUFBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7O1NBNUJVLE1BQU0iLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNsYXNzIExpbmVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzKSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocmVzdWx0cyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuICBjYWxjdWxhdGUocmVzdWx0cykge1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMudW51c2VkID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkID0gMDtcblxuICAgIGxldCBjYWxjdWxhdG9yID0gdGhpcy5hcHBlbmQuYmluZCh0aGlzKTtcbiAgICByZXN1bHRzLmZvckVhY2goY2FsY3VsYXRvcik7XG4gIH1cbiAgYXBwZW5kKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgIHRoaXMudW51c2VkKys7XG4gICAgICB0aGlzLnRvdGFsKys7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leGVjdXRlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJlc3VsdHMpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9yZXN1bHQgPSBuZXcgTGluZVJlc3VsdChyZXN1bHRzKTtcbiAgfVxuICBnZXQgZmlsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVsYXRpdmUocHJvY2Vzcy5jd2QoKSwgdGhpcy5fbmFtZSk7XG4gIH1cbiAgZ2V0IGV4ZWN1dGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQuZXhlY3V0ZWQ7XG4gIH1cbiAgZ2V0IHVudXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LnVudXNlZDtcbiAgfVxuICBnZXQgdG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC50b3RhbDtcbiAgfVxuICBnZXQgY292ZXJhZ2UoKSB7XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5leGVjdXRlZCAvIHRoaXMudG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzKSB7XG4gICAgdGhpcy5fZmlsZXMgPSBmaWxlcztcbiAgfVxuICBzZW5kVG8od3JpdGVyKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwb3J0KHRoaXMpO1xuICB9XG4gIGdldCBmaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZXM7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGxldCBleGVjdXRlZCA9IDA7XG5cbiAgICBmb3IgKGZpbGUgb2YgdGhpcy5maWxlcykge1xuICAgICAgdG90YWwgKz0gZmlsZS50b3RhbDtcbiAgICAgIGV4ZWN1dGVkICs9IGZpbGUuZXhlY3V0ZWQ7XG4gICAgfVxuICAgIGxldCBjb3ZlcmFnZSA9IGV4ZWN1dGVkIC8gdG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUZyb20oY292ZXJhZ2VzKSB7XG4gICAgbGV0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBPYmplY3Qua2V5cyhjb3ZlcmFnZXMpKSB7XG4gICAgICBmaWxlcy5wdXNoKCBuZXcgRmlsZVJlc3VsdChmaWxlLCBjb3ZlcmFnZXNbZmlsZV0pICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzdWx0KGZpbGVzKTtcbiAgfVxufVxuIl19
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = exports.FileResult = exports.LineResult = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineResult = exports.LineResult = (function () {
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

var FileResult = exports.FileResult = (function () {
  function FileResult(name, results) {
    _classCallCheck(this, FileResult);

    this._name = name;
    this._result = new LineResult(results);
  }

  _createClass(FileResult, [{
    key: 'fileName',
    get: function get() {
      return _path2.default.relative(process.cwd(), this._name);
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

var Result = exports.Result = (function () {
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
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
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
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLFVBQVUsV0FBVixVQUFVO0FBQ3JCLFdBRFcsVUFBVSxDQUNULE9BQU8sRUFBRTswQkFEVixVQUFVOztBQUVuQixRQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLFVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDckI7O2VBSlUsVUFBVTs7OEJBS1gsT0FBTyxFQUFFO0FBQ2pCLFVBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsVUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEIsVUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7O0FBRWxCLFVBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGFBQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0I7OzsyQkFDTSxNQUFNLEVBQUU7QUFDYixVQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDaEIsWUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO09BQ2QsTUFBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDL0IsWUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNkO0tBQ0Y7OztTQXJCVSxVQUFVOzs7SUF3QlYsVUFBVSxXQUFWLFVBQVU7QUFDckIsV0FEVyxVQUFVLENBQ1QsSUFBSSxFQUFFLE9BQU8sRUFBRTswQkFEaEIsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUN4Qzs7ZUFKVSxVQUFVOzt3QkFLTjtBQUNiLGFBQU8sZUFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqRDs7O3dCQUNjO0FBQ2IsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztLQUM5Qjs7O3dCQUNZO0FBQ1gsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUM1Qjs7O3dCQUNXO0FBQ1YsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUMzQjs7O3dCQUNjO0FBQ2IsVUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoRCxhQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7OztTQXBCVSxVQUFVOzs7SUF1QlYsTUFBTSxXQUFOLE1BQU07QUFDakIsV0FEVyxNQUFNLENBQ0wsS0FBSyxFQUFFOzBCQURSLE1BQU07O0FBRWYsUUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7R0FDckI7O2VBSFUsTUFBTTs7MkJBSVYsTUFBTSxFQUFFO0FBQ2IsWUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7O3dCQUNXO0FBQ1YsYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7d0JBQ2M7QUFDYixVQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsVUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0FBRWpCLDZCQUFhLElBQUksQ0FBQyxLQUFLLDhIQUFFO0FBQXBCLGNBQUk7O0FBQ1AsZUFBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEIsa0JBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsVUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdEMsYUFBTyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hDOzs7K0JBQ2lCLFNBQVMsRUFBRTtBQUMzQixVQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Ozs7OztBQUNmLDhCQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtSUFBRTtjQUFoQyxJQUFJOztBQUNYLGVBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxhQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7U0E1QlUsTUFBTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgTGluZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdHMpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZShyZXN1bHRzKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG4gIGNhbGN1bGF0ZShyZXN1bHRzKSB7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy51bnVzZWQgPSAwO1xuICAgIHRoaXMuZXhlY3V0ZWQgPSAwO1xuXG4gICAgbGV0IGNhbGN1bGF0b3IgPSB0aGlzLmFwcGVuZC5iaW5kKHRoaXMpO1xuICAgIHJlc3VsdHMuZm9yRWFjaChjYWxjdWxhdG9yKTtcbiAgfVxuICBhcHBlbmQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgdGhpcy51bnVzZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmV4ZWN1dGVkKys7XG4gICAgICB0aGlzLnRvdGFsKys7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgcmVzdWx0cykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBMaW5lUmVzdWx0KHJlc3VsdHMpO1xuICB9XG4gIGdldCBmaWxlTmFtZSgpIHtcbiAgICByZXR1cm4gcGF0aC5yZWxhdGl2ZShwcm9jZXNzLmN3ZCgpLCB0aGlzLl9uYW1lKTtcbiAgfVxuICBnZXQgZXhlY3V0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC5leGVjdXRlZDtcbiAgfVxuICBnZXQgdW51c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudW51c2VkO1xuICB9XG4gIGdldCB0b3RhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LnRvdGFsO1xuICB9XG4gIGdldCBjb3ZlcmFnZSgpIHtcbiAgICBsZXQgY292ZXJhZ2UgPSB0aGlzLmV4ZWN1dGVkIC8gdGhpcy50b3RhbCAqIDEwMDtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChjb3ZlcmFnZS50b0ZpeGVkKDIpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoZmlsZXMpIHtcbiAgICB0aGlzLl9maWxlcyA9IGZpbGVzO1xuICB9XG4gIHNlbmRUbyh3cml0ZXIpIHtcbiAgICB3cml0ZXIud3JpdGVSZXBvcnQodGhpcyk7XG4gIH1cbiAgZ2V0IGZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlcztcbiAgfVxuICBnZXQgY292ZXJhZ2UoKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgbGV0IGV4ZWN1dGVkID0gMDtcblxuICAgIGZvciAoZmlsZSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICB0b3RhbCArPSBmaWxlLnRvdGFsO1xuICAgICAgZXhlY3V0ZWQgKz0gZmlsZS5leGVjdXRlZDtcbiAgICB9XG4gICAgbGV0IGNvdmVyYWdlID0gZXhlY3V0ZWQgLyB0b3RhbCAqIDEwMDtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChjb3ZlcmFnZS50b0ZpeGVkKDIpKTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlRnJvbShjb3ZlcmFnZXMpIHtcbiAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBmaWxlIG9mIE9iamVjdC5rZXlzKGNvdmVyYWdlcykpIHtcbiAgICAgIGZpbGVzLnB1c2goIG5ldyBGaWxlUmVzdWx0KGZpbGUsIGNvdmVyYWdlc1tmaWxlXSkgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoZmlsZXMpO1xuICB9XG59XG4iXX0=
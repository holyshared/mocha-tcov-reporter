'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = exports.FileResult = exports.LineResult = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineResult = exports.LineResult = function () {
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
}();

var FileResult = exports.FileResult = function () {
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
}();

var Result = exports.Result = function () {
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
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYSxVQUFVLFdBQVYsVUFBVTtBQUNyQixXQURXLFVBQVUsQ0FDVCxPQUFPLEVBQUU7MEJBRFYsVUFBVTs7QUFFbkIsUUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QixVQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3JCOztlQUpVLFVBQVU7OzhCQUtYLE9BQU8sRUFBRTtBQUNqQixVQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLFVBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLFVBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixVQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxhQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdCOzs7MkJBQ00sTUFBTSxFQUFFO0FBQ2IsVUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNkLE1BQU0sSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQy9CLFlBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDZDtLQUNGOzs7U0FyQlUsVUFBVTs7O0lBd0JWLFVBQVUsV0FBVixVQUFVO0FBQ3JCLFdBRFcsVUFBVSxDQUNULElBQUksRUFBRSxPQUFPLEVBQUU7MEJBRGhCLFVBQVU7O0FBRW5CLFFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFFBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDeEM7O2VBSlUsVUFBVTs7d0JBS047QUFDYixhQUFPLGVBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakQ7Ozt3QkFDYztBQUNiLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDOUI7Ozt3QkFDWTtBQUNYLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FDNUI7Ozt3QkFDVztBQUNWLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDM0I7Ozt3QkFDYztBQUNiLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDaEQsYUFBTyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hDOzs7U0FwQlUsVUFBVTs7O0lBdUJWLE1BQU0sV0FBTixNQUFNO0FBQ2pCLFdBRFcsTUFBTSxDQUNMLEtBQUssRUFBRTswQkFEUixNQUFNOztBQUVmLFFBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0dBQ3JCOztlQUhVLE1BQU07OzJCQUlWLE1BQU0sRUFBRTtBQUNiLFlBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozt3QkFDVztBQUNWLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7O3dCQUNjO0FBQ2IsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLFVBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7Ozs7OztBQUVqQiw2QkFBYSxJQUFJLENBQUMsS0FBSyw4SEFBRTtBQUFwQixjQUFJOztBQUNQLGVBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3BCLGtCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMzQjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFVBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLGFBQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4Qzs7OytCQUNpQixTQUFTLEVBQUU7QUFDM0IsVUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFDZiw4QkFBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUlBQUU7Y0FBaEMsSUFBSTs7QUFDWCxlQUFLLENBQUMsSUFBSSxDQUFFLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsYUFBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7O1NBNUJVLE1BQU0iLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjbGFzcyBMaW5lUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocmVzdWx0cykge1xuICAgIHRoaXMuY2FsY3VsYXRlKHJlc3VsdHMpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbiAgY2FsY3VsYXRlKHJlc3VsdHMpIHtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLnVudXNlZCA9IDA7XG4gICAgdGhpcy5leGVjdXRlZCA9IDA7XG5cbiAgICBsZXQgY2FsY3VsYXRvciA9IHRoaXMuYXBwZW5kLmJpbmQodGhpcyk7XG4gICAgcmVzdWx0cy5mb3JFYWNoKGNhbGN1bGF0b3IpO1xuICB9XG4gIGFwcGVuZChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICB0aGlzLnVudXNlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZWQrKztcbiAgICAgIHRoaXMudG90YWwrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCByZXN1bHRzKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IExpbmVSZXN1bHQocmVzdWx0cyk7XG4gIH1cbiAgZ2V0IGZpbGVOYW1lKCkge1xuICAgIHJldHVybiBwYXRoLnJlbGF0aXZlKHByb2Nlc3MuY3dkKCksIHRoaXMuX25hbWUpO1xuICB9XG4gIGdldCBleGVjdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LmV4ZWN1dGVkO1xuICB9XG4gIGdldCB1bnVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC51bnVzZWQ7XG4gIH1cbiAgZ2V0IHRvdGFsKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQudG90YWw7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBjb3ZlcmFnZSA9IHRoaXMuZXhlY3V0ZWQgLyB0aGlzLnRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihmaWxlcykge1xuICAgIHRoaXMuX2ZpbGVzID0gZmlsZXM7XG4gIH1cbiAgc2VuZFRvKHdyaXRlcikge1xuICAgIHdyaXRlci53cml0ZVJlcG9ydCh0aGlzKTtcbiAgfVxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzO1xuICB9XG4gIGdldCBjb3ZlcmFnZSgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBsZXQgZXhlY3V0ZWQgPSAwO1xuXG4gICAgZm9yIChmaWxlIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgIHRvdGFsICs9IGZpbGUudG90YWw7XG4gICAgICBleGVjdXRlZCArPSBmaWxlLmV4ZWN1dGVkO1xuICAgIH1cbiAgICBsZXQgY292ZXJhZ2UgPSBleGVjdXRlZCAvIHRvdGFsICogMTAwO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvdmVyYWdlLnRvRml4ZWQoMikpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVGcm9tKGNvdmVyYWdlcykge1xuICAgIGxldCBmaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGZpbGUgb2YgT2JqZWN0LmtleXMoY292ZXJhZ2VzKSkge1xuICAgICAgZmlsZXMucHVzaCggbmV3IEZpbGVSZXN1bHQoZmlsZSwgY292ZXJhZ2VzW2ZpbGVdKSApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3VsdChmaWxlcyk7XG4gIH1cbn1cbiJdfQ==
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportWriter = undefined;

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _sprintfJs = require('sprintf-js');

var _object = require('lodash/object');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var color = _mocha2.default.reporters.Base.color;

var writer = {
  write: function write(text) {
    process.stdout.write(text);
  },
  writeln: function writeln(text) {
    this.write(text);
    this.writeEOL();
  },
  writeEOL: function writeEOL() {
    this.write("\n");
  }
};

exports.default = writer;

var ReportWriter = exports.ReportWriter = (function () {
  function ReportWriter(options) {
    _classCallCheck(this, ReportWriter);

    this.defaultOptions = {
      critical: 30.0,
      satisfactory: 70.0
    };
    this.mergeOptions(options);
  }

  _createClass(ReportWriter, [{
    key: 'mergeOptions',
    value: function mergeOptions(options) {
      this.options = _object2.default.merge({}, this.defaultOptions, options);
      this.options.critical = parseFloat(this.options.critical);
      this.options.satisfactory = parseFloat(this.options.satisfactory);
    }
  }, {
    key: 'writeReport',
    value: function writeReport(result) {
      writer.writeln("\nCode Coverage Results:\n");

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = result.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;

          this.formatFileResult(file);
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

      var coverage = this.colorize(result.coverage);

      writer.writeEOL();
      writer.writeln("Total Coverage: " + coverage);
      writer.writeEOL();
    }
  }, {
    key: 'formatFileResult',
    value: function formatFileResult(file) {
      var coverage = this.colorize(file.coverage);
      this.writeFileResult(coverage, file.executed, file.total, file.fileName);
    }
  }, {
    key: 'colorize',
    value: function colorize(coverage) {
      var percent = (0, _sprintfJs.vsprintf)('%6.2f%%', [coverage]);

      if (coverage >= this.options.satisfactory) {
        return color('green', percent);
      } else if (coverage < this.options.critical) {
        return color('fail', percent);
      } else {
        return color('bright yellow', percent);
      }
    }
  }, {
    key: 'writeFileResult',
    value: function writeFileResult() {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      var output = (0, _sprintfJs.vsprintf)('%s (%2d/%2d) %s', values);
      writer.writeln(output);
    }
  }]);

  return ReportWriter;
})();
//# sourceMappingURL=data:application/json;base64,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LENBQUMsQ0FBQztPQUN4QztLQUNGOzs7c0NBQzBCO3dDQUFSLE1BQU07QUFBTixjQUFNOzs7QUFDdkIsVUFBSSxNQUFNLEdBQUcsZUE3RFIsUUFBUSxFQTZETyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxZQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOzs7U0EzQ1UsWUFBWSIsImZpbGUiOiJ3cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9jaGEgZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHsgdnNwcmludGYgYXMgZm9ybWF0IH0gZnJvbSAnc3ByaW50Zi1qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gvb2JqZWN0JztcblxubGV0IGNvbG9yID0gbW9jaGEucmVwb3J0ZXJzLkJhc2UuY29sb3I7XG5cbmxldCB3cml0ZXIgPSB7XG4gIHdyaXRlKHRleHQpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh0ZXh0KTtcbiAgfSxcbiAgd3JpdGVsbih0ZXh0KSB7XG4gICAgdGhpcy53cml0ZSh0ZXh0KTtcbiAgICB0aGlzLndyaXRlRU9MKCk7XG4gIH0sXG4gIHdyaXRlRU9MKCkge1xuICAgIHRoaXMud3JpdGUoXCJcXG5cIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyaXRlcjtcblxuZXhwb3J0IGNsYXNzIFJlcG9ydFdyaXRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgY3JpdGljYWw6IDMwLjAsXG4gICAgICBzYXRpc2ZhY3Rvcnk6IDcwLjBcbiAgICB9O1xuICAgIHRoaXMubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuICB9XG4gIG1lcmdlT3B0aW9ucyAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IF8ubWVyZ2Uoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5jcml0aWNhbCA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLmNyaXRpY2FsKTtcbiAgICB0aGlzLm9wdGlvbnMuc2F0aXNmYWN0b3J5ID0gcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuc2F0aXNmYWN0b3J5KTtcbiAgfVxuICB3cml0ZVJlcG9ydChyZXN1bHQpIHtcbiAgICB3cml0ZXIud3JpdGVsbihcIlxcbkNvZGUgQ292ZXJhZ2UgUmVzdWx0czpcXG5cIik7XG5cbiAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3VsdC5maWxlcykge1xuICAgICAgdGhpcy5mb3JtYXRGaWxlUmVzdWx0KGZpbGUpO1xuICAgIH1cbiAgICBsZXQgY292ZXJhZ2UgPSB0aGlzLmNvbG9yaXplKHJlc3VsdC5jb3ZlcmFnZSk7XG5cbiAgICB3cml0ZXIud3JpdGVFT0woKTtcbiAgICB3cml0ZXIud3JpdGVsbihcIlRvdGFsIENvdmVyYWdlOiBcIiArIGNvdmVyYWdlKTtcbiAgICB3cml0ZXIud3JpdGVFT0woKTtcbiAgfVxuICBmb3JtYXRGaWxlUmVzdWx0KGZpbGUpIHtcbiAgICBsZXQgY292ZXJhZ2UgPSB0aGlzLmNvbG9yaXplKGZpbGUuY292ZXJhZ2UpO1xuICAgIHRoaXMud3JpdGVGaWxlUmVzdWx0KGNvdmVyYWdlLCBmaWxlLmV4ZWN1dGVkLCBmaWxlLnRvdGFsLCBmaWxlLmZpbGVOYW1lKTtcbiAgfVxuICBjb2xvcml6ZShjb3ZlcmFnZSkge1xuICAgIGxldCBwZXJjZW50ID0gZm9ybWF0KCAnJTYuMmYlJScsIFsgY292ZXJhZ2UgXSk7XG5cbiAgICBpZiAoY292ZXJhZ2UgPj0gdGhpcy5vcHRpb25zLnNhdGlzZmFjdG9yeSkge1xuICAgICAgcmV0dXJuIGNvbG9yKCdncmVlbicsIHBlcmNlbnQpO1xuICAgIH0gZWxzZSBpZiAoY292ZXJhZ2UgPCB0aGlzLm9wdGlvbnMuY3JpdGljYWwpIHtcbiAgICAgIHJldHVybiBjb2xvcignZmFpbCcsIHBlcmNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sb3IoJ2JyaWdodCB5ZWxsb3cnLCBwZXJjZW50KTtcbiAgICB9XG4gIH1cbiAgd3JpdGVGaWxlUmVzdWx0KC4uLnZhbHVlcykge1xuICAgIGxldCBvdXRwdXQgPSBmb3JtYXQoJyVzICglMmQvJTJkKSAlcycsIHZhbHVlcyk7XG4gICAgd3JpdGVyLndyaXRlbG4ob3V0cHV0KTtcbiAgfVxufVxuIl19
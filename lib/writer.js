'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _sprintfJs = require('sprintf-js');

var _lodashObject = require('lodash/object');

var _lodashObject2 = _interopRequireDefault(_lodashObject);

var color = _mocha2['default'].reporters.Base.color;

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

exports['default'] = writer;

var ReportWriter = (function () {
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
      this.options = _lodashObject2['default'].merge({}, this.defaultOptions, options);
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
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
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

exports.ReportWriter = ReportWriter;
//# sourceMappingURL=data:application/json;base64,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Qy9CLE1BQU07QUFDTCxlQUFPLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDeEM7S0FDRjs7O1dBQ2MsMkJBQVk7d0NBQVIsTUFBTTtBQUFOLGNBQU07OztBQUN2QixVQUFJLE1BQU0sR0FBRyx5QkFBTyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxZQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCOzs7U0EzQ1UsWUFBWSIsImZpbGUiOiJ3cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9jaGEgZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHsgdnNwcmludGYgYXMgZm9ybWF0IH0gZnJvbSAnc3ByaW50Zi1qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gvb2JqZWN0JztcblxubGV0IGNvbG9yID0gbW9jaGEucmVwb3J0ZXJzLkJhc2UuY29sb3I7XG5cbmxldCB3cml0ZXIgPSB7XG4gIHdyaXRlKHRleHQpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh0ZXh0KTsgXG4gIH0sXG4gIHdyaXRlbG4odGV4dCkge1xuICAgIHRoaXMud3JpdGUodGV4dCk7XG4gICAgdGhpcy53cml0ZUVPTCgpO1xuICB9LFxuICB3cml0ZUVPTCgpIHtcbiAgICB0aGlzLndyaXRlKFwiXFxuXCIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cml0ZXI7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRXcml0ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGNyaXRpY2FsOiAzMC4wLFxuICAgICAgc2F0aXNmYWN0b3J5OiA3MC4wXG4gICAgfTtcbiAgICB0aGlzLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuICBtZXJnZU9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBfLm1lcmdlKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMuY3JpdGljYWwgPSBwYXJzZUZsb2F0KHRoaXMub3B0aW9ucy5jcml0aWNhbCk7XG4gICAgdGhpcy5vcHRpb25zLnNhdGlzZmFjdG9yeSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnNhdGlzZmFjdG9yeSk7XG4gIH1cbiAgd3JpdGVSZXBvcnQocmVzdWx0KSB7XG4gICAgd3JpdGVyLndyaXRlbG4oXCJcXG5Db2RlIENvdmVyYWdlIFJlc3VsdHM6XFxuXCIpO1xuXG4gICAgZm9yIChsZXQgZmlsZSBvZiByZXN1bHQuZmlsZXMpIHtcbiAgICAgIHRoaXMuZm9ybWF0RmlsZVJlc3VsdChmaWxlKTtcbiAgICB9XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5jb2xvcml6ZShyZXN1bHQuY292ZXJhZ2UpO1xuXG4gICAgd3JpdGVyLndyaXRlRU9MKCk7XG4gICAgd3JpdGVyLndyaXRlbG4oXCJUb3RhbCBDb3ZlcmFnZTogXCIgKyBjb3ZlcmFnZSk7XG4gICAgd3JpdGVyLndyaXRlRU9MKCk7XG4gIH1cbiAgZm9ybWF0RmlsZVJlc3VsdChmaWxlKSB7XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5jb2xvcml6ZShmaWxlLmNvdmVyYWdlKTtcbiAgICB0aGlzLndyaXRlRmlsZVJlc3VsdChjb3ZlcmFnZSwgZmlsZS5leGVjdXRlZCwgZmlsZS50b3RhbCwgZmlsZS5maWxlTmFtZSk7XG4gIH1cbiAgY29sb3JpemUoY292ZXJhZ2UpIHtcbiAgICBsZXQgcGVyY2VudCA9IGZvcm1hdCggJyU2LjJmJSUnLCBbIGNvdmVyYWdlIF0pO1xuXG4gICAgaWYgKGNvdmVyYWdlID49IHRoaXMub3B0aW9ucy5zYXRpc2ZhY3RvcnkpIHtcbiAgICAgIHJldHVybiBjb2xvcignZ3JlZW4nLCBwZXJjZW50KTtcbiAgICB9IGVsc2UgaWYgKGNvdmVyYWdlIDwgdGhpcy5vcHRpb25zLmNyaXRpY2FsKSB7XG4gICAgICByZXR1cm4gY29sb3IoJ2ZhaWwnLCBwZXJjZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbG9yKCdicmlnaHQgeWVsbG93JywgcGVyY2VudCk7XG4gICAgfVxuICB9XG4gIHdyaXRlRmlsZVJlc3VsdCguLi52YWx1ZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0gZm9ybWF0KCclcyAoJTJkLyUyZCkgJXMnLCB2YWx1ZXMpO1xuICAgIHdyaXRlci53cml0ZWxuKG91dHB1dCk7XG4gIH1cbn1cbiJdfQ==
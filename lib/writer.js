'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

//import { color } from 'mocha/reporters/base';

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
      console.log(percent);
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
//# sourceMappingURL=data:application/json;base64,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USxFQUFFO0FBQzNDLGVBQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUMvQixNQUFNO0FBQ0wsZUFBTyxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ3hDO0tBQ0Y7OztXQUNjLDJCQUFZO3dDQUFSLE1BQU07QUFBTixjQUFNOzs7QUFDdkIsVUFBSSxNQUFNLEdBQUcseUJBQU8saUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsWUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qjs7O1NBM0NVLFlBQVkiLCJmaWxlIjoid3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbW9jaGEgZnJvbSAnbW9jaGEnO1xuLy9pbXBvcnQgeyBjb2xvciB9IGZyb20gJ21vY2hhL3JlcG9ydGVycy9iYXNlJztcbmltcG9ydCB7IHZzcHJpbnRmIGFzIGZvcm1hdCB9IGZyb20gJ3NwcmludGYtanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoL29iamVjdCc7XG5cbmxldCBjb2xvciA9IG1vY2hhLnJlcG9ydGVycy5CYXNlLmNvbG9yO1xuXG5sZXQgd3JpdGVyID0ge1xuICB3cml0ZSh0ZXh0KSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodGV4dCk7IFxuICB9LFxuICB3cml0ZWxuKHRleHQpIHtcbiAgICB0aGlzLndyaXRlKHRleHQpO1xuICAgIHRoaXMud3JpdGVFT0woKTtcbiAgfSxcbiAgd3JpdGVFT0woKSB7XG4gICAgdGhpcy53cml0ZShcIlxcblwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JpdGVyO1xuXG5leHBvcnQgY2xhc3MgUmVwb3J0V3JpdGVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBjcml0aWNhbDogMzAuMCxcbiAgICAgIHNhdGlzZmFjdG9yeTogNzAuMFxuICAgIH07XG4gICAgdGhpcy5tZXJnZU9wdGlvbnMob3B0aW9ucyk7XG4gIH1cbiAgbWVyZ2VPcHRpb25zIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gXy5tZXJnZSh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmNyaXRpY2FsID0gcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuY3JpdGljYWwpO1xuICAgIHRoaXMub3B0aW9ucy5zYXRpc2ZhY3RvcnkgPSBwYXJzZUZsb2F0KHRoaXMub3B0aW9ucy5zYXRpc2ZhY3RvcnkpO1xuICB9XG4gIHdyaXRlUmVwb3J0KHJlc3VsdCkge1xuICAgIHdyaXRlci53cml0ZWxuKFwiXFxuQ29kZSBDb3ZlcmFnZSBSZXN1bHRzOlxcblwiKTtcblxuICAgIGZvciAobGV0IGZpbGUgb2YgcmVzdWx0LmZpbGVzKSB7XG4gICAgICB0aGlzLmZvcm1hdEZpbGVSZXN1bHQoZmlsZSk7XG4gICAgfVxuICAgIGxldCBjb3ZlcmFnZSA9IHRoaXMuY29sb3JpemUocmVzdWx0LmNvdmVyYWdlKTtcblxuICAgIHdyaXRlci53cml0ZUVPTCgpO1xuICAgIHdyaXRlci53cml0ZWxuKFwiVG90YWwgQ292ZXJhZ2U6IFwiICsgY292ZXJhZ2UpO1xuICAgIHdyaXRlci53cml0ZUVPTCgpO1xuICB9XG4gIGZvcm1hdEZpbGVSZXN1bHQoZmlsZSkge1xuICAgIGxldCBjb3ZlcmFnZSA9IHRoaXMuY29sb3JpemUoZmlsZS5jb3ZlcmFnZSk7XG4gICAgdGhpcy53cml0ZUZpbGVSZXN1bHQoY292ZXJhZ2UsIGZpbGUuZXhlY3V0ZWQsIGZpbGUudG90YWwsIGZpbGUuZmlsZU5hbWUpO1xuICB9XG4gIGNvbG9yaXplKGNvdmVyYWdlKSB7XG4gICAgbGV0IHBlcmNlbnQgPSBmb3JtYXQoICclNi4yZiUlJywgWyBjb3ZlcmFnZSBdKTtcbmNvbnNvbGUubG9nKHBlcmNlbnQpO1xuICAgIGlmIChjb3ZlcmFnZSA+PSB0aGlzLm9wdGlvbnMuc2F0aXNmYWN0b3J5KSB7XG4gICAgICByZXR1cm4gY29sb3IoJ2dyZWVuJywgcGVyY2VudCk7XG4gICAgfSBlbHNlIGlmIChjb3ZlcmFnZSA8IHRoaXMub3B0aW9ucy5jcml0aWNhbCkge1xuICAgICAgcmV0dXJuIGNvbG9yKCdmYWlsJywgcGVyY2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2xvcignYnJpZ2h0IHllbGxvdycsIHBlcmNlbnQpO1xuICAgIH1cbiAgfVxuICB3cml0ZUZpbGVSZXN1bHQoLi4udmFsdWVzKSB7XG4gICAgbGV0IG91dHB1dCA9IGZvcm1hdCgnJXMgKCUyZC8lMmQpICVzJywgdmFsdWVzKTtcbiAgICB3cml0ZXIud3JpdGVsbihvdXRwdXQpO1xuICB9XG59XG4iXX0=
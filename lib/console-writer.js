var exports, stdout, write, writeEOL, writeln;

stdout = process.stdout;

exports = module.exports;

write = function(text) {
  return stdout.write(text);
};

writeEOL = function() {
  return write("\n");
};

writeln = function(text) {
  write(text);
  return writeEOL();
};

exports.writeln = writeln;

exports.writeEOL = writeEOL;

//# sourceMappingURL=../sourcemap/console-writer.js.map
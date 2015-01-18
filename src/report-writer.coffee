stdout = process.stdout
exports = module.exports

write = (text) ->
  stdout.write text

writeEOL = ->
  write "\n"

writeln = (text) ->
  write text
  writeEOL()

exports.writeln = writeln
exports.writeEOL = writeEOL

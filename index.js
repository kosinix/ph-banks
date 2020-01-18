const fs = require('fs')

let banks = fs.readFileSync('src/banks.json', { encoding: 'utf8' })

module.exports = banks
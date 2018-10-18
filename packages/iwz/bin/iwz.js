#!/usr/bin/env node

process.title = 'iwz'

const program = require('commander')

// program
//   .command('rm <dir>')
//   .option('-r, --recursive', 'Remove recursively')
//   .action(function(dir, cmd) {
//     console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
//   })

// program
//   .command('init <dir>')
//   .option('-t, --tpl', 'Remove recursively')
//   .action(function(dir, cmd) {
//     console.log('init ' + dir + (cmd.tpl ? cmd.tpl : ''))
//   })

require('./iwz-init')
require('./iwz-build')
require('./iwz-publish')

// example 1
// program
//   .version('0.1.0')
//   .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
//   .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
//   .parse(process.argv)

// console.log(' size: %j', program.size)
// console.log(' drink: %j', program.drink)

// example 2
// program
//   .version('0.1.0')
//   .arguments('<cmd> [env]')
//   .action(function(cmd, env) {
//     cmdValue = cmd
//     envValue = env
//   })

// program.parse(process.argv)

// program
//   .version('0.1.0')
//   .command('install [name]', 'install one or more packages')
//   .action(function(cmd, env) {
//     console.log(cmd)
//   })
//   .command('search [query]', 'search with optional query')
//   .command('list', 'list packages installed', { isDefault: true })

// program.on('install', function(cmd, env) {
//   console.log(cmd)
// })

// // example 4
// program.on('--help', function() {
//   console.log('  Examples:')
//   console.log('')
//   console.log('    $ custom-help --help')
//   console.log('    $ custom-help -h')
//   console.log('')
// })

program.parse(process.argv)

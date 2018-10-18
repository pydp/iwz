#!/usr/bin/env node

process.title = 'iwz'

const program = require('commander')
const Utils = require('@iwz/utils')
const init = require('@iwz/init')
// const build = require('@iwz/build')
const publish = require('@iwz/publish')

const cmdName = process.argv[2]
// Utils.logYellow(process.argv)

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

/**
 * init
 */
if (cmdName === 'init') {
  program
    .command('init')
    .description('初始化项目')
    .alias('i')
    .action(function(cmd) {
      init(cmd)
    })
}

/*
example:
(1) 指定项目名、版本号
iwz init kline 1.0

(2) 同时指定项目目录
iwz init kline 1.0 -d award/kline/1.0
*/

// require('./iwz-build')

/**
 * build
 */
if (cmdName === 'build') {
  program
    .command('build')
    .description('开发产出文件')
    .option('-w, --watch', 'watch files change')
    .option('-t, --type <type>', 'file type')
    .alias('b')
    .action(function(cmd) {
      console.log('build')
      // build(cmd)
    })
}

/**
 * publish
 */
if (cmdName === 'publish') {
  program
    .command('publish <appVerion>')
    .description('发布产出')
    .option('-v, --version <version>', 'publish version')
    .option('-t, --type <type>', 'file type')
    .option('-h, --hash <hash>', 'hash length')
    .alias('p')
    .action(function(appVerion, cmd) {
      publish(appVerion, cmd)
    })
}

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

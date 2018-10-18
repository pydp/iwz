/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')

exports.init = require('./ik-init')
exports.build = require('./ik-build')
exports.publish = require('./ik-publish')

// const isString = it => typeof it === 'string'

// // 项目: 初始化
// exports.init = function(name, version, cmd) {
//   const dir = cmd.dir && isString(cmd.dir) ? cmd.dir : `${name}/${version}`
//   // const version = cmd.version && isString(cmd.version) ? cmd.version : '1.0'
//   const tpl = cmd.tpl || 'standard'
//   const src = `./src/${dir}/`
//   console.log(
//     chalk.red(`
//     name: ${name}
//     version: ${version}
//     template: ${tpl}
//     dir: ${dir}
//     src: ${src}
//   `)
//   )
// }

// // 项目: 构建
// exports.build = function(cmd) {
//   const type = cmd.type && isString(cmd.type) ? cmd.type : '*'
//   const watch = cmd.watch
//   console.log(chalk.blue(`type: ${type}\nwatch: ${!!watch}`))
// }

// // 项目: 发布
// exports.publish = function(appVerion, cmd) {
//   const type = cmd.type && isString(cmd.type) ? cmd.type : '*'
//   const hash = cmd.hash && isString(cmd.hash) ? cmd.hash : '5'
//   console.log(
//     chalk.green(`type: ${type}\nhash: ${!!hash}\nversion: ${appVerion}`)
//   )
// }

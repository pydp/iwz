/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')

const xp = require('./xp')

// 项目: 构建
module.exports = function(cmd) {
  const type = cmd.type && xp.isString(cmd.type) ? cmd.type : '*'
  const watch = cmd.watch
  console.log(chalk.blue(`type: ${type}\nwatch: ${!!watch}`))
}

/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')
const xp = require('./xp')

// 项目: 发布
module.exports = function(appVerion, cmd) {
  const type = cmd.type && xp.isString(cmd.type) ? cmd.type : '*'
  const hash = cmd.hash && xp.isString(cmd.hash) ? cmd.hash : '5'
  console.log(
    chalk.green(`type: ${type}\nhash: ${!!hash}\nversion: ${appVerion}`)
  )
}

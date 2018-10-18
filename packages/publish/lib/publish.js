'use strict'

'use strict'

/**
 * Created by scriptpower on 10/18/2018.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')
const Utils = require('@iwz/utils')

// 项目: 发布
module.exports = function(appVerion, cmd) {
  const type = cmd.type && Utils.isString(cmd.type) ? cmd.type : '*'
  const hash = cmd.hash && Utils.isString(cmd.hash) ? cmd.hash : '5'
  console.log(
    chalk.green(`type: ${type}\nhash: ${!!hash}\nversion: ${appVerion}`)
  )
}

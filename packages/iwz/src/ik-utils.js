/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer')
const xp = require('./xp')

const { isFunction, isObjectLike, forEach } = xp

const { red, green, blue, yellow, magenta, cyan, white, gray } = chalk
const log = colorName => {
  const color = isFunction(colorName)
    ? colorName
    : isFunction(chalk[colorName])
      ? chalk[colorName]
      : chalk.red
  return it => {
    const msgs = []

    if (isObjectLike(it)) {
      forEach((value, key) => {
        console.log(gray(key + ': ') + color(value))
      }, it)
    } else {
      console.log(color(`${it}`))
    }
    // console.log(msgs.join('\n'))
  }
}

const M = { red, green, blue, yellow, magenta, cyan, white, gray }
forEach((color, key) => {
  key = key.charAt(0).toUpperCase() + key.slice(1)
  M[`log${key}`] = log(color)
  M.color = color
}, M)

M.log = log;

M.getPath = () => ({
  __dirname: __dirname,
  __filename: __filename,
  cwd: process.cwd()
})

M.logRed(M.getPath())

module.exports = M

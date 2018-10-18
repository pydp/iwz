'use strict'

/**
 * Created by scriptpower on 10/18/2018.
 */

// const fs = require('fs-extra')
const chalk = require('chalk')

const isString = it => typeof it === 'string'
const isFunction = it => typeof it === 'function'
const isNil = it => it === null || it === void 0
const isObjectLike = it => it && typeof it === 'object'

const has = (key, it) => !isNil(it) && it.hasOwnProperty(key)

const forIn = (cb, it) => {
  for (const key in it) {
    if (has(key, it)) {
      cb(it[key], key)
    }
  }
}
const forEach = (cb, it) => {
  if (it && it.forEach) {
    it.forEach(cb)
  } else {
    forIn(cb, it)
  }
}

const { red, green, blue, yellow, magenta, cyan, white, gray } = chalk

const colorLog = colorName => {
  const color = isFunction(colorName)
    ? colorName
    : isFunction(chalk[colorName])
      ? chalk[colorName]
      : chalk.red
  return it => {
    const msg = isObjectLike(it) ? `${JSON.stringify(it, null, 2)}` : `${it}`
    console.log(`${color(msg)}`)
  }
}

const logError = colorLog('red')
const logWarn = colorLog('yellow')
const logInfo = colorLog('blue')

const logRed = colorLog('red')
const logGreen = colorLog('green')
const logBlue = colorLog('blue')
const logYellow = colorLog('yellow')
const logMagenta = colorLog('magenta')
const logCyan = colorLog('cyan')
const logWhite = colorLog('white')
const logGray = colorLog('gray')

const Utils = {
  // Utils
  forIn,
  forEach,
  isFunction,
  isString,
  isNil,
  isObjectLike,
  has,

  // color
  red,
  green,
  blue,
  yellow,
  magenta,
  cyan,
  white,
  gray,

  // colorLog
  logError,
  logWarn,
  logInfo,
  logRed,
  logGreen,
  logBlue,
  logYellow,
  logMagenta,
  logCyan,
  logWhite,
  logGray
}

Utils.log = colorLog

Utils.getPaths = () => ({
  __dirname: __dirname,
  __filename: __filename,
  cwd: process.cwd()
})

// Utils.logWarn(Utils.getPaths())

module.exports = Utils

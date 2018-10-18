#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const iwz = require('../src/index')

/**
 * init
 */
program
  .command('init')
  .description('初始化项目')
  .alias('i')
  .action(function(cmd) {
    iwz.init(cmd)
  })

/*
example:
(1) 指定项目名、版本号
iwz init kline 1.0

(2) 同时指定项目目录
iwz init kline 1.0 -d award/kline/1.0
*/

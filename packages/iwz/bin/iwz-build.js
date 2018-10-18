#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const iwz = require('../src/index')
/**
 * build
 */
program
  .command('build')
  .description('开发产出文件')
  .option('-w, --watch', 'watch files change')
  .option('-t, --type <type>', 'file type')
  .alias('b')
  .action(function(cmd) {
    iwz.build(cmd)
  })

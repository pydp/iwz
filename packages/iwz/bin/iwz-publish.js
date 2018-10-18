#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const iwz = require('../src/index')

program
  .command('publish <appVerion>')
  .description('发布产出')
  .option('-v, --version <version>', 'publish version')
  .option('-t, --type <type>', 'file type')
  .option('-h, --hash <hash>', 'hash length')
  .alias('p')
  .action(function(appVerion, cmd) {
    iwz.publish(appVerion, cmd)
  })

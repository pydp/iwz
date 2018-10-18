'use strict'

/**
 * Created by scriptpower on 10/18/2018.
 */

// const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const Utils = require('@iwz/utils')

const tplChoices = [
  { name: 'es6', value: 'es6' },
  { name: 'typescript', value: 'typescript' },
  { name: 'vue', value: 'vue' },
  { name: 'smarty', value: 'smarty' },
  { name: 'miniProgram', value: 'xcx' }
]

const askMap = {
  appName: {
    name: 'appName',
    message: `Input appName:`,
    type: 'input',
    extra: 'demo'
  },
  appVersion: {
    name: 'appVersion',
    message: `Input appVersion:`,
    type: 'input',
    extra: 'demo'
  },
  appDir: {
    name: 'appDir',
    message: `Input appDir:`,
    type: 'input',
    extra: 'demo'
  },
  tplName: {
    name: 'tplName',
    message: 'Select template:',
    type: 'list',
    // choices: [...tplChoices, { name: 'custom', value: 'custom' }]
    choices: [...tplChoices]
  },
  customTpl: {
    name: 'customTpl',
    message: 'Input your template:',
    type: 'input',
    when: answers => answers.tplName === 'custom'
  }
}

const init = async cmd => {
  let { appName, appVersion, appDir } = await inquirer.prompt([
    askMap.appName,
    askMap.appVersion,
    askMap.appDir
  ])
  appName = appName || 'iwz-project-name'
  appVersion = appVersion || '0.0.0'
  // if (!appDir) {
  //   appDir = `${appVersion}`.split('.').slice(0, 2).join('.')
  // }
  const srcDir = appDir ? path.join(process.cwd(), appDir) : process.cwd()
  const pkgFile = `${srcDir}/package.json`
  if (fs.existsSync(pkgFile)) {
    Utils.logYellow(`exists: ${pkgFile}`)
    return
  }
  Utils.logYellow(`srcDir: ${srcDir}`)
  let { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `create this srcDir ? (yes/no)`,
      type: 'input',
      extra: 'demo'
    }
  ])
  if (yes !== 'yes') {
    return
  }

  let { tplName } = await inquirer.prompt([
    askMap.tplName //,
    // askMap.customTpl
  ])

  const tplDir = `${path.join(__dirname, '../templates')}/${tplName}`
  Utils.logGreen({ appName, appVersion, appDir, tplName, tplDir, srcDir })

  await fs.copy(tplDir, srcDir)
  await fs.readJSON(pkgFile).then(pkg => {
    pkg.name = appName
    pkg.version = appVersion
    Utils.logGreen(pkg)
    fs.writeJsonSync(pkgFile, pkg, { spaces: 2, eol: '\n' })
  })
  Utils.logGreen(`init success: ${srcDir}`)
  Utils.logYellow(`cd ${appDir}`)
  Utils.logYellow(`npm i`)
  Utils.logYellow(`npm run test`)
  // console.log(
  //   chalk.red(
  //     `appName: ${appName}\nappVersion: ${appVersion}\nappDir: ${appDir}\nplName: ${tplName}`
  //   )
  // )
}

// 项目: 初始化
module.exports = init

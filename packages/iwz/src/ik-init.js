/**
 * Created by xushaoping on 17/10/11.
 */

// const fs = require('fs-extra')
const path = require('path')
const child_process = require('child_process')
const chalk = require('chalk')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const xp = require('./xp')
const ik = require('./ik-utils')

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

// 项目: 初始化
module.exports = async (cmd) => {
  let { appName, appVersion, appDir } = await inquirer.prompt([
    askMap.appName,
    askMap.appVersion,
    askMap.appDir
  ])
  appName = appName || 'ik-demo'
  appVersion = appVersion || '0.0.1'
  // if (!appDir) {
  //   appDir = `${appVersion}`.split('.').slice(0, 2).join('.')
  // }
  const srcDir = appDir ? path.join(process.cwd(), appDir) : process.cwd()
  const pkgFile = `${srcDir}/package.json`
  if (fs.existsSync(pkgFile)) {
    ik.logYellow(`exists: ${pkgFile}`)
    return
  }
  ik.logYellow(`srcDir: ${srcDir}`)
  let { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `create this srcDir ? (yes/no)`,
      type: 'input',
      extra: 'demo'
    }
  ])
  if(yes !== 'yes') {
    return;
  }

  let { tplName } = await inquirer.prompt([
    askMap.tplName//,
    // askMap.customTpl
  ])

  const tplDir = `${path.join(__dirname, '../templates')}/${tplName}`
  ik.logGreen({ appName, appVersion, appDir, tplName, tplDir, srcDir })

  await fs.copy(tplDir, srcDir)
  await fs.readJSON(pkgFile).then(pkg => {
    pkg.name = appName
    pkg.version = appVersion
    ik.logGreen(pkg);
    fs.writeJsonSync(pkgFile, pkg, { spaces: 2, eol: '\n'})    
  })
  ik.logGreen(`init success: ${srcDir}`)
  ik.logYellow(`cd ${appDir}`)
  ik.logYellow(`npm i`)
  ik.logYellow(`npm run test`)
  // console.log(
  //   chalk.red(
  //     `appName: ${appName}\nappVersion: ${appVersion}\nappDir: ${appDir}\nplName: ${tplName}`
  //   )
  // )
}

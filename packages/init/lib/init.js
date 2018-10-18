'use strict'

/**
 * Created by scriptpower on 10/18/2018.
 */

// const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const Utils = require('@iwz/utils')

const typeChoices = [
  { name: 'static', value: 'static' },
  { name: 'smarty', value: 'smarty' },
  { name: 'miniProgram', value: 'mp' },
  { name: 'npm', value: 'npm' }
]

const askMap = {
  projName: {
    name: 'projName',
    message: `Input the project name:`,
    type: 'input',
    extra: 'demo'
  },
  projType: {
    name: 'projType',
    message: 'Select the project type:',
    type: 'list',
    // choices: [...typeChoices, { name: 'custom', value: 'custom' }]
    choices: [...typeChoices]
  },
  customTpl: {
    name: 'customTpl',
    message: 'Input your template:',
    type: 'input',
    when: answers => answers.projType === 'custom'
  }
}

const init = async () => {
  let { projName } = await inquirer.prompt([askMap.projName])
  projName = projName || 'iwz-project-name'
  // if (!appDir) {
  //   appDir = `${projType}`.split('.').slice(0, 2).join('.')
  // }
  // const srcDir = appDir ? path.join(process.cwd(), appDir) : process.cwd()
  // const pkgFile = `${srcDir}/package.json`
  // if (fs.existsSync(pkgFile)) {
  //   Utils.logYellow(`exists: ${pkgFile}`)
  //   return
  // }
  // Utils.logYellow(`srcDir: ${srcDir}`)
  // let { yes } = await inquirer.prompt([
  //   {
  //     name: 'yes',
  //     message: `create this srcDir ? (yes/no)`,
  //     type: 'input',
  //     extra: 'demo'
  //   }
  // ])
  // if (yes !== 'yes') {
  //   return
  // }

  let { projType } = await inquirer.prompt([
    askMap.projType //,
    // askMap.customTpl
  ])

  Utils.logGreen(`init success: ${projName}`)
  Utils.logGray({ projName, projType })

  // await fs.copy(tplDir, srcDir)
  // await fs.readJSON(pkgFile).then(pkg => {
  //   pkg.name = projName
  //   pkg.version = projType
  //   Utils.logGreen(pkg)
  //   fs.writeJsonSync(pkgFile, pkg, { spaces: 2, eol: '\n' })
  // })
  Utils.logYellow(`iwz create <appName>`)
  Utils.logYellow(`npm run test`)
  // console.log(
  //   chalk.red(
  //     `projName: ${projName}\nprojType: ${projType}\nappDir: ${appDir}\nplName: ${projType}`
  //   )
  // )
}

// 项目: 初始化
module.exports = init

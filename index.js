const path = require('path')

const registeredModules = ['base', 'containers', 'services', 'modules', 'components']
path.basepath = {}

registeredModules.forEach((module) => {
  const rootPath = '../../..'
  path.basepath[module] = (_path) => path.resolve(__dirname, rootPath, module !== registeredModules[0] ? module : '', _path || '')
})

module.exports = path

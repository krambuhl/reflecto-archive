const findIndex = require('lodash.findindex')

module.exports.groupFilesByDirectory = ({ skip }) => (list, file) => {
  if (skip(file)) {
    list.push(file)
    return list
  }

  const { directory } = file
  let index = findIndex(list, { directory })

  if (index === -1) {
    list.push({
      directory,
      files: []
    })
    index = list.length - 1
  }

  list[index].files.push(file)

  return list
}

module.exports.pageStrategy = (def) => {
  const { filename } = def
  def.isPage = true
  def.pageName = filename.substr(0, filename.lastIndexOf('.'))

  return def
}

module.exports.elementStrategy = (def, options = { }) => {
  const [type, name] = def.directory.split('/')
  const { findElement, findData, findReadme } = options

  def.isElement = true
  def.elementType = type
  def.elementName = name

  def.element = findElement(def)
  def.data = findData(def)
  def.readme = findReadme(def)

  return def
}

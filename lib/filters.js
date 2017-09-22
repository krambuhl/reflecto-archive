module.exports.filterByAttributes = (match) => (_, module) => {
  for (let key in match) {
    const value = match[key]
    const matches =
      typeof value === 'function'
        ? value(module[key])
        : module[key] === value

    if (!matches) return false
  }

  return true
}

module.exports.filterByKey = (pattern) => (key) =>
  !!key.match(pattern)

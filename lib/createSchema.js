const runFilter = (list, filter) => {
  if (!filter) return list

  return Object.keys(list).reduce((newList, key) => {
    if (filter(key, list[key])) {
      newList[key] = list[key]
    }

    return newList
  }, { })
}

module.exports = (elements, filterList) =>
  filterList.map((section) => {
    const files = runFilter(elements, section.filter)

    if (section.groups) {
      return Object.assign({}, section, {
        groups: section.groups
          .map((group) => (
            Object.assign({}, group, {
              files: runFilter(files, group.filter)
            })
          ))
          .filter(group => Object.keys(group.files).length > 0)
      })
    } else {
      return Object.assign({}, section, { files })
    }
  })

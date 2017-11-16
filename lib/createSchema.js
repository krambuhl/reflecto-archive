module.exports = (elements, filterList) =>
  filterList.map((section) => {
    const files = elements.filter(section.filter)

    if (section.groups) {
      return Object.assign({}, section, {
        groups: section.groups
          .map((group) => (
            Object.assign({}, group, {
              files: files.filter(group.filter)
            })
          ))
          .filter(group => Object.keys(group.files).length > 0)
      })
    } else {
      return Object.assign({}, section, { files })
    }
  })

module.exports = (elements, filterList) =>
  filterList.map((section) => {
    const entries = elements.filter(section.filter)

    if (section.groups) {
      return Object.assign({}, section, {
        groups: section.groups
          .map((group) => (
            Object.assign({}, group, {
              entries: entries.filter(group.filter)
            })
          ))
          .filter(group => Object.keys(group.entries).length > 0)
      })
    } else {
      return Object.assign({}, section, { entries })
    }
  })

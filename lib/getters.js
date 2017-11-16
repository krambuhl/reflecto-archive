const getModules = (modules, { type, name }) =>
  modules.filter((def) => {
    return (
      def.type === type &&
      def.name === name
    )
  })

// provide an outlet to find an example
const getModule = (modules, { type, name, id }) => {
  const matches = getModules(modules, { type, name })
  const match = matches.find(def => def.id === id)

  if (match) {
    return match
  }

  if (matches.length) {
    return matches[0]
  }

  return null
}

module.exports = {
  getModules,
  getModule
}

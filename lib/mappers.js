// {
//   type: 'tags',
//   name: 'Button',
//   module: require('module.js')
// }
const mapModules = (modules) =>
  Object.keys(modules).map((key) => {
    return {
      module: modules[key].default || modules[key],
      name: key
    }
  })

// {
//   type: 'tags',
//   name: 'Button',
//   id: '0',
//   example: {
//     title: 'Taggy thing'
//     component: <Tag />
//     ...meta
//   }
// }
const mapExamples = (modules) =>
  mapModules(modules)
    .reduce((list, def) => {
      const module = def.module
      const copy = Object.assign({}, def)

      delete copy.module

      if (Array.isArray(module)) {
        module.forEach((example, index) => {
          const item = Object.assign({}, copy, {
            id: example.id || index.toString(),
            example: Object.assign({}, example)
          })

          list.push(item)
        })
      }

      return list
    }, [])

module.exports = {
  mapModules,
  mapExamples
}

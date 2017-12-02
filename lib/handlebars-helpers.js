const getProp = require('get-value')
module.exports = (Handlebars) => {
  const registerHelper = (name) => {
    Handlebars.registerHelper(name, (key, data) => {
      const match = key.match(/{{\s*[\w.]+\s*}}/g)
      const keyString =
        match
          ? match
            .map((x) => x.match(/[\w.]+/)[0])
            .reduce((key, x) => {
              const regex = new RegExp(`{{${x}}}`, 'gi')
              return key.replace(regex, getProp(data.data, x))
            }, key)
          : key

      return new Handlebars.SafeString(`<div ${name}="${keyString}"></div>`)
    })
  }

  registerHelper('reflecto-selector')
  registerHelper('reflecto-prop')
  registerHelper('reflecto-demo')
  registerHelper('reflecto-code')
}

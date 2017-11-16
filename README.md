# reflecto-archive

Helpers for create and manipulating reflecto archives.

## Install

To install using npm, do:

```js
npm install reflecto-archive
```


## Methods

### createSchema(componentMap, filterList)

Creates an schema object from a component map and a configuration.

```js
createSchema(allElements, [{
    title: 'Tags',
    filter: def => def.type === 'tags',
    groups: [{
        filter: def => def.pageType === undefined
    }, {
        title: 'Actions',
        filter:  def => def.pageType === 'action'
    }]
  }]
)
```

A filter list will usually look something like:

```js
[{
    filter: Function, // optional
    groups: [{
        filter: Function
    }]
}]
```

Additional metadata can be passed through as well.


### mapModules(modules)

Maps an object of files into an array of module definitions.

```js
mapModules({
    Button: require('./Button')
})

/*
[{
    name: 'Button',
    module: require('./Button')
}]
*/
```


### mapExamples(examples)

Maps an object of files into an array of example definitions.

```js
const examples = mapExamples({
    Button: [
        { title: 'ABC', component: <ex-tag /> },
        { title: '124', component: <ex-tag /> }
    ]
})

/*
[{
    name: 'Button',
    id: 0,
    title: 'ABC'
    component: <ex-tag />
}, {
    name: 'Button',
    id: 1,
    title: '123'
    component: <ex-tag />
}]
*/
```


### getModules(modules, { type, name })

Filter an array of modules by their type and name fields.

```js
const modules = getModules(examples, { type, name })
```


### getModule(modules, { type, name, id })

Find a specific module definition.

```js
const module = getModules(examples, { type, name, id })
```


## License

MIT 2017 Evan Krambuhl

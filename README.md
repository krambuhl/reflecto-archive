# reflecto-archive

Helpers for creating a reflecto archive.

## Install

To install using npm, do:

```js
npm install reflecto-archive
```


## Methods

### flattenModules(structuredData, { delimeters })

Reduces a hierarchical data structure into a flat map. Useful for reducing nested modules into a searchable component map.

```js
const allElements = flattenModules({
    Tags: {
        Button: [
            { id: '7c347ea', component },
            { component }
        ]
    }
})

/* output: allElements */
{
    'Tags/Button/7c347ea': { id: '7c347ea', component },
    'Tags/Button/1': { component, pageType: 'action' }
}
```

### createSchema(componentMap, schema)

Creates an schema object from a component map and a configuration.

```js
createSchema(allElements, [{
    title: 'Tags',
    filter: filterByKey(/Tags/),
    groups: [{
        filter: filterByAttributes({ pageType: undefined })
    }, {
        title: 'Actions',
        filter: filterByAttributes({ pageType: 'action' })
    }]
  }]
)
```


### filterByKey(regEx)

Predicate factory to filter component map items by the keys.

```js
const filter = filterByKey(/Tags/)

filter('Tags/Button/7c347ea', { id: '7c347ea', component }) /* true */
```


### filterByAttributes(matcher)

Predicate factory to filter component map items its properties. The `matcher` should be an object, values can be literals or a function taking the input value.

```js
const filter = filterByAttributes({ pageType: 'action' })

filter('Tags/Button/7c347ea', { id: '7c347ea', component }) /* false */
filter('Tags/Button/1', { component, pageType: 'action' }) /* true */

```

## License

MIT 2017 Evan Krambuhl

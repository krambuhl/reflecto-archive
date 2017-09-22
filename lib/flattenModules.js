// reduces a hierarchical data structure like
// { Tags: { Button: module } }
// { Tags: { Button: [def, def] } }
// into a flat object that can be easily filtered
// { 'Tags/Button': Tags.Button }
// { 'Tags/Button/7c347ea': Tags.Button[id:7c347ea] }
// { 'Tags/Button/1': Tags.Button[1] }

module.exports = (structure, { delimeter = '/' }) =>
	Object.keys(structure).reduce((all, type) => {
		const modules = structure[type]

		Object.keys(modules).forEach((name) => {
			const module = modules[name]
			
			// if a module is an array add an additional
			// key for each element
			if (Array.isArray(module)) {
				module.forEach((def, i) => {
					all[`${type}${delimeter}${name}${delimeter}${def.id || i}`] = def
				})
			} else {
				all[`${type}${delimeter}${name}`] = module
			}
		})
	}, { })

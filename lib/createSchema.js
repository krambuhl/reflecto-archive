const runFilter = (list, filter) => {
	if (!filter) return list

	return Object.keys(list).reduce((newList, key) => {
		if (filter(key, list[key])) {
			newList[key] = list[key]
		}
		
		return newList
	}, { })
}


module.exports = (elements, structure) =>
	structure.map((section) => {
		const files = runFilter(elements, section.filter)

		if (section.groups) {
			return Object.assign({}, section, {
				groups: section.groups.map((group) => {
					const files = runFilter(files, section.filter)
					
					return Object.assign({}, group, { 
						files: runFilter(files, section.filter)
					)
				})
			})
		} else {
			return Object.assign({}, section, { files })
		}
	})
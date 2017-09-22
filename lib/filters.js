module.exports.filterByAttributes = (match) => (_, module) => {
	for (let key in match) {
		const matches = 
			typeof value === 'function'
				? value(module[key])
				: module[key] === value

		if (!matches) return false
	}

	return true
}


module.exports.filterByPath = (pattern) => (key) => 
	!!key.match(pattern)
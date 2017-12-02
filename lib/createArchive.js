// transforms an file object into an array
module.exports = (files) => {
  return Object.keys(files)
    .map((path) => {
      const contents = files[path].default || files[path]
      const directory = path.substr(0, path.lastIndexOf('/'))
      const filename = path.substr(path.lastIndexOf('/') + 1)

      return {
        path,
        directory,
        filename,
        contents
      }
    })
}

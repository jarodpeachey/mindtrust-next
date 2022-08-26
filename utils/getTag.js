const getOneTag = (postTags, allTags) => {
  let returnTag = null
  if (postTags && postTags.length > 0) {
    let number = Math.floor(Math.random() * (postTags.length - 1 - 0 + 1)) + 0

    postTags.forEach((tag, index) => {
      if (index == number) {
        allTags.forEach(globalTag => {
          if (globalTag.id.toString() == tag) {
            returnTag = globalTag.displayName
          }
        })
      }
    })
  }

  return returnTag
}
const getTagById = (id, allTags) => {
  let tag = null

  allTags.forEach(globalTag => {
    if (globalTag.id.toString() == id) {
      tag = globalTag.displayName
    }
  })

  return tag
}

module.exports = {
  getOneTag,
  getTagById
}

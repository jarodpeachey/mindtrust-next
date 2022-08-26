const formatURL = (url = "Tag") => {
  return url
    .toLowerCase()
    .replace(/ \/ /g, "-")
    .replace(/ /g, "-")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/\./g, "")
    .replace(/\//g, "-")
    .replace(/:/g, "")
    .replace(/\#/g, "sharp")
    .replace(/&/g, "and")
    .replace(/,/g, "")
    .replace(/\[/g, "")
    .replace(/\]/g, "")
    .replace(/\?/g, "")
}

module.exports = {
  formatURL,
}

const formatURL = url => {
  return url
    .toLowerCase()
    .replace(/ \/ /g, "-")
    .replace(/ /g, "-")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/\./g, "-")
    .replace(/\//g, "-")
    .replace(/\#/g, "sharp")
}

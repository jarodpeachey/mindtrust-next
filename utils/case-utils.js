const toKebabCase = str =>
  str
    .replace(/([A-Z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()

const replaceSharpSymbolWithWord = str => str.toLowerCase().replace(/#/g, "sharp")
// const replaceSharpWordWithSymbol = str => str.toLowerCase().replace(/sharp/g, "#")

module.exports = {
  toKebabCase,
  replaceSharpSymbolWithWord,
}

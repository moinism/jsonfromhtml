
/**
 * @param {HTMLElement} el
 * @returns {Object}
 */

const flatter = (acc, val) => acc.concat(val)
const attrMapper = attr => ({ [attr.name]: attr.value })
const arrReducer = (obj, item) => Object.assign(obj, item)

function jsonFromHTML (el) {
  // only parsing text and element nodes
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  if (el.nodeType === 3) { // text of element
    return { content: el.textContent, nodeType: 'text' }
  } else if (el.nodeType !== 1) { // not node element
    return null
  }

  const { nodeName } = el

  const children = Array.from(el.childNodes)
    .map(jsonFromHTML)
    .reduce(flatter, []) // alternative to .flat() to make it compatible with more browsers/runtimes

  const attrs = Array.from(el.attributes)
    .map(attrMapper)
    .reduce(arrReducer, {}) // turn array of objects into one object

  return { nodeName, nodeType: 'element', attrs, children, }
}

module.exports = { jsonFromHTML }
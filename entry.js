
/**
 * @param {HTMLElement} el
 * @returns {Object}
 */

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
    .reduce((acc, val) => acc.concat(val), []) // alternative to .flat() to make it compatible with more browsers/runtimes

  const attrs = Array.from(el.attributes)
    .map(attr => ({ [attr.name]: attr.value }))
    .reduce((obj, item) => Object.assign(obj, item), {}) // turn array of objects into one object

  let element = { nodeName, nodeType: 'element', attrs, children, }
  return element
}

module.exports = { jsonFromHTML }
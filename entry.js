
/**
 * @param {HTMLElement} el
 * @returns {Array}
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
    .flat()

  const attrs = Array.from(el.attributes)
    .map(attr => ({ [attr.name]: attr.value }))

  let element = { nodeName, nodeType: 'element', attrs, children, }
  return element
}

module.exports = { jsonFromHTML }
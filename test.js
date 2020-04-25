const { jsonFromHTML } = require('./entry');

const img = { nodeType: 1, nodeName: 'IMG', attributes: [{ name: 'src', value: 'example.svg' }], childNodes: [] }
const imgReturn = {
  nodeName: 'IMG',
  nodeType: 'element',
  attrs: { src: 'example.svg' },
  children: [],
}

if (JSON.stringify(jsonFromHTML(img)) !== JSON.stringify(imgReturn)) {
  throw Error('Test #1 Failed')
}

console.log('Passed')
return
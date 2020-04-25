# Turn HTML DOM to JSON-able structure

👌 Zero dependencies ⚡️ Ultra lightweight

```
npm i -S jsonfromhtml
```

```js
const { jsonFromHTML } = require('jsonFromHTML')

const body = jsonFromHTML(document.body) // returns array
const json = JSON.stringify(body)
```

## Usage

```js
const elementArray = jsonFromHTML(domElement)
```

Parameter:
 - `domElement`: Expects a DOM element. Use a package like [cheerio](https://www.npmjs.com/package/cheerio) to use it in node envoirnment.


Returns:
- `Array` of `Object`s.

## Returned `Array` Example

Input:

```html
<p>
Here is my <a href="https://github.com/moinism" target="_blank">Github</a> if you wanna have a looksy.
</p>
```

```js
{
  "nodeName": "P", // tag name
  "nodeType": "element", // either 'element' or 'text'
  "attrs": {}, // only for nodeType == 'element'
  "children": [
    {
      "content": "\nHere is my ",
      "nodeType": "text"
    },
    {
      "nodeName": "A",
      "nodeType": "element",
      "attrs": { // key-value pairs of all the attributes on the element.
        "href": "https://github.com/moinism",
        "target": "_blank"
      },
      "children": [
        {
          "content": "Github",
          "nodeType": "text"
        }
      ]
    },
    {
      "content": " if you wanna have a looksy.\n",
      "nodeType": "text"
    }
  ]
}
```


### LICENSE

MIT
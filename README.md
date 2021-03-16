# array2map

```sh
# use npm
npm install --save array2map
# use yarn
yarn add array2map
```

```js
import { array2map, array2bool } from 'array2map'

const arr = [{ id: 1, name: 'hjx' }, { id: 2, name: 'enjoy' }]
const arr2 = ['a', 'b']
const arr3 = [2, 5]

array2bool(arr, 'id')
// { 1: true, 2: true }

array2bool(arr2)
// { a: true, b: true }

array2bool(arr3)
// { 2: true, 5: true }

array2item(arr, 'id')
// { 1: { id: 1, name: 'hjx'}, 2: { id: 2, name: 'enjoy' } }
```

# arr2map

transform array to map / array

```sh
# use npm
npm install --save arr2map
# use yarn
yarn add arr2map
```

```js
import { array2item, array2bool, array2children } from 'arr2map'

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

array2item(arr, item => item.id, item => item.name)
// { 1: 'hjx', 2: 'enjoy' }

array2item(arr3, item => `double-${item}`, item => item * 2)
// { double-2: 4, double-5: 10 }

const arr4 = [{
    id: 1,
    name: 'hjx',
    codes: [{ id: 3, name: 'h' }, { id: 4, name: 'jx' }]
}, {
    id: 2,
    name: 'enjoy',
    codes: [{ id: 5, name: 'en' }, { id: 6, name: 'joy' }]
}]

array2children(arr4, item => item.codes)
// [{ id: 3, name: 'h' }, { id: 4, name: 'jx' }, { id: 5, name: 'en' }, { id: 4, name: 'joy' }]
```

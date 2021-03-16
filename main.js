import { array2bool, array2item, array2children } from '.'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Open Console</h1>
`

const arr = [{ id: 1, name: 'hjx' }, { id: 2, name: 'enjoy' }]
const arr2 = ['a', 'b']
const arr3 = [2, 5]

console.log(array2bool(arr2))
console.log(array2bool(arr3))
console.log(array2bool(arr, 'id'))
console.log(array2item(arr, 'id'))

const arr4 = [{
  id: 1,
  name: 'hjx',
  codes: [{ id: 3, name: 'h' }, { id: 4, name: 'jx' }]
}, {
  id: 2,
  name: 'enjoy',
  codes: [{ id: 5, name: 'en' }, { id: 6, name: 'joy' }]
}]

console.log(array2children(arr4, item => item.codes))

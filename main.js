import { array2bool, array2item } from '.'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const arr = [{ id: 1, name: 'hjx' }]
const arr2 = ['a', 'b']
const arr3 = [2, 5]

array2bool(arr2)
array2bool(arr3)
array2bool(arr, 'id')
array2item(arr, 'id')

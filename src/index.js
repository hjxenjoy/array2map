export function array2bool(array, primaryKey) {
    const map = {}
    const isLiteral = /string|number/.test(typeof array[0])

    if (isLiteral) {
      for (let item of array) {
        map[item] = true
      }

      return map
    }

    for (let item of array) {
        map[item[primaryKey]] = true
    }

    return map
}

export function array2item(array, primaryKey, getValue) {
    const map = {}
    if (typeof primaryKey === 'function' && typeof getValue === 'function') {
      for (let item of array) {
        map[primaryKey(item)] = getValue(item)
      }
      return map
    }

    for (let item of array) {
        map[item[primaryKey]] = item
    }
    return map
}

export function array2children(array, cb) {
  const children = []
  for (let item of array) {
    children.push(...cb(item))
  }
  return children
}

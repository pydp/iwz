const isString = it => typeof it === 'string'
const isFunction = it => typeof it === 'function'
const isNil = it => it === null || it === void 0
const isObjectLike = it => it && typeof it === 'object'

const has = (key, it) => !isNil(it) && it.hasOwnProperty(key)

const forIn = (cb, it) => {
  for (const key in it) {
    if (has(key, it)) {
      cb(it[key], key)
    }
  }
}
const forEach = (cb, it) => {
  if (it && it.forEach) {
    it.forEach(cb)
  } else {
    forIn(cb, it)
  }
}

module.exports = {
  forIn,
  forEach,
  isFunction,
  isString,
  isNil,
  isObjectLike,
  has
}

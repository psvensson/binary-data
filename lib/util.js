const isPlainObject = require('is-plain-object')

module.exports = {
  isType,
  isUserType: isPlainObject,
  isFunction,
  isDecodeType,
  isEncodeType,
}

function isType(type) {
  return isObject(type) && isFunction(type.encode) && isFunction(type.decode)
}

function isFunction(value) {
  return typeof value === 'function'
}

function isObject(value) {
  return typeof value === 'object' && !Object.is(value, null)
}

function isDecodeType(type) {
  return isObject(type) && isFunction(type.decode)
}

function isEncodeType(type) {
  return isObject(type) && isFunction(type.encode)
}
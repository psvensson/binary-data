const { isUserType, isType } = require('./util')
const isPlainObject = require('is-plain-object')

module.exports = encodingLengthCommon

function encodingLength(obj, schema, context) {
  if (!isPlainObject(obj)) {
    throw new TypeError('Argument #1 should be a plain object.')
  }

  if (!isUserType(schema)) {
    throw new TypeError('Argument #2 should be a plain object.')
  }

  if (context === undefined) {
    context = {
      node: obj,
    }
  }

  return Object.keys(schema).reduce(
    (counter, key) => counter + encodingLengthCommon(obj[key], schema[key], context),
    0
  )
}

function encodingLengthCommon(item, type, context) {
  if (context === undefined) {
    context = {
      node: item,
    }
  }

  return isType(type)
    ? type.encodingLength(item, context)
    : encodingLength(item, type, context)
}
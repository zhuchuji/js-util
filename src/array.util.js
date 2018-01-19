/*
 * @file array.util.js
 * @desc Util functions to handle array
 * @author Chockie
 * @module ArrayUtil
 */

class ArrayUtil {
  // chunk the array into small pieces
  static chunk (array, size = 1) {
    let chunkedArray = []
    for (let i = 0; i < array.length; i = i + size) {
      let chunk = []
      for (let j = i; j < i + size && j < array.length; j++) {
        chunk.push(array[j])
      }
      chunkedArray.push(chunk)
    }
    return chunkedArray
  }

  // remove falsy values in the array
  static compact (array) {
    let compactedArray = array.filter(function (item) {
      return Boolean(item)
    })
    return compactedArray
  }

  // concat multiple arrays
  static concat (...arrays) {
    let concatedArray = [].concat(...arrays)
    return concatedArray
  }

  static difference (array, ...comparedArray) {
    let diffArray = [...array]
    for (let sub of comparedArray) {
      for (let subItem of sub) {
        while (diffArray.indexOf(subItem) !== -1) {
          diffArray.splice(diffArray.indexOf(subItem), 1)
        }
      }
    }
    return diffArray
  }
}

export default ArrayUtil

/*
 * @file array.util.js
 * @desc Util functions to handle array
 * @author Chockie
 * @module ArrayUtil
 */

class ArrayUtil {
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
}

export default ArrayUtil

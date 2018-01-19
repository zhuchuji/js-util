/*
 * @file array.util.spec.js
 * @desc unit test for array.util.js
 * @author Chockie
 *
 * @issue can not use ES6 grammar like 'let', leading to phantomjs error.
 */

import ArrayUtil from '@/array.util.js'

describe('ArrayUtil: ', function () {
  describe('chunk', function () {
    it('should return an array with chunked pieces', function () {
      var array = [0, 1, 2, 3, 4, 5]
      var chunkedArray = ArrayUtil.chunk(array, 2)
      expect(chunkedArray).toEqual([[0, 1], [2, 3], [4, 5]])
    })

    it('should return chunked array with length 1 when the size is not passed in', function () {
      var array = [0, 1]
      var chunkedArray = ArrayUtil.chunk(array)
      expect(chunkedArray).toEqual([[0], [1]])
    })

    it('should return chunked array with the last item is shorter when passing a size not divided by length', function () {
      var array = [0, 1, 2, 3, 4]
      var chunkedArray = ArrayUtil.chunk(array, 3)
      expect(chunkedArray).toEqual([[0, 1, 2], [3, 4]])
    })
  })

  describe('compact', function () {
    it('should return a new array containing all true values', function () {
      var array = [0, false, '', null, undefined]
      var compactedArray = ArrayUtil.compact(array)
      expect(compactedArray).toEqual([])
    })
  })

  describe('concat', function () {
    it('return an concated array', function () {
      expect(ArrayUtil.concat([1], 2, [[3]])).toEqual([1, 2, [3]])
    })
  })

  describe('difference', function () {
    it('return the difference of the given array', function () {
      expect(ArrayUtil.difference([1, 2, 1, 3], [1], [1, 2])).toEqual([3])
    })
  })

  describe('drop', function () {
    it('return the array dropping first element', function () {
      expect(ArrayUtil.drop([1, 2, 3])).toEqual([2, 3])
    })

    it('return the array dropping all element if size greater than length', function () {
      expect(ArrayUtil.drop([1, 2], 5)).toEqual([])
    })
  })
})

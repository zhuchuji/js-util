/*
 * @file array.util.spec.js
 * @desc unit test for array.util.js
 * @author Chockie
 */

import ArrayUtil from '@/array.util.js'

describe('ArrayUtil: ', function () {
  describe('chunk ', function () {
    it('should return an array with chunked pieces', function () {
      //@issue can not use 'let' reserved words, leading to phantomjs error.
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
})

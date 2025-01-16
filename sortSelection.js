/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @param {Array<number>} array - The array to be sorted.
 * @param {boolean} [descending=false] - If true, sorts the array in descending order.
 * @returns {Array<number>} The sorted array.
 */
function sort(array, descending = false) {
    if (!array) return [];
    let unordered = (a, b) => (descending ? a < b : a > b);
    let result = array;
    let swaps;
    do {
      swaps = false;
      for (let i = 0; i < result.length - 1; i++) {
        if (unordered(result[i], result[i + 1])) {
          [result[i], result[i + 1]] = [result[i + 1], result[i]];
          swaps = true;
        }
      }
    } while (swaps);
    return result;
  }
  
  /**
   * Creates an array of n elements with an alternating pattern 
   * (e.g., [1, 0, 3, 2, 5, 4, ...]).
   *
   * @param {number} n - The desired length of the array.
   * @returns {Array<number>} An array with the alternating pattern.
   */
  function createAlternatingArray(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    for (let i = 0; i < n - 1; i += 2) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return array;
  }
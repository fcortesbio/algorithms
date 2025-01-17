// dedicated cache for each fibonacci approach
const recursion_cache = new Map();
const iteration_cache = new Map();
const binnets_cache = new Map();

// constants for Binnet's formula calculation
const b = 1 / Math.sqrt(5);
const phi = (1 + Math.sqrt(5)) / 2;
const psi = (1 - Math.sqrt(5)) / 2;

/**
 * Generic function to calculate the nth Fibonacci number with memoization and LRU caching.
 *
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @param {function} method - The function to calculate the Fibonacci number.
 * @param {Map} cache - The cache to store calculated values.
 * @param {number} capacity - The maximum capacity of the cache.
 * @return {number} The n-th Fibonacci number.
 */
function fib(n, method, cache, capacity) {
  if (cache.has(n)) {
    // move the accessed element to the end to mark it as the last recently used
    const value = cache.get(n);
    cache.delete(n);
    cache.set(n, value);
    return value;
  }

  const result = method(n);

  cache.set(n, result);
  if (cache.size > capacity) cache.delete(cache.keys().next().value);

  return result;
}

/**
 * Calculates the n-th Fibonacci number using a recursive approach with memoization.
 *
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @param {Map} [cache=recursion_cache] - The cache to store calculated values (defaults to `recursion_cache`).
 * @param {number} [capacity=50] - The maximum capacity of the cache.
 * @return {number} The nth Fibonacci number.
 */
function recursiveFibonacci(n, cache = recursion_cache, capacity = 50) {
  if (!n || !Number.isInteger(n) || n < 0 || !isFinite(n)) return NaN;
  if (n <= 1) return n;

  const method = (n) => {
    if (n <= 1) return n;
    return method(n - 1) + method(n - 2);
  }; // recursive function

  return fib(n, method, cache, capacity);
}

/**
 * Calculates the nth Fibonacci number using an iterative approach with memoization.
 *
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @param {Map} [cache=iteration_cache] - The cache to store calculated values (defaults to `iteration_cache`).
 * @param {number} [capacity=50] - The maximum capacity of the cache.
 * @return {number} The nth Fibonacci number.
 */
function iterativeFibonacci(n, cache = iteration_cache, capacity = 50) {
  if (!n || !Number.isInteger(n) || n < 0 || !isFinite(n)) return NaN;
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;

  function method(n) {
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  return fib(n, method, cache, capacity);
}

/**
 * Calculates the nth Fibonacci number using Binet's formula with memoization.
 *
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @param {Map} [cache=binnets_cache] - The cache to store calculated values (defaults to `binnets_cache`).
 * @param {number} [capacity=50] - The maximum capacity of the cache.
 * @return {number} The nth Fibonacci number.
 */
function binnetsFibonnacci(n, cache = binnets_cache, capacity = 50) {
  if (!n || !Number.isInteger(n) || n < 0 || !isFinite(n)) return NaN;
  if (n <= 1) return n;

  const method = (n) => Math.round(b * phi ** n - psi ** n);

  return fib(n, method, cache, capacity);
}
function recursiveFibonacci(number){
    const cache = new Map();
    const capacity = 10;
    let n = number

    function fib(n){
        if (cache.has(n)){
            const value = cache.get(n);
            cache.delete(n);
            cache.set(n, value);
            return value;
        }

        result = n <= 1 ? n : fib(n-1) + fib(n-2);
        cache.set(n, result);

        if (cache.size > capacity) {
            cache.delete(cache.keys().next().value);
        }
        return result
    }
    return fib(n)
}

const b = 1 / Math.sqrt(5)
const phi = (1 + Math.sqrt(5)) / 2
const psi = (1 - Math.sqrt(5)) / 2

function binnetsFibonnacci(n) {
    if (n > 0 && Number.isInteger(n)) {

        return Math.round(b * (phi ** n) - (psi ** n))
    }
    else return NaN
}

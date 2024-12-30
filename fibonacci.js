function print(...args) { console.log(...args) };

function fiboRec(n) {
    n = Number(n);
    return ( n === 0 || n === 1 ) ? 
    n : fiboRec(n - 1) + fiboRec(n - 2)
}

function fiboMath(n) {
    if (n >= 0 && Number.isInteger(n)) { 
        const b = 1 / Math.sqrt(5)
        const phi = (1 + Math.sqrt(5)) / 2
        const psi = (1 - Math.sqrt(5)) / 2

        return Math.round(b * (phi ** n - psi ** n))
    } else {
        return "Input must be a non-negative integer."; 
    }
}

function timeIt(func) {
    return function(...args) {
        let startTime = performance.now();
        let result = func(...args);
        let endTime = performance.now();
        print(`Execution time for ${func.name}: ${endTime - startTime} milliseconds`);
        return result;
    }
}

// Apply the decorator
const timedFiboRec = timeIt(fiboRec);
const timedFiboMath = timeIt(fiboMath);

// Test the functions
print(timedFiboRec(30)); 
print(timedFiboMath(30));
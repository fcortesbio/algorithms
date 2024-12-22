function print(...args) { console.log(...args) };

function fiboRec(n) {
    n = Number(n);
    return ( n === 0 || n === 1 )? n : fiboRec(n - 1) + fiboRec(n - 2)
    }


function fiboMath(n) {
    if (n > 0 && Number.isInteger(n)) {
        const b = 1 / Math.sqrt(5)
        const phi = (1 + Math.sqrt(5)) / 2
        const psi = (1 - Math.sqrt(5)) / 2

        return Math.round(b * (phi ** n) - (psi ** n))
    }
}

let startTime, endTime, duration;
let numb = 30 ;
let durations = []
let it = 0
let sum = 0

for (let i = 0; i < 100; i++) {
    startTime = performance.now();
    fiboRec(numb)
    endTime = performance.now();
    duration = endTime - startTime;
    durations.push(duration)
    it++
}

durations.forEach(number => sum += number);
av = sum / it
print("Average handle time for fiboRec: ", av)

durations = []
sum = 0
it = 0

for (let i = 0; i < 100; i++) {
    startTime = performance.now();
    fiboMath(numb)
    endTime = performance.now();
    let duration = endTime - startTime;
    durations.push(duration)
    it++
}
durations.forEach(number => sum += number);
av = sum / it
print("Average handle time for fiboMath", av);
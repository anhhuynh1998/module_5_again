//Tính tích tất cả các “ước số lẻ” của số nguyên dương n
let accumulation = 1;
// function accumulationOddDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 != 0) {
//             accumulation *= index;
//         }
//     }
//     console.log(accumulation);
// }

// const accumulationOddDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 != 0) {
//             accumulation *= index;
//         }
//     }
//     console.log(accumulation);
// }

const accumulationOddDivisor = n => {
    let accumulation = 1;
    let index = 0;

    do {
        if (n % index === 0 && index % 2 != 0) {
            accumulation *= index;
        }
        index++;
    } while (index <= n);
    console.log(accumulation);
}
accumulationOddDivisor(20);
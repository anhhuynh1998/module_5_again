//Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n
let accumulation = 1;

// function accumulationDivisor(n) {
//     for (let index = 1; index <= n; index++) {
//         if (n % index === 0) {
//             accumulation *= index;
//             console.log(accumulation);
//         }
//     }
//     console.log(accumulation);
// }

// const accumulationDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0) {
//             accumulation *= index;
//         }
//     }
//     console.log(accumulation);
// }

const accumulationDivisor = n => {
    let accumulation = 1;
    let index = 1;

    do {
        if (n % index === 0) {
            accumulation *= index;
        }
        index++;
    } while (index <= n);
    console.log(accumulation);
}
accumulationDivisor(20)
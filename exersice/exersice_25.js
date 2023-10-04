//Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
let sum = 0;
// function sumEvenDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 == 0) {
//             sum += index;
//         }
//     }
//     console.log(sum);
// }

// const sumEvenDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 == 0) {
//             sum += index;
//         }
//     }
//     console.log(sum);
// }
const sumEvenDivisor = n => {
    let sum = 0;
    let index = 0;
    do {
        if (n % index === 0 && index % 2 == 0) {
            sum += index;
        }
    } while (index <= n);
    console.log(sum);
}
sumEvenDivisor(20)
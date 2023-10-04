//Bài 28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó
let sum = 0
// function sumLessDivisor(n) {
//     for (let index = 0; index < n; index++) {
//         if (n % index === 0) {
//             sum += index;
//         }
//     }
//     console.log(sum);
// }

const sumLessDivisor = n => {
    for (let divisor = 0; divisor < n; divisor++) {
        if (n % divisor === 0) {
            sum += divisor;
        }
    }
    console.log(sum);
}
sumLessDivisor('20')

// const sumLessDivisor = n => {
//     let sum = 0;
//     let index = 0;

//     do {
//         if (n % index === 0) {
//             sum += index;
//         }
//     } while (index < n);
//     console.log(sum);
// }
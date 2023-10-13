//Bài 23: Đếm số lượng “ước số” của số nguyên dương n
let count = 0;

// function countDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// const countDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index == 0) {
//             count++
//         }
//     }
//     console.log(count);
// }

const countDivisor = n => {
    let count = 0;
    let index = 0;
    do {
        if (n % index == 0) {
            count++;
        }
        index++;
    } while (index <= n);
    console.log(count);
}
countDivisor(20)
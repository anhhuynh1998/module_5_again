//Bài 21: Tính tổng tất cả các “ ước số” của số nguyên dương n

// function sumDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index == 0) {
//             sum += index
//         }
//     }
//     console.log(sum);
// }
// sumDivisor(20)
// let sum = 0;
// const sumDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index == 0) {
//             sum += index;
//         }
//     }
//     console.log(sum);
// }

const sumDivisor = n => {
    let sum = 0;
    let i = 1;
    do {
        if (n % i === 0) {
            sum += i;
        }
        i++;
    } while (i < n);
    console.log(sum);
}
sumDivisor(20)


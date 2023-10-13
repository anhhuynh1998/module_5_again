//Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n
// function divisor(n) {
//     for (let index = 1; index <= n; index++) {
//         if (n % index === 0) {
//             console.log(index);
//         }
//     }
// }
// console.log(divisor(20));

const divisor = n => {
    for (let index = 1; index <= n; index++) {
        if (n % index == 0) {
            console.log(index);
        }
    }
}
console.log(divisor(20));
//Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n
// function countEvenDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// const countEvenDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index == 0 && index % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }

const countEvenDivisor = n => {
    let count = 0;
    let index = 0;

    do {
        if (n % index === 0 && index % 2 == 0) {
            count++;
        }
        index++;
    } while (index <= n);
    console.log(typeof (count));
}


countEvenDivisor(20)
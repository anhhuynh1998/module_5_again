//Liệt kê tất cả các “ước số lẻ” của số nguyên dương n

// function oddDivisor(n) {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 != 0) {
//             console.log(index);
//         }
//     }
// }

// const oddDivisor = n => {
//     for (let index = 0; index <= n; index++) {
//         if (n % index === 0 && index % 2 != 0) {
//             console.log(index);
//         }
//     }
// }

const oddDivisor = n => {
    let index = 0;
    do {
        if (n % index === 0 && index % 2 != 0) {
            console.log(index);
        }
        index++;
    } while (index <= n);
}
oddDivisor(20);
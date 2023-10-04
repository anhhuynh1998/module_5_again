//Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
let largest = 0;
// function oddLargestDivisor(n) {
//     if (n % 2 != 0) {
//         console.log(n);
//     } else {
//         for (let index = 0; index <= n; index++) {
//             if (n % index == 0 && index % 2 != 0) {
//                 largest = index;
//             }
//         }
//         console.log(largest);
//     }
// }

const oddLargestDivisor = n => {
    if (n % 2 != 0) {
        console.log(n);
    } else {
        for (let index = 0; index < n; index++) {
            if (n % index == 0 && index % 2 != 0) {
                largest = index;
            }
        }
        console.log(largest);
    }
}
oddLargestDivisor(100)
// && index % 2 != 0
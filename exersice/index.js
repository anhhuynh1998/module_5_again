// nhận vào 1 số rồi đảo ngược số đố

// function printReverseNumber(inputNumber) {
//     let reversedNumber = 0;
//     for (let number = inputNumber; number > 0; number = Math.floor(number / 10)) {
//         let digit = number % 10;
//         reversedNumber = reversedNumber * 10 + digit;
//     }
//     return inputNumber = reversedNumber;
// }
// printReverseNumber(12321);
// nhận vào 1 số xem số đó có phải là số đối xứng hay không!!
function isPalindrome(number) {
    let reversedNumber = 0;
    let remainder;
    let originalNumber = number;

    while (number > 0) {
        remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }

    if (originalNumber === reversedNumber) {
        console.log('nó là số đối xứng');
    } else {
        console.log('nó không phải là số đối xứng');
    }
}

isPalindrome(123345);

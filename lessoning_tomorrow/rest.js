// ngưng tụ 1 số không sát định của các đối số thành 1 kiểu  mảng 
// giống với toán tử spread nhưng nó được sử dụng trong các tham số của hàm
// ví dụ :
// trong function này ...number gom toàn bộ tham số nhận vào thành 1 mảng và + chúng !
function sum(...number) {
    let total = 0;
    for (let i in number) {
        total += number[i];
    }
    return total;
}
// console.log(sum(1, 2, 3, 4));
//ví dụ 2: ta truyền vào các tham số 
function myFun(a, b, ...manyMoreArgs) {
    console.log("a :", a);
    console.log("b :", b);
    console.log("manyMoreArgs :", manyMoreArgs);
}
// myFun("one", "two", "three", "four", "five", "six");

function example(a, b, ...rest) {
    console.log(arguments[0]);// 1
    console.log(a);// 1

    a = 10;
    console.log(arguments[0]);//1
    console.log(a);//10

    console.log(rest);//[3,4]
    console.log(a, b, ...rest);
}

example(1, 2, 3, 4);

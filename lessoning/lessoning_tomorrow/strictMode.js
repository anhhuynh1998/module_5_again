// strict mode : chế độ nghiêm ngặt, hay hiểu đơn giản là "use strict" là  chế độ giúp người viết JS trở nên an toàn hơn 
// khi sử dụng 'use strict' bạn có thể tránh các trường hợp không an toàn như :
// - quên sử dụng từ khóa khai báo biến ví dụ : 
fullName = "Alexander đại đế"; // ở trường hợp này khi chạy js thì nó không 
//có bị lỗi và nó đang được mặt định từ khóa khai bao biến là var (global scope).
console.log(fullName);// => Alexander đại đế
// khi bạn sử dụng "use strict" thì bạn khai báo biến như thế này  và chạy thì sẽ được thông báo lỗi

// - trùng tên tham số khi khai báo hàm. ví dụ

function sum(a, a) {
    return a + a;
}
console.log(sum(6, 9)); //=> 18 vì nó lấy tham số sau ghi đè lên tham số trước.
// nếu đặt 'use strict trước hàm này thì nó sẽ báo lỗi'
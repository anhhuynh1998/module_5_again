//Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API. Trong đó:

//Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

//Tự động biến đổi một hàm thông thường thành một Promise.
//Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
//Async cho phép sử dụng Await.
// Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ().

//Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
//Await chỉ làm việc với Promises, .nó không hoạt động với callbacks
//Await chỉ có thể được sử dụng bên trong các function async.
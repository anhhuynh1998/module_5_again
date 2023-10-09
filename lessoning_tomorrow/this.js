// nó sẽ trỏ về đối tượng mà nó đang thuộc về
// trong 1 phương thức, this tham chiếu tới đối tượng truy cập phương thức(đối tượng trước dấu .)
// ví dụ :
const iPhone15 = {
    name: 'I Phone 15 pro max',
    color: 'Iron',
    price: '46.499.000',

    video() {
        console.log(this);
    }
}
console.log(iPhone15.video());

/*
=== 01 ===
Viết hàm để nhận vào một chuỗi bất kỳ và trả về một chuỗi mới có ký tự đầu của chuỗi được viết hoa
ví dụ: 
ucFirst('linh') -> 'Linh'
ucFirst('van Linh') -> 'Van Linh'
ucFirst('NguyEn van linh') -> 'NguyEn van linh'

=== 02 ===
Viết hàm để kiểm tra một chuỗi có chứa từ nhạy cảm hay không, chuỗi có chứa 'jav' hoặc 'xxx' được coi là chuỗi chứa từ nhạy cảm
checkSensitive('Bạn tôi đang xem JaV') -> true
checkSensitive('miễn phí xxxxxx') -> true
checkSensitive('I am a developer') -> false

=== 03 ===
Viết hàm cắt ngắn chuỗi truncate(str, length);
truncate('Lorem ipsum dolor', 11) -> 'Lorem ipsum...'
truncate('Lorem', 11) -> 'Lorem'

=== 04 ===
Viết hàm để trích xuất giá tiền đúng extractMoney(str)
extractMoney('100000đ') -> 100000
extractMoney('100đ') -> 100
extractMoney('123đ') -> 123
*/
ucFirst('abcdefg');
ucFirst = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const str = "Bạn tôi đang xem JaV";
  const subStr = "jav";
checkSubStr =(str, subStr)=>{
    str.includes(subStr)
}


// const str = 'abcdabcdabcd';

// const result = str.match(/.{1,4}/g) || [];

// // 👇️ ['abcd', 'abcd', 'abcd']
// console.log(result)
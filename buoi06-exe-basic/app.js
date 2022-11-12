let result = prompt ('bạn là ai?')
if (result==null) alert('Hủy')
if (result!== 'admin') {
    alert('Bạn là ai tui không biết')
} else {
    let result = prompt('mật khẩu của bạn là gì')
    if (result == null) alert('Hủy')
    if (result!== 'password') {
        alert('Mật khẩu sai')
    } else prompt('hello') 
}
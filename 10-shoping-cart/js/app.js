function createId() {
  // trả về một chuỗi ngẫu nhiên gồm 12 ký tự: 0-9a-zA-Z;
  const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let length = 12;
  let charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * charactersLength);
    result += characters[idx];
  }
  return result;
}

const PRODUCTS = [
  {
    id: 'hBuZdx1elR5a',
    name: 'Fushigidane',
    thumb: 'Fushigidane.png',
    shortDesc:
      'Người ta thường thấy Fushigidane nằm ngủ dưới ánh nắng. Càng đắm mình trong nắng, hạt giống trên lưng chúng càng phát triển.',
    price: 12,
  },
  {
    id: 'fDQWzrgq6gXX',
    name: 'Hitokage',
    thumb: 'Hitokage.png',
    shortDesc: 'Tính cách ưa thích đồ nóng. Nghe nói khi trời mưa khói sẽ phụt ra từ đuôi của nó.',
    price: 15,
  },
  {
    id: 'aLjNSdeJi9Q2',
    name: 'Zenigame',
    thumb: 'Zenigame.png',
    shortDesc:
      'Chiếc mai của Zenigame không chỉ để tự vệ, mà còn làm giảm tối đa lực cản nước nhờ hình dáng tròn trịa cùng bề mặt nhiều rãnh, giúp chúng bơi nhanh hơn.',
    price: 25,
  },
  {
    id: 'rOYIHlZQlwdV',
    name: 'Pikachu',
    thumb: 'Pikachu.png',
    shortDesc: 'Những Pikachu có thể tạo ra dòng điện càng mạnh thì túi má càng mềm mại và lớn nhanh.',
    price: 32,
  },
  {
    id: 'zzC3HkWp9g4s',
    name: 'Purin',
    thumb: 'Purin.png',
    shortDesc:
      'Những bản thu âm tuyển tập bài hát ru kì lạ của Purin được bán tại các cửa hàng tạp hóa. Rất nhiều người coi chúng là vật gối đầu giường.',
    price: 9,
  },
];

let carts = [
  //   {
  //     id: 'qhZ2wNwZZW63',
  //     productId: 'hBuZdx1elR5a',
  //     quantity: 2,
  //   },
  //   {
  //     id: 'gijYjCti3BvR',
  //     productId: 'fDQWzrgq6gXX',
  //     quantity: 1,
  //   },
  //   {
  //     id: 'RQpImf7zc8ao',
  //     productId: 'aLjNSdeJi9Q2',
  //     quantity: 3,
  //   },
  //   {
  //     id: 'LPobAEvux29H',
  //     productId: 'rOYIHlZQlwdV',
  //     quantity: 6,
  //   },
  //   {
  //     id: 'PpLjmYoKdRG1',
  //     productId: 'zzC3HkWp9g4s',
  //     quantity: 1,
  //   },
];

let elemList = document.getElementById('listProducts')
let elemCard = document.getElementById('cardProducts')
let elemToTal = document.getElementById('toTal')
let elemCount = document.getElementById('count')
let elemDesc = document.getElementById('btn-desc')



xhtml = ''
for (let i = 0; i < PRODUCTS.length; i++) {
  xhtml += `<div class="row align-items-center">
          <div class="col-6 col-md-4">
            <img src="img/${PRODUCTS[i].thumb}" alt="" class="img-fluid">
          </div>
          <div class="col-6 col-md-8">
            <h6>${PRODUCTS[i].name}</h6>
            <div class="form-group">
              <div class="d-flex">
                <button class="btn btn-primary desc"  > - </button>
                <input type="text" class="form-control mx-1" value="1" min="1" id="list-card-${PRODUCTS[i].id}">
                <button class="btn btn-primary asc"> + </button>
              </div>
              <button class="btn btn-danger btn-block mt-1 btn-add-to-cart" data-target="list-card-${PRODUCTS[i].id}" id="${PRODUCTS[i].id}">${PRODUCTS[i].price}</button>
            </div>
          </div>
          </div>`

}
elemList.innerHTML = xhtml;

renderList = (carts, PRODUCTS) => {
  html = ''
  let toTal = 0;
  let count = 0;
  carts.forEach((cartItem, index) => {
    let product = PRODUCTS.find(PRODUCTS => PRODUCTS.id == cartItem.productId)
    let Subtotal = product.price * cartItem.quantity
    toTal += Subtotal;
    count += cartItem.quantity;
    html += ` <tr>
                  <td>${index + 1}</td>
                  <td>${product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <input type="number" class="form-control" value="${cartItem.quantity}" id="btn-update-cart-${cartItem.id}">
                  </td>
                  <td><span class="fw-bold">${Subtotal}</span></td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm btn-rounded btn-update-cart" data-target="btn-update-cart-${cartItem.id}" id="${cartItem.id}">Update</button>
                    <button type="button" class="btn btn-link btn-sm btn-rounded" onclick="deleteCart('${cartItem.id}')">Delete</button>
                  </td>
              </tr>`
  });
  elemCard.innerHTML = html;
  elemToTal.innerText = '$' + toTal;
  elemCount.innerText = count;
}
renderList(carts, PRODUCTS)



deleteCart = (id) => {
  if (confirm('bạn có chắc muốn xóa')) {
    let result = carts.filter(cartItem => cartItem.id !== id)
    return renderList(result, PRODUCTS);
  }
}


document.addEventListener('click', (e) => {
  let el = e.target
  const checkIsBtndesc = el.classList.contains('desc');
  const value = parseInt(el.dataset.value)

})
// updateCartItem = (id,inputId) =>{
//   const inputEl= document.getElementById(inputId)
//   const idx = carts.findIndex(item => item.id === id)
//   carts[idx].quantity = parseInt(inputEl.value)
//   renderList(carts, PRODUCTS);
// }



elemCard.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-update-cart')) {
    cartId = e.target.id
    inputId = e.target.dataset.target
    const inputEl = document.getElementById(inputId)
    const idx = carts.findIndex(item => item.id === cartId)
    carts[idx].quantity = parseInt(inputEl.value)
    renderList(carts, PRODUCTS);
  }
})

// bắt sự kiện khi click vào 'btn-add-to-cart'
//   - lấy giá trị ở ô input tương ứng -> quantity
//   - lấy id của sản phẩm cần mua thông qua data-id -> productId
//   - tạo ra cartItem
//     {
//       id: createId(),
//       quantity: quantity,
//       productId: productId
//     }
//   - thêm cartItem vào carts -> carts.push(cartItem);
//   - render lại danh sách -> renderCarts(carts)

elemList.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-add-to-cart')) {
    inputId = e.target.dataset.target
    const inputEl = document.getElementById(inputId)
    let currentQuantity = parseInt(inputEl.value)
    let idProduct = e.target.id
    const idx = carts.findIndex(item => item.id === idProduct)
    if (idx === -1) {
      let cartItem = {
        id: createId(),
        quantity: currentQuantity,
        productId: idProduct
      }
      carts.push(cartItem);
    } else {
      carts[idx].quantity =  carts[idx].quantity + currentQuantity;
    }
    renderList(carts, PRODUCTS);
  }
})
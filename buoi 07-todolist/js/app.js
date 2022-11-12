let todos = [
  { id: createId(), name: 'coding', level: 3 },
  { id: createId(), name: 'eating', level: 1 },
  { id: createId(), name: 'sleeping', level: 2 },
  { id: createId(), name: 'nodejs', level: 2 },
  { id: createId(), name: 'sleeping', level: 3 },
  { id: createId(), name: 'reactjs', level: 1 },
  { id: createId(), name: 'backend', level: 1 },
];
const mylist = document.getElementById('my-list')
const inputName = document.getElementById('input-name')
const btnSave = document.getElementById('btn-save')
const inputLevel = document.getElementById('input-level')

function createId() {
  // trả về một chuỗi ngẫu nhiên gồm 12 ký tự: 0-9a-zA-Z;
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let length = 12;
  let charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * charactersLength);
    result += characters[idx];
  }
  return result;
}


showLevel = (level) => {
  let classLevel = 'danger'
  let Ilevel = 'high'
  if (level === 2) {
    classLevel = 'warning'
    Ilevel = 'medium'
  } if (level === 3) {
    classLevel = 'primary'
    Ilevel = 'small'
  }
  return `<span class="badge badge-${classLevel} rounded-pill d-inline">${Ilevel}</span>`;
}

renderTodo = (items) => {
  xhtml = '';
  for (let i = 0; i < items.length; i++) {
    xhtml += `<tr>
                <td>${i + 1}</td>
                <td>${items[i].id}</td>
                <td>${items[i].name}</td>
                <td>${showLevel(items[i].level)}</td>
                <td>
                  <button type="button" class="btn btn-link btn-sm btn-rounded">Edit</button>
                  <button type="button" class="btn btn-link btn-sm btn-rounded" onclick="deleteItem('${items[i].id}')">Delete</button>
                </td>
              </tr>`
  }
  mylist.innerHTML = xhtml;
}

renderTodo(todos);

btnSave.addEventListener('click', () => {
  let valueName = inputName.value.trim();
  let valueLevel = parseInt(inputLevel.value);
  if (valueName === '') {
    alert = 'vui lòng nhập task name'
  } else {
    const newTodo = {
      id: createId(),
      name: valueName,
      level: valueLevel
    }
    todos.push(newTodo);
    renderTodo(todos);
    inputName.value = ''
    inputLevel.value = 1
  }

})
deleteItem = (id) => {
  for (var i = 0; i < todos.length; i++) {
    if(confirm ('bạn có chắc muốn xóa')){
      if (todos.indexOf(todos[i].id) !== id) {
        todos.splice(todos[i], 1);
        return renderTodo(todos);;
      }
    }
      
  }
}

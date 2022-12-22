// // Menu
fetch(`${URL_BASE}categories_news`)
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data
    // console.log(categories)
    // duyệt categories
    let contentHTML = '';
    let xhtml = ''
    categories.forEach((category, index) => {
        if (index < 2) {
            contentHTML += `<li class="nav-item">
            <a class="nav-link" href="${category.link}">${category.name}</a>
        </li>`
        } else {
            xhtml +=  `<a class="dropdown-item" href="${category.link}">${category.name}</a> `
        }
       
    });
    if (xhtml!== '') {
        xhtml = `<li class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Danh mục khác <span class="fa fa-angle-down"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                        ${xhtml}
                    </div>
            </li>`
    }
    document.getElementById('main-menu').innerHTML= contentHTML + xhtml
  });
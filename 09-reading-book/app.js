let elesTextAlign = document.getElementById('slb-text-align')
let eleLineHeight = document.getElementById('line-height')
let eleBackgroundColor = document.getElementById('background-color')
let eleFontSize = document.getElementById('font-size')
let body = document.getElementById('content')



loadStorage = () => {
    return JSON.parse(localStorage.getItem("CONFIG_READING")) ;
  }
  
  saveStorage = (item) => {
      localStorage.setItem("CONFIG_READING", JSON.stringify(item));
  }
  
  getItem = () => {
      let item = loadStorage() ;
      if(item === null) item = {
        'fontSize': '24px',
        'backgroundColor': 'white',
        'lineHeight': '30px',
        'textAlign': 'left'
      };  
      return item;
  }
  
  saveBackground = (value) => {
    let item = getItem() ;
    item['backgroundColor'] = value;
    saveStorage(item);
  }
  
  saveFontSize = (value) => {
    let item = getItem() ;
    item['fontSize'] = value;
    saveStorage(item);
  }
  
  saveTextAlign = (value) => {
    let item = getItem() ;
    item['textAlign'] = value;
    saveStorage(item);
  }

elesTextAlign.addEventListener('click', (e) => {
    saveTextAlign(e.target.value)
    // let Align = e.target.value;
    // body.style.textAlign = Align;
})

eleLineHeight.addEventListener('click', (e) => {
    // let lineHeight = e.target.value;
    // body.style.lineHeight = lineHeight;
})

eleBackgroundColor.addEventListener('click', (e) => {
    const checkBackgroundColor = e.target.classList.contains('btn-background');
    if (checkBackgroundColor) {
        saveBackground(e.target.dataset.value)
        // let backgroundColor = e.target.dataset.value;
        // body.style.backgroundColor = backgroundColor;
    }
});
var computedFontSize = window.getComputedStyle(body).fontSize;

eleFontSize.addEventListener('click', (e) => {
    const checkdesc = e.target.classList.contains('decrease');
    const checkAsc = e.target.classList.contains('increase');
    
    if (checkdesc) {
        saveFontSize(computedFontSize)
        // computedFontSize = parseInt(computedFontSize) - 1 + 'px'
        // body.style.fontSize = computedFontSize;
    }
    if (checkAsc) {
        // computedFontSize = parseInt(computedFontSize) + 1 + 'px'
        // body.style.fontSize = computedFontSize;
        saveFontSize(computedFontSize)
    }
})
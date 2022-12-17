let btnSubmit = document.getElementById('btn-submit')
let eleName   = document.getElementById('name');
let eleEmail   = document.getElementById('email')
let eleJob   = document.getElementById('job')


document.getElementById('name').value = JSON.parse( localStorage.getItem("Name"))
document.getElementById('email').value = JSON.parse(localStorage.getItem("Email"))
document.getElementById('email').value = JSON.parse(localStorage.getItem("Job"))

btnSubmit.addEventListener('click', (e) => {
    localStorage.setItem('Name', JSON.stringify(eleName.value));
    localStorage.setItem('Email', JSON.stringify(eleEmail.value));
    localStorage.setItem('Job', JSON.stringify(eleJob.value));
})



const form = document.querySelector('.footer__form');
const email = document.querySelector('#email');
const error = document.querySelector('.form__error');

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(input.value.trim())) {
     input.value= "";
    } else {
        error.style.display = "block";
            error.innerHTML = "Check your email please";
        setInterval(() => {
            error.style.display = "none";
        }, 2000);
   
    }
}
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail(email);
   
  });
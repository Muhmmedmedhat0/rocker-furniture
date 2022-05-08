
// form validation
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let submitBtn = document.querySelector('#submit');
let startWith010 = /^[010]/i;
let startWith011 = /^[011]/i;
let startWith012 = /^[012]/i;


// check name feild
name.addEventListener('input', () => {
  if (!isNaN(name.value) === true) {
    name.style.border = '1px solid red';
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
  } else {
    name.style.border = '1px solid green';
    submitBtn.disabled = false;
    submitBtn.style.cursor = 'pointer';
  }
})
// check email feild
email.addEventListener('input', () => {
  if (email.value.indexOf(`@`) < 2
    || (email.value.lastIndexOf(`.`) - email.value.indexOf(`@`)) < 2
    || (email.value.length - email.value.indexOf(`@`)) < 3) {
    email.style.border = '1px solid red';
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
  } else if (email.value.length > 3) {
    email.style.border = '1px solid green';
    submitBtn.disabled = false;
    submitBtn.style.cursor = 'pointer';
  }
});

// check phone feild
phone.addEventListener('input', () => {
  if (phone.value.length !== 11) {
    phone.style.border = '1px solid red';
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
  } else {
    phone.style.border = '1px solid green';
    submitBtn.disabled = false;
  }
});



// scroll to top
const scrollToTop = document.querySelector('.top_button');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTop.style.display = 'block';
    scrollToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  } else {
    scrollToTop.style.display = 'none';
  }
})
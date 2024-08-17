const buttonToChangeContrast = document.querySelector('.button-change-contrast')
const body = document.querySelector('body')
const form = document.querySelector('.form')
const formTop = document.querySelector('.form-top')

buttonToChangeContrast.addEventListener('click', function () {
  body.classList.toggle('contrast-body')
  form.classList.toggle('contrast-form')
  formTop.classList.toggle('contrast-form-top')
})
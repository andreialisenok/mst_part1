window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('shadow');
  } else {
    document.querySelector('.header').classList.remove('shadow');
  }
});

const orderBtns = document.querySelectorAll('.order');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const close = document.querySelector('.close');
orderBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    modal.classList.add('show');
  });
});
modal.addEventListener('click', function () {
  modal.classList.remove('show');
});
modalForm.addEventListener('click', function (e) {
  e.stopPropagation();
});
close.addEventListener('click', function () {
  modal.classList.remove('show');
});

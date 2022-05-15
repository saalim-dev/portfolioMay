var resumeBtn = document.querySelector('.resume');
var modalBg = document.querySelector('.modal-bg');
var certBtn = document.querySelector('.cert');
var certModalBg = document.querySelector('.modal-bg-cert');
var close = document.querySelector('.close');
var closeCert = document.querySelector('.close-cert');
var active = document.querySelector('.modal-active');

resumeBtn.addEventListener('click', 
() => {
  modalBg.classList.add('modal-active');
});
close.addEventListener('click', () => {
    modalBg.classList.remove('modal-active');
});

certBtn.addEventListener('click', () => {
    certModalBg.classList.add('modal-active');
});
closeCert.addEventListener('click', () => {
    certModalBg.classList.remove('modal-active');
});
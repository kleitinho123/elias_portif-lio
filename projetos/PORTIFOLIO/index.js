const hamburguer = document.querySelector('.hamburguer');
const close = document.querySelector('.close');
const ul = document.querySelector('ul');

const li = document.querySelectorAll('li');


hamburguer.addEventListener('click', ()=>{

  ul.classList.add('show');
  close.classList.add('hamburguer');
  hamburguer.style.display = 'none'
});

close.addEventListener('click', ()=>{

  ul.classList.remove('show');
  close.classList.remove('hamburguer');
  hamburguer.style.display ='block'
});

li.addEventListener('click', ()=>{
  ul.classList.toggle('show');
  close.classList.remove('hamburguer');
  hamburguer.style.display ='block'
})






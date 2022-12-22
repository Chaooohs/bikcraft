

const nav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');                

burger.onclick = () => {
  if (nav.classList.toggle('active')) {            
    body.classList.add('no-scroll'); 
    burger.classList.add('active');                   
  } else {
    body.classList.remove('no-scroll');
    burger.classList.remove('active');                  
  }
}
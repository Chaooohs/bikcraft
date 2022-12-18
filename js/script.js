

const nav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.nav__btn');
const body = document.querySelector('body');                

burger.onclick = () => {
  if (nav.classList.toggle('active')) {            
    body.classList.add('no-scroll');                    
  } else {
    body.classList.remove('no-scroll');                  
  }
}
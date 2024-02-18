import '../public/css/normalize.css';
import '../public/css/draft_common.scss';
import '../public/css/draft_1_0.scss';

import One from './demo-1'
new One();

const homeBack = document.querySelector('.home-back');
const homeOuter = document.querySelector('.home-outer');
const homeInner = document.querySelector('.home-wrap');
const header = document.querySelector('.header-epson');

homeOuter.addEventListener('scroll', ()=>{
  if(homeInner.offsetTop > 10){
    homeBack.style.opacity = 0;
  }else if(homeInner.offsetTop < 10){
    homeBack.style.opacity = 1;
  }
}, false);
  
//---------------------------





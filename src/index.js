import loadPage from './loader';
import loadHome from './home';
import loadMenu from './menu';

init();


function changeTab(){
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const reservationBtn = document.getElementById('reservation');
    const contactBtn = document.getElementById('contact');
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
}

function init(){
    loadPage();
    changeTab();
};
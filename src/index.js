import loadPage from './loader';
import loadHome from './home';

init();


function changeTab(){
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const reservationBtn = document.getElementById('reservation');
    const contactBtn = document.getElementById('contact');
    homeBtn.addEventListener('click', loadHome);
}

function init(){
    loadPage();
    changeTab();
};
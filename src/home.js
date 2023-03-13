import homeImg from './asset/home.jpg'
function createHome(){
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const homeImage = document.createElement('img');
    homeImage.setAttribute('src', homeImg);
    homeImage.setAttribute('alt', 'image of a restaurant');

    const h1 = document.createElement('h1');
    h1.textContent = 'DFB connects people with happiness.';
    const aboutSection = document.createElement('section');
    aboutSection.innerHTML =`<h2>About Us</h2>
    <p>We believe good food offer great smile. You don't need to be a master chef to enjoy good food. We offer great indian cuisines and beers.</p>`

    home.appendChild(homeImage);
    home.appendChild(h1);
    home.appendChild(aboutSection);

    return home;
}

function loadHome(){
const main = document.querySelector("main");
   main.textContent="";
   main.appendChild(createHome());
}

export default loadHome;

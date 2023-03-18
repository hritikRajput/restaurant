import butterChicken from "./asset/butterchicken.jpg";
import kadhaiPaneer from "./asset/kadhaipaneer.jpg";
import paavBhaji from "./asset/paavbhaji.jpg";
import saagPaneer from "./asset/saagpaneer.jpg";
import samosa from "./asset/samosa.jpg";
import tandooriChicken from "./asset/tandoorichicken.jpg";

function createMenu(){
    const menu = document.createElement('div');
    menu.id='menu';

    const h1= document.createElement('h1');
    h1.textContent = "Menu";

    const cards = document.createElement('section');

    // return card for particular dish
    function createCard(cardId, title, price, detail, [imgSrc, imgAlt]){
    const card = document.createElement('article');
    card.id= cardId;
    card.className='card';
    const cardTitle = document.createElement('h2');
    const cardPrice = document.createElement('p');
    const cardDetail = document.createElement('p');
    const cardImg = document.createElement('img');
    cardTitle.textContent=title;
    cardPrice.textContent= `${price}$`;
    cardDetail.textContent=detail;
    cardImg.src=imgSrc;
    cardImg.alt=imgAlt;

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);
    card.appendChild(cardDetail);
    return card;
    }

    //create card for each dish
    const card1 = createCard("card1", "Butter Chicken", 25, "A+GH+HU", [butterChicken, "image of samosa"]);
    const card2 = createCard("card2", "Kadhai Paneer", 25, "A+GH+HU", [kadhaiPaneer, "image of samosa"]);
    const card3 = createCard("card3", "Saag Paneer", 25, "A+GH+HU", [saagPaneer, "image of samosa"]);
    const card4 = createCard("card4", "Samosa", 25, "A+GH+HU", [samosa, "image of samosa"]);
    const card5 = createCard("card5", "Paav Bhaji", 25, "A+GH+HU", [paavBhaji, "image of samosa"]);
    const card6 = createCard("card6", "Tandoori Chicken", 25, "A+GH+HU", [tandooriChicken, "image of samosa"]);
    
   cards.appendChild(card1)
   cards.appendChild(card2)
   cards.appendChild(card3)
   cards.appendChild(card4)
   cards.appendChild(card5)
   cards.appendChild(card6)
    menu.appendChild(h1)
    menu.appendChild(cards)
    return menu;

}
function loadMenu(){
    const main = document.querySelector("main");
   main.textContent="";
   main.appendChild(createMenu());
}

export default loadMenu;
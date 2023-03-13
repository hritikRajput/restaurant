import loadHome from "./home";

function loadPage() {
    const content = document.getElementById('content');

    // header
    const header = document.createElement('header');
    header.classList.add('header');
    const nav = document.createElement('nav');
    nav.innerHTML = `<ul id='nav'>
            <li><a href='#' class='nav_btn' id='home'>Home</a></li>
            <li><a href='#' class='nav_btn' id='menu'>Menu</a></li>
            <li><a href='#' class='nav_btn' id='reservation'>Reservation</a></li>
            <li><a href='#' class='nav_btn' id='contact'>Contact</a></li>
        </ul>`;
    header.appendChild(nav);
    content.appendChild(header);

  
    // main
    const main = document.createElement('main');


    // footer
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent = `Copyright \xA9 2023 rajputhritik`;
    footer.appendChild(footerText);


    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
  }

  export default loadPage
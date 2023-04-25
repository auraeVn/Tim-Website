
const navLinks = document.querySelectorAll('nav div p');
const main = document.querySelector('main');
const container = document.querySelector('#container');


// AJOUTER TEMPLATES section 1 et section 2 DANS MAIN 

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkText = event.target.textContent;

    for (let contenu of contenus) {
      if (contenu.id === linkText) {
        const htmlContent = `
          <section class="section1">
            <div>
              <p>${contenu.titre}</p>
              <p>${contenu.traductionTitre}</p>
            </div>
            <div>
              <p>${contenu.description}</p>
            </div>
            <div>
              <p>${contenu.texte}</p>
              <p>${contenu.traductionTexte}</p>
            </div>
          </section>
          <section class="section2">
            <div>
              <img class="image1" src="${contenu.image1}">
            </div>
            <div class="grid-two-cols"></div>
            <div class="grid-three-cols"></div>
          </section>
        `;

        main.innerHTML = htmlContent;

// CONDITION POUR OCCUPATION VISUELLE
        const img = document.querySelector('.image1');
        if (contenu.id === "Occupation Visuelle"){
             img.classList.toggle("image1-small");
        }
    
// TEMPLATES POUR CHAQUE SECTION 2
        const gridTwoCols = document.querySelector('.grid-two-cols');
        const gridThreeCols = document.querySelector('.grid-three-cols');
        const section1 = document.querySelector(".section1");
        const section2 = document.querySelector(".section2");

        switch (contenu.id) {
          case 'Il y a un endroit dans la nuit':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
              <img class="image5" src="${contenu.image5}">
            `;
            break;
          case 'Tenace':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
              <img class="image5" src="${contenu.image5}">
            `;
            break;
          case 'Déni de réalité':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
              <img class="image2 grid-col-span-2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
          case '3 Fantômes sur une poussière':
            gridTwoCols.classList.add("hidden");
            gridThreeCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
          case 'Occupation visuelle':
            gridTwoCols.classList.add("hidden");
            gridThreeCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
            case 'Antigraffitisme':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
            <img class="image2" src="${contenu.image2}">
            <img class="image3" src="${contenu.image3}">
            `;
            break;
          case 'Dumb City':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
              <img class="image2 grid-row" src="${contenu.image2}">
              <img class="image3 grid-row-span1" src="${contenu.image3}">
              <img class="image4 grid-row-span2" src="${contenu.image4}">
            `;
            break;
          case 'Occupation Visuelle':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4 grid-col-span-2" src="${contenu.image4}">
              <img class="image5 grid-col-span-2" src="${contenu.image5}">
              <img class="image6" src="${contenu.image6}">
              <img class="image7" src="${contenu.image7}">
              <img class="image8" src="${contenu.image8}">
              <img class="image9" src="${contenu.image9}">
              <img class="image10" src="${contenu.image10}">
              <img class="image11" src="${contenu.image11}">
            `;
            break;
          case 'Os invasores':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
           
            <img class="image2 grid-col-span-2" src="${contenu.image2}">
            <img class="image3 grid-col-span-2" src="${contenu.image3}">
            <img class="image4 grid-col-span-2" src="${contenu.image4}">
            <img class="image5 grid-col-span-2" src="${contenu.image5}">
            <img class="image6 grid-col-span-2" src="${contenu.image6}">
            <img class="image7 grid-col-span-2" src="${contenu.image7}">
            `;
            break;
          case 'Effacements':
            gridThreeCols.classList.add("hidden");
            gridTwoCols.innerHTML = `
            <img class="image2 grid-col-span-2" src="${contenu.image2}">
            <img class="image3 grid-col-span-2" src="${contenu.image3}">
            <img class="image4 grid-col-span-2" src="${contenu.image4}">
            <img class="image5 grid-col-span-2" src="${contenu.image5}">
            <img class="image6 grid-col-span-2" src="${contenu.image6}">
          `;
          break;
        case 'Oeil pour oeil':
          gridThreeCols.classList.add("hidden");
          gridTwoCols.innerHTML = `
            <img class="image2" src="${contenu.image2}">
            <img class="image3" src="${contenu.image3}">
          `;
          break;
        case 'Bio':
          section2.classList.add("hidden");
          section1.innerHTML = `
          <div>
            <img class="autoportrait" src="${contenu.titre}">
          </div>
          <div>
            <p>${contenu.description}</p>
          </div>
          <div>
            <p>${contenu.texte}</p>
            <p>${contenu.traductionTexte}</p>
          </div>
        `;
          break;
        case 'Contact':
          section2.classList.add("hidden");
          section1.innerHTML = `
          <div class="contact">
          <div>
            <p>${contenu.email}</p>
          </div>
          <div>
        `;
          default:
            break;
        }
      }
    }
  });
});




// MENU HAMBURGER ET NAVBAR MOBILE

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("header");
hamburger.onclick = () => {
    hamburger.classList.toggle("open");
    navbar.classList.toggle("slide");
}

navLinks.forEach(link => {
  link.addEventListener("click", function(){
      navbar.classList.remove("slide");
      hamburger.classList.remove("open");
  });
});

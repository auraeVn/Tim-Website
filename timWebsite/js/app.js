
const navLinks = document.querySelectorAll('nav div p');
const main = document.querySelector('main');

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
              <p>${contenu.description.split("\n").join("<br>")}</p>
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

        const img = document.querySelector('.image1');
        if (contenu.id === "Occupation Visuelle"){
             img.classList.toggle("image1-small");
            //  const imgBio = document.createElement('img');
            //  imgBio.classList('imgBio');
            //  imgBio.src = contenu.titre;
            //  p.append(imgBio);
        }
       
    

        const gridTwoCols = document.querySelector('.grid-two-cols');
        const gridThreeCols = document.querySelector('.grid-three-cols');
        const image1 = document.querySelector('.image1');

        switch (contenu.id) {
          case 'Il y a un endroit dans la nuit':
            gridTwoCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
              <img class="image5" src="${contenu.image5}">
            `;
            break;
          case 'Tenace':
            gridTwoCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
              <img class="image5" src="${contenu.image5}">
            `;
            break;
          case 'Déni de réalité':
            gridTwoCols.innerHTML = `
              <img class="image2 grid-col-span-2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
          case '3 Fantômes sur une poussière':
            gridThreeCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
          case 'Occupation visuelle':
            gridThreeCols.innerHTML = `
              <img class="image2" src="${contenu.image2}">
              <img class="image3" src="${contenu.image3}">
              <img class="image4" src="${contenu.image4}">
            `;
            break;
            case 'Antigraffitisme':
            gridTwoCols.innerHTML = `
            <img class="image2" src="${contenu.image2}">
            <img class="image3" src="${contenu.image3}">
            `;
            break;
          case 'Dumb City':
            gridTwoCols.innerHTML = `
              <img class="image2 grid-row" src="${contenu.image2}">
              <img class="image3 grid-row-span1" src="${contenu.image3}">
              <img class="image4 grid-row-span2" src="${contenu.image4}">
            `;
            break;
          case 'Occupation Visuelle':
    
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
            gridTwoCols.innerHTML = `
           
            <img class="image2 grid-col-span-2" src="${contenu.image2}">
            <img class="image3 grid-col-span-2" src="${contenu.image3}">
            <img class="image4 grid-col-span-2" src="${contenu.image4}">
            <img class="image5 grid-col-span-2" src="${contenu.image5}">
            <img class="image6 grid-col-span-2" src="${contenu.image6}">
          `;
          break;
        case 'Oeil pour oeil':
          gridTwoCols.innerHTML = `
            <img class="image2" src="${contenu.image2}">
            <img class="image3" src="${contenu.image3}">
          `;
          break;
        case 'Bio':
        
          break;
          default:
            break;
        }
      }
    }
  });
});

















// const navLinks = document.querySelectorAll('nav div p');
// const main = document.querySelector('main');


// navLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     const linkText = event.target.textContent;

//     for (let contenu of contenus) {
//       if (contenu.titre === linkText) {
//         const htmlContent = `
//           <section class="section1">
//             <div>
//               <p>${contenu.titre}</p>
//               <p>${contenu.traductionTitre}</p>
//             </div>
//             <div>
//               <p>${contenu.description.split("\n").join("<br>")}</p>
//             </div>
//             <div>
//               <p>${contenu.texte}</p>
//               <p>${contenu.traductionTexte}</p>
//             </div>
//           </section>
//           <section class="section2">
//             <div>
//               <img class="image1" src="${contenu.image1}">
//               </div>
//               <div class="templates">
//               ${(() => {
//                 let imageTemplate = "";
//                 switch (contenu.titre) {
//                             case 'Il y a un endroit dans la nuit':
//                               imageTemplate = `
                                
//                                 <img class="image2" src="${contenu.image2}">
//                                 <img class="image3" src="${contenu.image3}">
//                                 <img class="image4" src="${contenu.image4}">
//                                 <img class="image5" src="${contenu.image5}">
//                               `;
//                               break;
//                             case 'Tenace':
//                               imageTemplate = `
                               
//                                 <img class="image2" src="${contenu.image2}">
//                                 <img class="image3" src="${contenu.image3}">
//                                 <img class="image4" src="${contenu.image4}">
//                                 <img class="image5" src="${contenu.image5}">
//                               `;
//                               break;
//                             case 'Déni de réalité':
//                               imageTemplate = `
                               
//                                 <img class="image2 grid-col-span-2" src="${contenu.image2}">
//                                 <img class="image3" src="${contenu.image3}">
//                                 <img class="image4" src="${contenu.image4}">
//                               `;
//                               break;
//                             case '3 Fantômes sur une poussière':
//                               imageTemplate = `
                             
//                               <img class="image2" src="${contenu.image2}">
//                               <img class="image3" src="${contenu.image3}">
//                               <img class="image4" src="${contenu.image4}">
//                               `;
                              
//                               break;
//                             case 'Occupation visuelle':
//                               imageTemplate = `
                                
//                                 <img class="image2" src="${contenu.image2}">
//                                 <img class="image3" src="${contenu.image3}">
//                                 <img class="image4" src="${contenu.image4}">
//                                 `;
//                                 break; 

//                                default: imageTemplate = "";
//                                break; 
//                               } 
//                      return imageTemplate;
//                      })()
//                     } 
//               </div> 
//            </section>` ;
//         main.innerHTML = htmlContent;
//    }
//   }
// })
// });












// // on sélectionne tous les éléments p dans les div de la nav
// const navLinks = document.querySelectorAll('nav div p');
// const main = document.querySelector('main');

// // pour chaque lien dans la nav, on ajoute un gestionnaire d'événement au clic
// navLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     // on récupère le texte du lien sur lequel on a cliqué
//     const linkText = event.target.textContent;

//     // on parcourt le tableau contenus pour trouver l'objet correspondant
//     for (let contenu of contenus) {
      
//       if (contenu.titre === linkText) {
//         // on affiche le contenu de l'objet dans le main


//                 const htmlContent = `
//           <section class="section1">
//             <div>
//               <p>${contenu.titre}</p>
//               <p>${contenu.traductionTitre}</p>
//             </div>
//             <div>
//               <p>${contenu.description.split("\n")}</p>
//             </div>
//             <div>
//               <p>${contenu.texte}</p>
//               <p>${contenu.traductionTexte}</p>
//             </div>
//           </section>
//           <section class="section2">
//             <div>
//               <img class="image1" src="${contenu.image1}">
//             </div>
//             <div>
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//               <img class="image5" src="${contenu.image5}">
//             </div>
//           </section>
//         `;
//         main.innerHTML = htmlContent;
//         break;
  



//         // on définit le template d'image en fonction de l'objet
//         let imageTemplate;
//         switch (contenu.titre) {
//           case 'Il y a un endroit dans la nuit':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//               <img class="image5" src="${contenu.image5}">
//             `;
//             break;
//           case 'Tenace':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//               <img class="image5" src="${contenu.image5}">
//             `;
//             break;
//           case 'Déni de réalité':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//             `;
//             break;
//           case '3 Fantômes sur une poussière':
//             imageTemplate = `
//             <img class="image1" src="${contenu.image1}">
//             <img class="image2" src="${contenu.image2}">
//             <img class="image3" src="${contenu.image3}">
//             <img class="image4" src="${contenu.image4}">
//             `;
//             break;
//           case 'Occupation visuelle':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//             `;
//             break;
//           case 'Antigraffitisme':
//             imageTemplate = `
//             <img class="image1" src="${contenu.image1}">
//             <img class="image2" src="${contenu.image2}">
//             <img class="image3" src="${contenu.image3}">
//             `;
//             break;
//           case 'Dumb City':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//             `;
//             break;
//           case 'Occupation Visuelle':
//             imageTemplate = `
//               <img class="image1" src="${contenu.image1}">
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//               <img class="image5" src="${contenu.image5}">
//               <img class="image6" src="${contenu.image6}">
//               <img class="image7" src="${contenu.image7}">
//               <img class="image8" src="${contenu.image8}">
//               <img class="image9" src="${contenu.image9}">
//               <img class="image10" src="${contenu.image10}">
//               <img class="image11" src="${contenu.image11}">
//             `;
//             break;
//           case 'Os invasores':
//             imageTemplate = `
//             <img class="image1" src="${contenu.image1}">
//             <img class="image2" src="${contenu.image2}">
//             <img class="image3" src="${contenu.image3}">
//             <img class="image4" src="${contenu.image4}">
//             <img class="image5" src="${contenu.image5}">
//             <img class="image6" src="${contenu.image6}">
//             <img class="image7" src="${contenu.image7}">
//             `;
//             break;
//           case 'Effacements':
//             imageTemplate = `
//             <img class="image1" src="${contenu.image1}">
//             <img class="image2" src="${contenu.image2}">
//             <img class="image3" src="${contenu.image3}">
//             <img class="image4" src="${contenu.image4}">
//             <img class="image5" src="${contenu.image5}">
//             <img class="image6" src="${contenu.image6}">
//           `;
//           break;
//         case 'Oeil pour oeil':
//           imageTemplate = `
//             <img class="image1" src="${contenu.image1}">
//             <img class="image2" src="${contenu.image2}">
//             <img class="image3" src="${contenu.image3}">
//           `;
//           break;
//         case 'Bio':
//           imageTemplate = `
//           `;
//           break;
//         default:
//           imageTemplate = '';
//       }
//     }
//   }
// });

        
   




























// // on sélectionne tous les éléments p dans les div de la nav
// const navLinks = document.querySelectorAll('nav div p');
// const main = document.querySelector('main');

// // pour chaque lien dans la nav, on ajoute un gestionnaire d'événement au clic
// navLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     // on récupère le texte du lien sur lequel on a cliqué
//     const linkText = event.target.textContent;

//     // on parcourt le tableau contenus pour trouver l'objet correspondant
//     for (let contenu of contenus) {

//       if (contenu.titre === linkText) {
//         // on affiche le contenu de l'objet dans le main
//         const htmlContent = `
//           <section class="section1">
//             <div>
//               <p>${contenu.titre}</p>
//               <p>${contenu.traductionTitre}</p>
//             </div>
//             <div>
//               <p>${contenu.description.split("\n")}</p>
//             </div>
//             <div>
//               <p>${contenu.texte}</p>
//               <p>${contenu.traductionTexte}</p>
//             </div>
//           </section>
//           <section class="section2">
//             <div>
//               <img class="image1" src="${contenu.image1}">
//             </div>
//             <div>
//               <img class="image2" src="${contenu.image2}">
//               <img class="image3" src="${contenu.image3}">
//               <img class="image4" src="${contenu.image4}">
//               <img class="image5" src="${contenu.image5}">
//             </div>
//           </section>
//         `;
//         main.innerHTML = htmlContent;
//         break;
//       }
//     }
//   });
// });











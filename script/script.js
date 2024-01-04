// Écrivez une fonction qui imite le comportement d'une machine à écrire.

// En utilisant, setInterval affichez le mot Wilson-2 un caractère à la fois (une lettre par seconde). Une fois le mot écrit sur l'écran, effacez l'intervalle.

// Si vous souhaitez le rendre joli, ajoutez un effet de transition sur l'apparition du caractère

let mot = "Wilson-2";
  let place = document.getElementById('texte');
  let i = 0;

  let machine = () => {
    if (i === mot.length) {
      clearInterval(interval);
    }

    let charSpan = document.createElement('span');
    charSpan.textContent = mot[i];
    place.appendChild(charSpan);
    setTimeout(() => {
        charSpan.classList.add('visible');
      }, 500);
    i++;
  }

  let interval = setInterval(machine, 1000);
  
//   Écrivez une fonction qui affiche chaque seconde écoulée sur la page depuis son ouverture. L’affichage doit être actualisé toutes les secondes. Si 60 secondes se sont écoulées, écrivez « une minute s'est écoulée », puis « 2 minutes se sont écoulées » (pendant 120 secondes et plus), etc.
//   N'hésitez pas, encore une fois, à ajouter un effet de transition ! (un différent cette fois bien sûr)

let place2 = document.getElementById('temps');
let place3 = document.getElementById('minute');
let x = 1;

let afficheTemps = () =>{
    place2.innerHTML = x + 's';
    if(x%60 == 0){
        if(x/60 == 1){
            place3.innerHTML = x/60 + " minute s'est écoulée";
            setTimeout(()=> {
                place3.classList.add('transition');
              }, 500);
        }
        else{
            place3.classList.remove('transition');
            setTimeout(()=> {
                place3.classList.add('transition');
              }, 500);
            place3.innerHTML = x/60 + " minutes se sont écoulées";
        }
    }
    x++;
}
let interval2 = setInterval(afficheTemps , 1000);





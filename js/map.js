let x = 0;            // Position x initialement initialisé à 0
let y = 0;            // Position y initialement initialisé à 0

let fichier = "";     // Variable fichier initialement initialisé vide
let nbrDiamant = 0;   // Variable du nombre de diamant initialement mis à 0
let tab = [];         // Initialisation du tableau qui va stocker
let tab1 = [];        // Initialisation du tableau qui va afficher

document.addEventListener("DOMContentLoaded", () => {
  chargerMap();
});

function chargerMap() {
  if (map < 4) {
    fetch("Map/Map" + map + ".txt").then((res) => res.text()).then((text) => {  // lis le fichier Map(..).txt dans le fichier Map et incrémente les lvl
      fichier = text;           // le fichier text est implémenter dans la variable fichier
      nbrDiamant = 0;           // Nouveau niveau donc remise à 0 des valeurs
      nbrDeplacement = 0;       // Nouveau niveau donc remise à 0 des valeurs
      nbrDiamantCollecte = 0;   // Nouveau niveau donc remise à 0 des valeurs
      tab = [];                 // Nouveau niveau donc remise à 0 du tableau qui servira à afficher le jeu
      mort = false;             // Mort = false car le jeu sera affiché
      chargerTab();             // Appel la fonction qui va charger le tableau
    });
  }
  else {
    map = 1;
    document.getElementById("bienvenue").hidden = false;    // Si les 3 niveaux sont finis, retourne à la page d'acceuil
    document.getElementById("jeu").hidden = true;           // Si les 3 niveaux sont finis, cache la div jeu
  }
}

function chargerTab() {
  for (let ligne of fichier.split(/\n/)) {                  // C'est une boucle avec une déctection de retour à la ligne
    tab1 = [];                                              // Remise à vide du tableau de stockage
    for (let i = 0; i < ligne.length; i++) {                // Boucle qui va permettre de charger le tableau 
      if (ligne[i] === "M") {                               // Détecte la lettre M dans le fichier de la map et rempli le tableau et ainsi de suite pour les autres lettres également
        tab1.push("M");
      }
      if (ligne[i] === "T") {
        tab1.push("T");
      }
      if (ligne[i] === "R") {
        tab1.push("R");
      }
      if (ligne[i] === "D") {
        tab1.push("D");
        nbrDiamant += 1;
      }
      if (ligne[i] === "V") {
        tab1.push("V");
      }
      if (ligne[i] === "P") {
        tab1.push("P");
      }
      else if (ligne[i] === "0") {
      }
    }

    tab.push(tab1);                                           // Rempli le tableau qui va afficher la grille
  }
  afficherTab();                                              // Appel de la fonction qui va afficher le tableau
}

function afficherTab() {
  const grille = document.getElementById("grille");           // Appel de la grille
  grille.innerHTML = '';
  for (let i = 0; i < tab.length; ++i) {
    let tabHTML = '<div class="tab">';
    for (let j = 0; j < tab[i].length; ++j) {
      if (tab[i][j] === "M") {
        tabHTML += '<div class="mur"></div>';
      }
      if (tab[i][j] === "T") {
        tabHTML += '<div class="terre"></div>';
      }
      if (tab[i][j] === "R") {
        tabHTML += '<div class="rocher"></div>';
      }
      if (tab[i][j] === "D") {
        tabHTML += '<div class="diamant"></div>';
      }
      if (tab[i][j] === "V") {
        tabHTML += '<div class="vide"></div>';
      }
      if (tab[i][j] === "P") {
        tabHTML += '<div class="Rockford"></div>';
        x = i;                                                  // Obtenir la position en x du joueur
        y = j;                                                  // Otebnir la position en y du joueur
      }
    }
    tabHTML += '</div>';
    grille.innerHTML += tabHTML;
  }
}
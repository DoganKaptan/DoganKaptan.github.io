let nbrDeplacement = 0;                         // Initialisation de cette variable à 0
let nbrDiamantCollecte = 0;                     // Initialisation de cette variable à 0
let Diamantpresent = 0;                         // Initialisation de cette variable à 0
let mort = false;
let map = 1;                                    // Initialise la première map

document.addEventListener("keyup", function (event) {           // Fonction lorsque la touche est relâchée
    if (nbrDiamant != nbrDiamantCollecte) {
        if (mort != true) {

            switch (event.code) {
                case 'KeyW':        //Dans le cas où la touche Z est appuyé
                    if (document.querySelector("#grille").children[0].children[y].classList.contains('Rockford') === true) {
                        break;
                    }
                    if (document.querySelector("#grille").children[0].children[y].classList.contains('Rockford') === false) {           // Vérifie la limite supérieur
                        if (document.querySelector("#grille").children[x - 1].children[y].classList.contains('rocher') === false) {     // Vérifie si un rocher est placé au dessus de Rockford
                            if (document.querySelector("#grille").children[x - 1].children[y].classList.contains('mur') === false) {    // Vérifie si un mur est placé au dessus de Rockford
                                document.querySelector("#grille").children[x - 1].children[y].className = "Rockford";   // Rempalce la terre et/ou diamant par Rockford
                                document.querySelector("#grille").children[x].children[y].className = "vide";       //Remplace Rockford par le vide
                                x -= 1;
                                nbrDeplacement += 1;
                            }
                        }
                    }
                    break;

                case 'KeyA':        //Dans le cas où la touche Q est appuyé
                    if (document.querySelector("#grille").children[x].children[0].classList.contains('Rockford') === true) {
                        break;
                    }
                    if (document.querySelector("#grille").children[x].children[y - 1].classList.contains('rocher') === false) {  // Vérifie si un rocher est placé à la gauche de Rockford
                        if (document.querySelector("#grille").children[x].children[y - 1].classList.contains('mur') === false) { // Vérifie si un mur est placé à la gauche de Rockford
                            document.querySelector("#grille").children[x].children[y - 1].className = "Rockford";                // Rempalce la terre et/ou diamant par Rockford
                            document.querySelector("#grille").children[x].children[y].className = "vide";           //Remplace Rockford par le vide
                            y -= 1;
                            nbrDeplacement += 1;
                        }
                    }

                    else if (document.querySelector("#grille").children[x].children[y - 1].classList.contains('rocher') === true) {     //Vérifie si un rocher se trouvant à gauche de Rockford
                        if (document.querySelector("#grille").children[x].children[y - 2].classList.contains('vide') === true) {        //Vérifie si le vide se trouve à la gauche du rocher
                            document.querySelector("#grille").children[x].children[y - 2].className = "rocher";                         //Rempalce le vide par un rocher
                            document.querySelector("#grille").children[x].children[y - 1].className = "Rockford";                       //Remplace le rocher par Rockford
                            document.querySelector("#grille").children[x].children[y].className = "vide";                               //Remplace Rockford par du vide
                            y -= 1;
                            nbrDeplacement += 1;
                        }
                    }
                    break;

                case 'KeyS':        //Dans le cas où la touche S est appuyé
                    if (document.querySelector("#grille").children[15].children[y].classList.contains('Rockford') === true) {
                        break;
                    }
                    if (document.querySelector("#grille").children[0].children[y].classList.contains('Rockford') === true) {
                        if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('rocher') === false) {
                            if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('mur') === false) {
                                document.querySelector("#grille").children[x + 1].children[y].className = "Rockford";
                                document.querySelector("#grille").children[x].children[y].className = "vide";
                                x += 1;
                                nbrDeplacement += 1;
                                break;
                            }
                        }
                    }
                    if (document.querySelector("#grille").children[x - 1].children[y].classList.contains('rocher') === true) {
                        if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('rocher') === false) {
                            if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('mur') === false) {
                                document.querySelector("#grille").children[x].children[y].className = 'rocher';
                                document.querySelector("#grille").children[x - 1].children[y].className = 'vide';
                                mort = true;
                                break;
                            }
                        }
                    }
                    if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('rocher') === false) {        // Vérifie si un rocher est placé en dessous de Rockford
                        if (document.querySelector("#grille").children[x + 1].children[y].classList.contains('mur') === false) {       // Vérifie si un mur est placé en dessous de Rockford
                            document.querySelector("#grille").children[x + 1].children[y].className = "Rockford";                      //Remplace la terre ou le diamant par Rockford
                            document.querySelector("#grille").children[x].children[y].className = "vide";                              //Remplace Rockford par du vide    
                            x += 1;
                            nbrDeplacement += 1;
                        }
                    }
                    break;

                case 'KeyD':        //Dans le cas où la touche D est appuyé
                    if (document.querySelector("#grille").children[x].children[31].classList.contains('Rockford') === true) {
                        break;
                    }
                    if (document.querySelector("#grille").children[x].children[y + 1].classList.contains('rocher') === false) {         // Vérifie un rocher placé à droite de Rockford
                        if (document.querySelector("#grille").children[x].children[y + 1].classList.contains('mur') === false) {        // Vérifie un mur placé à droite de Rockford
                            document.querySelector("#grille").children[x].children[y + 1].className = "Rockford";                       // Remplace la terre ou le diamant à droite par Rockford
                            document.querySelector("#grille").children[x].children[y].className = "vide";                               // Remplace Rockford par le vide
                            y += 1;
                            nbrDeplacement += 1;
                        }
                    }
                    else if (document.querySelector("#grille").children[x].children[y + 1].classList.contains('rocher') === true) {     //Vérifie qu'un rocher se trouve à droit de Rockford
                        if (document.querySelector("#grille").children[x].children[y + 2].classList.contains('vide') === true) {        //Vérifie qu'à droite du rocher se trouve le vide
                            document.querySelector("#grille").children[x].children[y + 2].className = "rocher";                         //Remplace le vide par un rocher
                            document.querySelector("#grille").children[x].children[y + 1].className = "Rockford";                       //Remplace le rocher par Rockford
                            document.querySelector("#grille").children[x].children[y].className = "vide";                               // Remplace Rockford par le vide
                            y += 1;
                            nbrDeplacement += 1;

                        }
                    }

                    break;
                default:
                    break;
            }

            Diamantpresent = 0;             // Initialisation du nombre de diamant présent à 0
            for (let i = 0; i < 32; ++i) {  // Boucle qui parcourt le jeu
                for (let j = 0; j < 16; ++j) {
                    if (document.querySelector("#grille").children[j].children[i].classList.contains('rocher') === true) { // Vérifie un rocher placé au dessus du vide
                        if (document.querySelector("#grille").children[j + 1].children[i].classList.contains('vide') === true) {
                            document.querySelector("#grille").children[j + 1].children[i].className = 'rocher';             // Rempalce le vide par un rocher
                            document.querySelector("#grille").children[j].children[i].className = 'vide';                   // Remplace le rocher par le vide
                        }
                    }
                    if (document.querySelector("#grille").children[j].children[i].classList.contains('diamant') === true) {     // S'il y a un diamant présent sur la map, on incrémente le compteur de diamant
                        Diamantpresent += 1;
                    }
                    if (document.querySelector("#grille").children[j].children[i].classList.contains('Rockford') === true) {
                        mort = false;
                    }
                }
            }
            nbrDiamantCollecte = nbrDiamant - Diamantpresent;
            document.querySelector("#Niveau").innerHTML = "Niveau actuel : " + map;                                   // Récupérer la valeur du Niveau et l'afficher
            document.querySelector("#Diamant").innerHTML = "Nombre de diamant présent : " + nbrDiamant;               // Récupérer la valeur du nombre Diamant présent et l'afficher
            document.querySelector("#Recolte").innerHTML = "Nombre de diamant récoltés : " + nbrDiamantCollecte;      // Récupérer la valeur du nombre Diamant récolté et l'afficher
            document.querySelector("#Deplacement").innerHTML = "Nombre de déplacement effectués : " + nbrDeplacement; // Récupérer la valeur du nombre de déplacement effectué et l'afficher  

            if (nbrDiamant === nbrDiamantCollecte) {        //Si nombre de diamant présent = nombre de diamant collecté alors
                map += 1;
                chargerMap();       //Charger la map suivante
                console.log('gg');  //Message de félicitation
            }
        }
        if (mort != false) {        //Si mort, dans ce cas, recharge la map
            chargerMap();
        }
    }
});
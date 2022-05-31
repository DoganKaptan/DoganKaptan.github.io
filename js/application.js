document.getElementById("reprendre").addEventListener("click", function () {    // Evenement lorsque je clique sur reprendre
    document.getElementById("bienvenue").hidden = true;             //cache la div bienvenue          
    document.getElementById("jeu").hidden = false;                  //afficher toujours la div jeu
}, false);

document.getElementById("accueil").addEventListener("click", function () {      // Evenement lorque je clique sur acceuil
    if (confirm("Voulez-vous vraiment quitter la partie ?")) {      //message d'alerte
        document.getElementById("bienvenue").hidden = false;        //afficher la div bienvenue
        document.getElementById("jeu").hidden = true;               //cache la div jeu
    }
}, false);

document.getElementById("recommencer").addEventListener("click", function () {  // Evenement lorsque je clique sur recommencer              
    if (confirm("Voulez-vous vraiment recommencer la partie ?")) {  //message d'alerte
        onclick = chargerMap();                                     //recharger la map
        document.getElementById("bienvenue").hidden = true;         //cacher la div bienvenue
        document.getElementById("jeu").hidden = false;              //afficher la div jeu
    }
}, false);

document.getElementById("jouer").addEventListener("click", function () {        // Evenement lorsque je clique sur jouer                    
    document.getElementById("bienvenue").hidden = true;             //cacher la div bienvenue
    document.getElementById("jeu").hidden = false;                  //afficher la div jeu

}, false);

document.getElementById("charger").addEventListener("click", function () {      // Evenement lorsque je clique sur charger                     
    document.getElementById("bienvenue").hidden = true;             //cacher la div bienvenue
    document.getElementById("jeu").hidden = true;                   //cacher la div jeu
}, false);


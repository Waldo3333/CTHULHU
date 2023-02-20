const personnage = [
  {
    joueur: "charlie",
    name: "Mike Mc Queen",
    profil: "Aventurier",
    descritpion: {
      sexe: "Male",
      age: 38,
      Poids: "85kg",
      langues: [
        "français",
        "flamand",
        "russe",
        "anglais",
        "espagnol",
        "italien",
        "chinois",
        "japonais",
      ],
      taille: 190,
    },
    niveau: 1,
    déVie: 8,
    caracteristique: {
      force: {
        valeur: 14,
        mod: 2,
        mod2: 0,
      },
      dexterite: {
        valeur: 13,
        mod: 1,
        mod2: 0,
      },
      constitution: {
        valeur: 14,
        mod: 2,
        mod2: 0,
      },
      intelligence: {
        valeur: 12,
        mod: 1,
        mod2: 0,
      },
      perception: {
        valeur: 11,
        mod: 0,
        mod2: 0,
      },
      charisme: {
        valeur: 11,
        mod: 0,
        mod2: 0,
      },
    },
    attaque: {
      contact: {
        mod1: 1,
        mod2: 0,
      },
      distance: {
        mod1: 0,
        mod2: 1,
      },
      magique: {
        mod1: 0,
        mod2: 1,
      },
    },

    arme: {
      nom: ["pistolet moyen", "couteau"],
      degat: [8, 6],
    },
    PV: 10,
    PVrestant: 10,
    blessureGrave: 0,
    defence: {
      base: 10,
      mod: 1,
    },
    PC: {
      base: 4,
      mod: 0,
      PointFolie: 0,
      PCrestant: 0,
    },
    capacite: {
      capacite1: { voie: "arts", niveau: 1 },
      capacite2: { voie: "exploit physique", niveau: 1 },
      capacite3: { voie: "Pas de 3e capacité", niveau: 0 },
    },
    inventaire: [
      "tenue randonné",
      "materiel camping alpinisme",
      "carnet de note",
      " pistolet moyen",
      "voilier",
      "grigri",
      "couteau",
      "hache",
      "livre noir",
    ],
    argent: 192,
  },
  {
    joueur: "max",
    name: "Leonard De Hautcapri",
    profil: "Pilote",
    descritpion: {
      sexe: "Male",
      age: 37,
      Poids: "88kg",
      langues: [
        "français",
        "flamand",
        "anglais",
        "espagnol",
        "roumain",
        "kurde",
      ],
      taille: 190,
    },
    niveau: 1,
    déVie: 10,
    caracteristique: {
      force: {
        valeur: 15,
        mod: 2,
        mod2: 0,
      },
      dexterite: {
        valeur: 10,
        mod: 0,
        mod2: 0,
      },
      constitution: {
        valeur: 12,
        mod: 1,
        mod2: 0,
      },
      intelligence: {
        valeur: 15,
        mod: 2,
        mod2: 0,
      },
      perception: {
        valeur: 13,
        mod: 1,
        mod2: 0,
      },
      charisme: {
        valeur: 10,
        mod: 0,
        mod2: 0,
      },
    },
    attaque: {
      contact: {
        mod1: 1,
        mod2: 3,
      },
      distance: {
        mod1: 1,
        mod2: -1,
      },
      magique: {
        mod1: 0,
        mod2: 3,
      },
    },

    arme: {
      nom: ["pistolet leger", "couteau"],
      degat: [6, 4],
    },
    PV: 10,
    PVrestant: 10,
    blessureGrave: 0,
    defence: {
      base: 10,
      mod: -1,
    },
    PC: {
      base: 2,
      mod: 1,
      PointFolie: 0,
      PCrestant: 0,
    },
    capacite: {
      capacite1: { voie: "mecanique", niveau: 1 },
      capacite2: { voie: "pilotage ", niveau: 1 },
      capacite3: { voie: "Pas de 3e capacité", niveau: 0 },
    },
    inventaire: [
      "tenue aviateur",
      "caisse outil  ",
      "biplan",
      " berline ",
      "matraque",
      "pistolet leger",
      "couteau",
    ],
    argent: 215,
  },
  {
    joueur: "JB",
    name: "Dr philippe bargot",
    profil: "Thérapeute",
    descritpion: {
      sexe: "Male",
      age: 34,
      Poids: "75kg",
      langues: ["français", "mongole", "anglais"],
      taille: 183,
    },
    niveau: 1,
    déVie: 6,
    caracteristique: {
      force: {
        valeur: 9,
        mod: -1,
        mod2: 0,
      },
      dexterite: {
        valeur: 14,
        mod: 2,
        mod2: 0,
      },
      constitution: {
        valeur: 14,
        mod: 2,
        mod2: 0,
      },
      intelligence: {
        valeur: 16,
        mod: 3,
        mod2: 0,
      },
      perception: {
        valeur: 11,
        mod: 0,
        mod2: 0,
      },
      charisme: {
        valeur: 11,
        mod: 0,
        mod2: 0,
      },
    },
    attaque: {
      contact: {
        mod1: 0,
        mod2: -1,
      },
      distance: {
        mod1: 0,
        mod2: 2,
      },
      magique: {
        mod1: 0,
        mod2: 3,
      },
    },

    arme: {
      nom: ["pistolet moyen"],
      degat: [8],
    },
    PV: 8,
    PVrestant: 8,
    blessureGrave: 0,
    defence: {
      base: 10,
      mod: 2,
    },
    PC: {
      base: 2,
      mod: 0,
      PointFolie: 0,
      PCrestant: 0,
    },
    capacite: {
      capacite1: { voie: "medecine", niveau: 1 },
      capacite2: { voie: "science ", niveau: 1 },
      capacite3: { voie: "Pas de 3e capacité", niveau: 0 },
    },
    inventaire: [
      "tenue medecin",
      "trousse secour  ",
      "automobile de base",
      " rols royce ",
      "cle du garage",
      "pistolet moyen",
    ],
    argent: 199,
  },
];

const choixJoueur = document.getElementById("choixJoueur");
const choixJoueurDisplay = document.getElementById("choixDisplay");
contentChoixJoueur = "";
persoIndex = "";

for (i = 0; i < personnage.length; i++) {
  contentChoixJoueur += `<button class="joueur" id="${[i]}">${
    personnage[i].joueur
  }</button>`;
}
choixJoueur.innerHTML = contentChoixJoueur;
const joueurChoisi = document.querySelectorAll(".joueur");
const affichInfo = document.getElementById("persoContainer");

contentJeu = "";
//----------------------------------------------------------------------- DEBUT AFFICHAGE INFOS
joueurChoisi.forEach(bouton => {
  bouton.addEventListener("click", function () {
    persoIndex = this.id;
    choixJoueurDisplay.style.display = "none";
    affichJoueur();
    //-----------------------------------------------------------------------MODIFICATION INFOS
    const modifDisplay = document.getElementById("modifContainer");
    const persoDisplay = document.getElementById("persoContainer");
    const validButton = document.getElementById("vie--button");
    const vieInput = document.getElementById("vie");
    const argentInput = document.getElementById("argent");
    const forceInput = document.getElementById("force");
    const dexteInput = document.getElementById("dexte");
    const constInput = document.getElementById("constitution");
    const intelInput = document.getElementById("intelligence");
    const perceInput = document.getElementById("perception");
    const chariInput = document.getElementById("charisme");
    const forceModInput = document.getElementById("forceMod");
    const dexteModInput = document.getElementById("dexteMod");
    const constModInput = document.getElementById("constitutionMod");
    const intelModInput = document.getElementById("intelligenceMod");
    const perceModInput = document.getElementById("perceptionMod");
    const chariModInput = document.getElementById("charismeMod");
    const forceMod2Input = document.getElementById("forceMod2");
    const dexteMod2Input = document.getElementById("dexteMod2");
    const constMod2Input = document.getElementById("constitutionMod2");
    const intelMod2Input = document.getElementById("intelligenceMod2");
    const perceMod2Input = document.getElementById("perceptionMod2");
    const chariMod2Input = document.getElementById("charismeMod2");
    const desVieInput = document.getElementById("desVie");
    const blessureInput = document.getElementById("blessure");
    const niveauInput = document.getElementById("niveau");
    const inventaireInput = document.getElementById("inventaire");
    const attaqueModInput = document.getElementById("attaqueMod");
    const attaqueMod2Input = document.getElementById("attaqueMod2");
    const attaqueDistModInput = document.getElementById("attaqueDistMod");
    const attaqueDistMod2Input = document.getElementById("attaqueDistMod2");
    const attaqueMagiModInput = document.getElementById("attaqueMagiMod");
    const attaqueMagiMod2Input = document.getElementById("attaqueMagiMod2");
    const descript = personnage[persoIndex].descritpion;
    const gun = personnage[persoIndex].arme;
    const capacity = personnage[persoIndex].capacite;
    const PC = personnage[persoIndex].PC;
    const att = personnage[persoIndex].attaque;
    const def = personnage[persoIndex].defence;
    const cara = personnage[persoIndex].caracteristique;

    validButton.addEventListener("click", function () {
      //---------------------------------------------PV
      if (vieInput.value !== "") {
        personnage[persoIndex].PVrestant = vieInput.value;
        vieInput.value = "";
      }
      //---------------------------------------------niveau
      if (niveauInput.value !== "") {
        personnage[persoIndex].niveau = niveauInput.value;
        niveauInput.value = "";
      }

      //---------------------------------------------dé vie
      if (desVieInput.value !== "") {
        personnage[persoIndex].déVie = desVieInput.value;
        desVieInput.value = "";
      }
      //---------------------------------------------blessure
      if (blessureInput.value !== "") {
        personnage[persoIndex].blessureGrave = blessureInput.value;
        blessureInput.value = "";
      }
      //---------------------------------------------inventaire
      if (inventaireInput.value !== "") {
        let existeDeja = false;

        for (let i = 0; i < personnage[persoIndex].inventaire.length; i++) {
          if (
            personnage[persoIndex].inventaire[i].toLowerCase ===
            inventaireInput.value
          ) {
            existeDeja = true;
            personnage[persoIndex].inventaire.splice([i], 1);
            inventaireInput.value = "";
            break;
          }
        }
        if (existeDeja) {
          console.log("Déjà présent dans l'inventaire !");
          inventaireInput.value = "";
        } else {
          personnage[persoIndex].inventaire.push(inventaireInput.value);
          inventaireInput.value = "";
        }
      }
      //---------------------------------------------ARGENT
      if (argentInput.value !== "") {
        personnage[persoIndex].argent = argentInput.value;
        argentInput.value = "";
      }
      //--------------------------------------------------------------------caracteristique

      //-----------------------------------------------VALEUR
      //----------------------------------------force
      if (forceInput.value !== "") {
        cara.force.valeur = forceInput.value;
        forceInput.value = "";
      }
      //----------------------------------------dexterite
      if (dexteInput.value !== "") {
        cara.dexterite.valeur = dexteInput.value;
        dexteInput.value = "";
      }
      //----------------------------------------constitution
      if (constInput.value !== "") {
        cara.constitution.valeur = constInput.value;
        constInput.value = "";
      }
      //----------------------------------------intelligence
      if (intelInput.value !== "") {
        cara.intelligence.valeur = intelInput.value;
        intelInput.value = "";
      }
      //----------------------------------------perception
      if (perceInput.value !== "") {
        cara.perception.valeur = perceInput.value;
        perceInput.value = "";
      }
      //----------------------------------------charisme
      if (chariInput.value !== "") {
        cara.charisme.valeur = chariInput.value;
        chariInput.value = "";
      }
      //-----------------------------------------------MOD1
      //----------------------------------------force
      if (forceModInput.value !== "") {
        cara.force.mod = forceModInput.value;
        forceModInput.value = "";
      }
      //----------------------------------------dexterite
      if (dexteModInput.value !== "") {
        cara.dexterite.mod = dexteModInput.value;
        dexteModInput.value = "";
      }
      //----------------------------------------constitution
      if (constModInput.value !== "") {
        cara.constitution.mod = constModInput.value;
        constModInput.value = "";
      }
      //----------------------------------------intelligence
      if (intelModInput.value !== "") {
        cara.intelligence.mod = intelModInput.value;
        intelModInput.value = "";
      }
      //----------------------------------------perception
      if (perceModInput.value !== "") {
        cara.perception.mod = perceModInput.value;
        perceModInput.value = "";
      }
      //----------------------------------------charisme
      if (chariModInput.value !== "") {
        cara.charisme.mod = chariModInput.value;
        chariModInput.value = "";
      }
      //-----------------------------------------------MOD2
      //----------------------------------------force
      if (forceMod2Input.value !== "") {
        cara.force.mod2 = forceMod2Input.value;
        forceMod2Input.value = "";
      }
      //----------------------------------------dexterite
      if (dexteMod2Input.value !== "") {
        cara.dexterite.mod2 = dexteMod2Input.value;
        dexteMod2Input.value = "";
      }
      //----------------------------------------constitution
      if (constMod2Input.value !== "") {
        cara.constitution.mod2 = constMod2Input.value;
        constMod2Input.value = "";
      }
      //----------------------------------------intelligence
      if (intelMod2Input.value !== "") {
        cara.intelligence.mod2 = intelMod2Input.value;
        intelMod2Input.value = "";
      }
      //----------------------------------------perception
      if (perceMod2Input.value !== "") {
        cara.perception.mod2 = perceMod2Input.value;
        perceMod2Input.value = "";
      }
      //----------------------------------------charisme
      if (chariMod2Input.value !== "") {
        cara.charisme.mod2 = chariMod2Input.value;
        chariMod2Input.value = "";
      }

      //---------------------------------------------------------ATTAQUE
      //---------------------------------------------contact
      if (attaqueModInput.value !== "") {
        att.contact.mod1 = attaqueModInput.value;
        attaqueModInput.value = "";
      }
      if (attaqueMod2Input.value !== "") {
        att.contact.mod2 = attaqueMod2Input.value;
        attaqueMod2Input.value = "";
      }
      //---------------------------------------------distance
      if (attaqueDistModInput.value !== "") {
        att.distance.mod1 = attaqueDistModInput.value;
        attaqueDistModInput.value = "";
      }
      if (attaqueDistMod2Input.value !== "") {
        att.distance.mod2 = attaqueDistMod2Input.value;
        attaqueDistMod2Input.value = "";
      }
      //---------------------------------------------magique
      if (attaqueMagiModInput.value !== "") {
        att.magique.mod1 = attaqueMagiModInput.value;
        attaqueMagiModInput.value = "";
      }
      if (attaqueMagiMod2Input.value !== "") {
        att.magique.mod2 = attaqueMagiMod2Input.value;
        attaqueMagiMod2Input.value = "";
      }
      //---------------------------------------------defence
      affichJoueur();
      modifDisplay.style.display = "none";
      persoDisplay.style.display = "block";
    });

    //------------------------------------------afficher caracteristique
  });
});
//----------------------------------------------------------------------- FONCTION AFFICHAGE INFOS
function affichJoueur() {
  const descript = personnage[persoIndex].descritpion;
  const gun = personnage[persoIndex].arme;
  const capacity = personnage[persoIndex].capacite;
  const PC = personnage[persoIndex].PC;
  const att = personnage[persoIndex].attaque;
  const def = personnage[persoIndex].defence;
  const cara = personnage[persoIndex].caracteristique;
  contentJeu = ` 
                <div class="name flexAround">
                    <p>${personnage[persoIndex].name}</p> 
                    <p>${personnage[persoIndex].profil} </p>
                </div>

                <div class="header--button flexAround">
                    <button class="modif header--button--button" id="modifButton">Modification</button>
                    <button class="description header--button--button" id="descriptionButton">Descritpion</button>
                    <button class="inventaire header--button--button" id="inventaireButton">Inventaire</button>
                </div>
                <div id="showDescription"> <p> Sexe : ${descript.sexe}</p>
                    <p> Age : ${descript.age}</p>
                    <p> Poids : ${descript.Poids}</p>
                    <p> Taille : ${descript.taille}</p>
                    <p> Langues : ${descript.langues}</p>
                </div>

                <div id="showInventaire"
                    <p class="argent">Argent: ${
                      personnage[persoIndex].argent
                    } $</p>
                    <div class="inventaire">Inventaire:
                        <p> ${personnage[persoIndex].inventaire.join(" - ")}</p>
                    </div>

                    <div class="arme">Armes :
                    <p> Nom : ${gun.nom}</p>
                    <p> Degat : ${gun.degat}</p>
                    </div>
                </div>

                <div class="infoHeader flexAround">
                    <div class="infoHeader--niveau"> 
                      <p >Niveau : ${personnage[persoIndex].niveau}</p>
                    </div>
                    <div class="infoHeader--des"> 
                        <p>Dés vie: ${personnage[persoIndex].déVie}</p>
                    </div>
                    <div class="infoHeader--pvRestant"> 
                       <p>Point de vie restant : ${
                         personnage[persoIndex].PVrestant
                       }</p>
                    </div>
                </div>
                
                <div class="infoHeaderDown flexAround">   
                    <div class ="pv">Point de vie (de base) : ${
                      personnage[persoIndex].PV
                    }</div>
                    <div class="blessure">Blessure grave : ${
                      personnage[persoIndex].blessureGrave
                    }</div>
                </div>

                <div class="cara--title flexAround" id="cara--button">
                    <p>CARACTERISTIQUE</p>
                    <p>VALEUR</p>
                    <p>MOD</p>
                    <p>MOD2</p>
                </div>

                <div class="caracteristique" id="showCara"> 

                    <div class="caracteristique--carac"> 
                        <p>FORCE</p>
                        <p>DEXTERITE</p>
                        <p>CONSTITUTION</p>
                        <p>INTELLIGENCE</p>
                        <p>PERCEPTION</p>
                        <p>CHARISME</p>
                    </div>
                    <div class="caracteristique--valeur"> 
                        <p>${cara.force.valeur}</p>
                        <p>${cara.dexterite.valeur}</p>
                        <p>${cara.constitution.valeur}</p>
                        <p>${cara.intelligence.valeur}</p>
                        <p>${cara.perception.valeur}</p>
                        <p>${cara.charisme.valeur}</p>
                    </div>
                    <div class="caracteristique--mod">
                        <p>${cara.force.mod}</p>
                        <p>${cara.dexterite.mod}</p>
                        <p>${cara.constitution.mod}</p>
                        <p>${cara.intelligence.mod}</p>
                        <p>${cara.perception.mod}</p>
                        <p>${cara.charisme.mod}</p> 
                    </div>
                    <div class="caracteristique--modDeux">
                        <p>${cara.force.mod2}</p>
                        <p>${cara.dexterite.mod2}</p>
                        <p>${cara.constitution.mod2}</p>
                        <p>${cara.intelligence.mod2}</p>
                        <p>${cara.perception.mod2}</p>
                        <p>${cara.charisme.mod2}</p> 
                    </div>

                </div>
                <div class="attaque--title flexAround" id="att--button">
                            <p>ATTAQUE</p>
                            <p>MOD</p>
                            <p>MOD2</p>
                    </div>
                <div class="attaque--container" id="showAttaque">
                    

                    <div class="attaque flexAround">
                        <div class="attaque--type">
                            <p>CONTACT</p>
                            <p>DISTANCE</p>
                            <p>MAGIQUE</p>
                        </div>

                        <div class="attaque--modUn">
                            <p>${att.contact.mod1}</p>
                            <p>${att.distance.mod1}</p>
                            <p>${att.magique.mod1}</p>            
                        </div>

                        <div class="attaque--modDeux">
                            <p>${att.contact.mod2}</p>
                            <p>${att.distance.mod2}</p>
                            <p>${att.magique.mod2}</p>
                        </div>
                    </div>
                </div>
                <div class="defence flexAround" >
                            <p>DEFENCE</p>
                            <p>${def.base}</p>
                            <p>${def.mod}</p>
                </div>
                <div class="PC flexAround" id="pc--button">
                            <p>POINT CHOC</p>
                            <p>${PC.base}</p>
                            <p>${PC.mod}</p>
                    </div>
                <div class="folie--choc--container" id="showPc">
                    
                    <div class="folie-choc flexAround">
                        <p>POINTS DE FOLIE</p>
                        <p>PC RESTANT</p>
                    </div>
                    <div class="folie-choc--info flexAround">
                        <p>${PC.PointFolie}</p>
                        <p>${PC.PCrestant}</p>
                    </div>
                </div>
               
                <div class="capacite--container">
                    <div class="capacite--title">CAPACITE</div>

                    <div class="capacite--voie flexAround">
                        <p>${capacity.capacite1.voie} </p>
                        <p>${capacity.capacite2.voie}</p>
                        <p>${capacity.capacite3.voie}</p>
                    </div>
                    <div class="capacite--niveau flexAround">
                        <p>NIV :${capacity.capacite1.niveau} </p>
                        <p>NIV :${capacity.capacite2.niveau}</p>
                        <p>NIV :${capacity.capacite3.niveau}</p>
                    </div>
                </div>`;

  affichInfo.innerHTML = contentJeu;
  //------------------------------------------afficher caracteristisque
  const caraButton = document.getElementById("cara--button");
  const caraDisplay = document.getElementById("showCara");

  caraButton.addEventListener("click", function () {
    if (caraDisplay.style.display !== "flex") {
      caraDisplay.style.display = "flex";
    } else {
      caraDisplay.style.display = "none";
    }
  });
  //------------------------------------------afficher attaque
  const attButton = document.getElementById("att--button");
  const attDisplay = document.getElementById("showAttaque");

  attButton.addEventListener("click", function () {
    if (attDisplay.style.display !== "block") {
      attDisplay.style.display = "block";
    } else {
      attDisplay.style.display = "none";
    }
  });
  //------------------------------------------afficher PC
  const pcButton = document.getElementById("pc--button");
  const pcDisplay = document.getElementById("showPc");

  pcButton.addEventListener("click", function () {
    if (pcDisplay.style.display !== "block") {
      pcDisplay.style.display = "block";
    } else {
      pcDisplay.style.display = "none";
    }
  });
  //------------------------------------------afficher modification
  const modifButton = document.getElementById("modifButton");
  const modifDisplay = document.getElementById("modifContainer");
  const persoDisplay = document.getElementById("persoContainer");
  modifButton.addEventListener("click", function () {
    if (modifDisplay.style.display !== "block") {
      modifDisplay.style.display = "block";
      persoDisplay.style.display = "none";
    } else {
      modifDisplay.style.display = "none";
    }
  });
  //------------------------------------------afficher description
  const descButton = document.getElementById("descriptionButton");
  const descDisplay = document.getElementById("showDescription");
  descButton.addEventListener("click", function () {
    if (descDisplay.style.display !== "block") {
      descDisplay.style.display = "block";
    } else {
      descDisplay.style.display = "none";
    }
  });
  //------------------------------------------afficher inventaire
  const inventButton = document.getElementById("inventaireButton");
  const inventDisplay = document.getElementById("showInventaire");
  inventButton.addEventListener("click", function () {
    if (inventDisplay.style.display !== "block") {
      inventDisplay.style.display = "block";
    } else {
      inventDisplay.style.display = "none";
    }
  });
}

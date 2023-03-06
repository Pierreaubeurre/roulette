/*----------- Se charge au lancement de la page -----------*/

window.onload=verif()

function verif(){

    document.getElementById("absent").checked=false

    document.getElementById("present").checked=true

}


/*----------- Fonctions essentielles -----------*/


var action = 0

function nombre(max) {//choisi un nombre entier aléatoire entre 0 et le nombre d'élève

    let random = Math.floor(Math.random() * max);

    return random
}

function enleve(table, ligne) {//enleve l'élève choisi

    table.removeChild(ligne)
}

function tirage() {

    if (action == 1) {
        alert("Veuillez déjà noter cet élève")
        return
    }

    action = 1

    let table = document.getElementById("pas_noter")//Element DOM correpondant au tbody

    let nombre_eleve = table.childElementCount//Nombre de child dans tbody, donc le nombre d'élèves

    if (nombre_eleve==0){//vérifie si il reste des élèves à noter, évite une erreur
        alert("Il n'y a plus d'élève à noter")
        return
    }

    let random = nombre(nombre_eleve)

    let ligne = table.children[random]//navigation=tbody>tr

    enleve(table, ligne)

    let nom = ligne.children[0].lastChild.data//navigation=tr>td>nom
    let prenom = ligne.children[1].lastChild.data//navigation=tr>td>prenom
    let id= ligne.children[2].lastChild.data//navigation=tr>td>id


    document.getElementById("nom").textContent = nom
    document.getElementById("prenom").textContent = prenom
    document.getElementById("id").textContent = id


    enable_notation()
}

function effac() {

    document.getElementById("nom").textContent = "NOM"
    document.getElementById("prenom").textContent = "PRENOM"
    document.getElementById("note").value = ""
}

function note() {

    action = 0

    if (action = 0) {
        alert("Veuillez tirer au sort un élève")
        return
    }

    let contenu = []//tableau qui va contenir les informations 


    //partie récupération
    contenu.push(document.getElementById("nom").textContent)

    contenu.push(document.getElementById("prenom").textContent)

    contenu.push(document.getElementById("id").textContent)

    if (document.getElementById("present").checked) {
        contenu.push("Présent")
        if (document.getElementById("note").value == "") {
            alert("Veuillez mettre une note")
            return
        }
        contenu.push(document.getElementById("note").value)
    }
    else if (document.getElementById("absent").checked) {
        contenu.push("Absent")
    }


    //partie création
    let table_noté = document.getElementById("noté")

    let ligne = document.createElement("tr")

    table_noté.appendChild(ligne)


    let compteur=0

    contenu.forEach(element => {

        let colonne = document.createElement("td")
        colonne.textContent = element
        ligne.appendChild(colonne)
        

        compteur=compteur+1

        if (compteur==2){
            colonne.setAttribute("classe","id")
        }

        if (compteur==4){
            colonne.setAttribute("classe","note")
        }
    });

    disabled_notation()
    effac()

    active_confirmer()
}


/*----------- Fonctions de confort -----------*/

function enable_notation(){//affiche les critères de notation

    let div=document.getElementById("selectionné")

    div.removeAttribute("hidden")

}

function disabled_notation(){//cache les critères de notation

    let div=document.getElementById("selectionné")

    div.setAttribute("hidden","true")

}

function active_confirmer(){

    let table = document.getElementById("pas_noter")

    if(table.childElementCount==0){

        let confirmer=document.getElementById("confirmer")

        confirmer.removeAttribute("disabled")

        let tirage=document.getElementById("tirage")

        tirage.setAttribute("disabled","disabled")

    }
}

function absent(id){//désactive la zone pour mettre la note si l'élève est absent

    let note = document.getElementById("note")

    if(id=="absent"){
        note.setAttribute("disabled","disabled");
    }
    else
    {
        note.removeAttribute("disabled");
    }
}




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

    let random = nombre(nombre_eleve)

    let ligne = table.children[random]//navigation=tbody>tr

    enleve(table, ligne)

    let nom = ligne.children[0].lastChild.data//navigation=tr>td>nom
    let prenom = ligne.children[1].lastChild.data//navigation=tr>td>prenom

    document.getElementById("nom").textContent = nom
    document.getElementById("prenom").textContent = prenom


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

    contenu.forEach(element => {

        let colonne = document.createElement("td")
        colonne.textContent = element
        ligne.appendChild(colonne)

    });

    effac()
}





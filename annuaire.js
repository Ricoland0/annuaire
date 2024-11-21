//Fonction pour récupérer les input de l'utilisateur
function ajouterContact(){
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const num = document.getElementById('num').value;
    const mail = document.getElementById('mail').value;
    //ça c'est pour vérifier si le numéro est un nombre sinon ça annule la création du contact
    const verifNum = /^[0-9]+$/;
    if (!verifNum.test(num)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
    }
    //et ça pour l'email
    const verifMail = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/;
    if (!verifMail.test(mail)) {
        alert('Veuillez entrer une adresse mail valide.');
        return;
    }
    newContact(nom, prenom, num, mail)
}

//Fonction pour créer les contacts
let contacts =[]
function newContact (nom, prenom, num, mail){
    let contact = {
        nom: nom,
        prenom: prenom,
        num: num,
        mail:mail,
    };
    contacts.push(contact)
}

// Fonction pour afficher les contacts
function afficheContact() {
    const contactList = document.getElementById('contactList'); // Récupère la table
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => { // ça c'est pour créer un element et lui donner un index
        const contactRow = document.createElement('tr'); // Créer un élément tr qui contient les infos du contact
        contactRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.num}</td>
            <td>${contact.mail}</td>
            <td>
                <select class="form-select form-select-sm" onchange="gestContact(${index}, this)">
                    <option value="" disabled selected hidden>Gérer</option>
                    <option value="modifier">Modifier</option>
                    <option value="supprimer">Supprimer</option>
                </select>
            </td>
        `;
        contactList.appendChild(contactRow); // Ajouter l'élément tr créé à la table
    });
}

// Fonction pour rechercher un contact (adaptée pour le tableau)
function sortContact() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('contactTable');
    tr = table.getElementsByTagName('tr');

    // Boucle à travers toutes les lignes du tableau (sauf pour la première ligne c'est l'entête)
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none"; // Masque la ligne par défaut
        td = tr[i].getElementsByTagName('td');
        // Boucle à travers toutes les cellules de la ligne
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Afficher la ligne si une cellule correspond
                    break;
                }
            }
        }
    }
}

//ça c'est pour les modifs et les suppressions avec le select ajouter dans la fonction afficheContact
function gestContact(index, selectElement) {
    const action = selectElement.value;
    if (   action === 'modifier') {
        openModif(index);
    } else if (action === 'supprimer') {
        delContact(index);
    }
    selectElement.value = '';
}

//Fonction pour afficher la fenêtre de modification quand on clique sur modifier
let currentIndex;
function openModif(index) {
    currentIndex = index;
    const contact = contacts[index];
    document.getElementById('modifNom').value = contact.nom;
    document.getElementById('modifPrenom').value = contact.prenom;
    document.getElementById('modifNum').value = contact.num;
    document.getElementById('modifMail').value = contact.mail;
    document.getElementById('modif').style.display = 'block';
}

//Fonction pour fermer la fenêtre de modification
function closeModif() {
    document.getElementById('modif').style.display = 'none';
}

//Fonction pour valider les changements et sauvegarder le contact modifié
function saveContact() {
    const nom = document.getElementById('modifNom').value;
    const prenom = document.getElementById('modifPrenom').value;
    const num = document.getElementById('modifNum').value;
    const mail = document.getElementById('modifMail').value;
    const verifNum = /^[0-9]+$/;
    if (!verifNum.test(num)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
    }
    const verifMail = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/;
    if (!verifMail.test(mail)) {
        alert('Veuillez entrer une adresse mail valide.');
        return;
    }
    contacts[currentIndex] = { nom, prenom, num, mail };//ecrase l'ancien contact par le nouveau
    closeModif();
    afficheContact();
}

//Fonction pour supprimer un contact
function delContact(index) {
    contacts.splice(index, 1);
    alert('Contact supprimé');
    afficheContact();
}


//Fonction pour trier les contacts trouver sur codepen (credit sur le readme) 
//ne pas faire attention c'est pour moi et je vais le comprendre et commenter plus tard
function sortTable(tableClass, n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    
    table = document.getElementsByClassName(tableClass)[0];
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            var cmpX = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
            var cmpY = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
            cmpX = (cmpX == '-') ? 0 : cmpX;
            cmpY = (cmpY == '-') ? 0 : cmpY;
            if (dir == "asc") {
                if (cmpX > cmpY) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (cmpX < cmpY) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;      
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
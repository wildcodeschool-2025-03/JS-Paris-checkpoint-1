

const img = document.getElementById("myImage");

    img.addEventListener("click", function () {
        if (img.src.includes("avatar-bis.png")) {
            img.src = "./image/avatar.svg";
        } else {
            img.src = "./image/avatar-bis.png";
        }
    });


// Fonction pour modifier le texte
function modifierTexte() {
    // Sélectionner l'élément h1 par son ID et modifier son texte
    document.getElementById("firstname").innerText = 'elliot';
}

// Attacher un événement de clic au bouton pour appeler la fonction
document.getElementById('modifierBtn').addEventListener('click', modifierTexte);

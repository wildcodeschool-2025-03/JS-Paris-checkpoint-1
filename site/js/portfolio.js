


document.querySelector("#avatar").addEventListener("click", function () {

    const img = document.querySelector("#avatar");

    if (img.src.match("./image/avatar.svg")) {
        img.src = "./image/avatar-bis.png"; // Changer l'image
    } else {
        img.src = "./image/avatar.svg"; // Revenir à l'image initiale
    }
});



document.querySelector("#click").addEventListener("click", function () {

    let nouvelleCouleur = prompt("Tapez votre couleur");

    if (nouvelleCouleur) {

        document.querySelector(".description.pink-bg").style.backgroundColor = nouvelleCouleur;

    }

    let nouveauNom = prompt("Tapez votre prénom");

    if (nouveauNom !== "Matt") {

        const span = document.querySelector("#firstname");

        span.textContent = nouveauNom;

        span.style.color = "white";
    }
})
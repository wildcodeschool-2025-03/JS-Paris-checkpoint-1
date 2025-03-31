const img = document.querySelector("main>section>img");

function changeAvatar() {
  console.log(img.src);
  
  if (img.src.includes("avatar-bis.png"))
    img.src = "image/avatar.svg";
  else
    img.src = "image/avatar-bis.png";
}

img.addEventListener("click", changeAvatar);


const button = document.querySelector(".description button");

function changeName() {
  // ask for color and name with a popup
  const color = prompt("Entrez une couleur");
  const name = prompt("Entrez un nom");

  // select span element
  const span = document.querySelector("#firstname");

  // update style color of the span and innerText
  span.style.color = "white";
  span.innerText = name;

  const allPinkElements = document.querySelectorAll(".pink-text, .pink-bg");
  console.log(allPinkElements);
  
  for (const element of allPinkElements) {
    if (element.classList.contains("pink-text"))
      element.style.color = color;
    else 
      element.style.background = color;
  }

}

button.addEventListener("click", changeName);

const bioCorta = document.getElementById("bio-corta");
const bioLarga = document.getElementById("bio-larga");
const boton = document.getElementById("toggleBio");

boton.addEventListener("click", () => {
    if (bioLarga.style.display === "none") {
        bioLarga.style.display = "block";
        boton.textContent = "Leer menos";
    } else {
        bioLarga.style.display = "none";
        boton.textContent = "Leer más";
    }
    });
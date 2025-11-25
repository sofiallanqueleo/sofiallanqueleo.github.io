const preguntas = [
   {
    texto: "¿Cuál es el lenguaje de programación más utilizado en el desarrollo de aplicaciones móviles?",
    opciones: ["Java", "Python", "Swift", "Ruby"],
    correcta: 0,
    dato: "Sabias que Java fue durante años el lenguaje principal para Android. Hoy también se usa mucho Kotlin."
  },
 {
    texto: "¿Cuál es la principal diferencia entre Java y JavaScript?",
    opciones: [
      "Java es para escritorio y JavaScript para la web",
      "Java es orientado a objetos y JavaScript es un lenguaje de scripts",
      "Son el mismo lenguaje con distinto nombre"
    ],
    correcta: 1,
    dato: "Sabias que JavaScript originalmente se llamaba Mocha y luego LiveScript, pero no tiene relación real con Java."
  },

    {
    texto: "¿Qué significa HTML?",
    opciones: ["HyperText Markup Language", "High Tech Machine Language", "Home Tool Markup List"],
    correcta: 0,
    dato: "Dato curioso: La primera página web de la historia sigue online desde 1991."
  },
  {
    texto: "¿Qué hace CSS?",
    opciones: ["Da estilo a las páginas web", "Ejecuta lógica", "Administra bases de datos"],
    correcta: 0,
    dato: "Sabias que CSS permite animaciones y efectos visuales sin usar JavaScript."
  },
  {
    texto: "¿Cuál es el lenguaje más usado en la web?",
    opciones: ["Python", "JavaScript", "C++"],
    correcta: 1,
    dato: "Sabias que JavaScript fue creado en solo 10 días."
  },
  {
    texto: "¿Para qué se usa GitHub?",
    opciones: ["Guardar y compartir código", "Editar imágenes", "Ver películas"],
    correcta: 0,
    dato: "Sabias que GitHub tiene más de 200 millones de repositorios."
  },
  {
    texto: "¿Cuál es el océano más profundo?",
    opciones: ["Atlántico", "Pacífico", "Índico"],
    correcta: 1,
    dato: "Dato curiso: La Fosa de las Marianas supera los 11.000 metros."
  },
   {
    texto: "¿Cómo se llama el proceso por el cual las plantas convierten luz solar en energía?",
    opciones: ["Respiración", "Fermentación", "Fotosíntesis"],
    correcta: 2,
    dato: "Dato curioso: La fotosíntesis produce el oxígeno que respiramos."
  },
 {
    texto: "¿Qué animal tiene el mismo número de vértebras del cuello que los humanos?",
    opciones: ["Jirafa", "Camello", "Llama"],
    correcta: 0,
    dato: "Un dato curioso: La jirafa tiene 7 vértebras cervicales, igual que un humano, pero cada una puede medir más de 25 cm."
  },
 {
    texto: "¿Cuál es el idioma más hablado del mundo?",
    opciones: ["Inglés", "Español", "Chino Mandarín"],
    correcta: 2,
    dato: "Sabias que El mandarín es hablado por más de 1.100 millones de personas."
  },
  {
    texto: "¿Cómo se llama el movimiento filosófico que sostiene que la realidad es mental o espiritual?",
    opciones: ["Idealismo", "Materialismo", "Realismo", "Existencialismo"],
    correcta: 0,
    dato: "Sabias que El idealismo tiene como gran referente a Hegel, quien sostenía que la realidad está vinculada al espíritu."
  },

];

let indice = 0;
let puntaje = 0;

const pPregunta = document.getElementById("pregunta");
const divOpciones = document.getElementById("opciones");
const pResultado = document.getElementById("resultado");
const btnSiguiente = document.getElementById("btn-siguiente");

cargarPregunta();

function cargarPregunta() {
  const actual = preguntas[indice];

  pResultado.textContent = "";
  divOpciones.innerHTML = "";

  pPregunta.innerHTML = `pregunta ${indice + 1} de ${preguntas.length}<br><br>${actual.texto}`;

  actual.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.classList.add("opcion");

    btn.addEventListener("click", () => seleccionar(i, btn));

    divOpciones.appendChild(btn);
  });
}

function seleccionar(i, boton) {
  const actual = preguntas[indice];

  // Desactivar todas las opciones
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(b => b.disabled = true);

  if (i === actual.correcta) {
    boton.style.background = "green";
    pResultado.textContent = "¡Correcto! 🎉";
    puntaje++;
  } else {
    boton.style.background = "red";
    pResultado.textContent = "Respuesta incorrecta 😢";
  }

  pResultado.innerHTML += `<br><small>${actual.dato}</small>`;

  btnSiguiente.style.display = "inline-block";
}

btnSiguiente.addEventListener("click", () => {
  indice++;

  if (indice >= preguntas.length) {
    mostrarFinal();
  } else {
    btnSiguiente.style.display = "none";
    cargarPregunta();
  }
});

function mostrarFinal() {
  document.getElementById("juego").innerHTML = `
    <h2>¡Juego terminado!</h2>
    <p>Tu puntaje fue: <strong>${puntaje}</strong> de <strong>${preguntas.length}</strong></p>
    <p>¿Querés jugar de nuevo?</p>
    <button onclick="location.reload()">Reiniciar</button>
  `;
}

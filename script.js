// ==== TOMAMOS LOS ELEMENTOS DEL FORMULARIO ====

// Inputs simples
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementsByName("telefono")[0]; 
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const provincia = document.getElementById("provincia");
const codigo_postal = document.getElementById("codigo_postal");

// Radio buttons (solo uno puede estar seleccionado)
const metodoContactoRadios = document.getElementsByName("metodo_preferido_de_contacto");

// Checkboxes (pueden ser varios)
const suscripcionesCheck = document.querySelectorAll("input[name='suscripcion[]']");


// ==== TOMAMOS LAS CELDAS DE LA TABLA ====
const tabla = document.querySelectorAll("tbody td");

// Orden de las celdas según la tabla
const celdaNombre = tabla[0];
const celdaApellido = tabla[1];
const celdaEmail = tabla[2];
const celdaTelefono = tabla[3];
const celdaEdad = tabla[4];
const celdaDireccion = tabla[5];
const celdaProvincia = tabla[6];
const celdaCodigoPostal = tabla[7];
const celdaMetodo = tabla[8];
const celdaSuscripcion = tabla[9];


// ==== EVENTOS PARA ACTUALIZAR AUTOMÁTICAMENTE ====
nombre.addEventListener("input", () => celdaNombre.textContent = nombre.value);
apellido.addEventListener("input", () => celdaApellido.textContent = apellido.value);
email.addEventListener("input", () => celdaEmail.textContent = email.value);
telefono.addEventListener("input", () => celdaTelefono.textContent = telefono.value);
edad.addEventListener("input", () => celdaEdad.textContent = edad.value);
direccion.addEventListener("input", () => celdaDireccion.textContent = direccion.value);
provincia.addEventListener("input", () => celdaProvincia.textContent = provincia.value);
codigo_postal.addEventListener("input", () => celdaCodigoPostal.textContent = codigo_postal.value);


// ==== RADIO BUTTONS ====
metodoContactoRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        const seleccionado = document.querySelector("input[name='metodo_preferido_de_contacto']:checked");
        celdaMetodo.textContent = seleccionado.value;
    });
});


// ==== CHECKBOXES (pueden ser varios) ====
suscripcionesCheck.forEach(check => {
    check.addEventListener("change", () => {
        // tomamos todos los seleccionados
        const seleccionados = Array.from(suscripcionesCheck)
            .filter(ch => ch.checked)
            .map(ch => ch.value);

        celdaSuscripcion.textContent = seleccionados.join(", ");
    });
});




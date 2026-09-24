/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Nombre Completo
   Ficha 3230489 · ADSO

   Este archivo empieza vacío. Cada misión de la parte 3 se
   escribe en el bloque que le corresponde, nunca donde quepa.
   =========================================================== */


/* ---------- 1. ELEMENTOS ---------- */
/* Las constantes que guardan las partes de la página.
   Una por cada elemento que vaya a manipular.            */

const anio = document.getElementById('anio');
const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const enlaceExterno = document.getElementById('enlaceExterno');
const contador = document.getElementById('contador');
const lista = document.getElementById('lista');
const caja = document.getElementById('caja');
const btnColor = document.getElementById('btnColor');
const btnDestacar = document.getElementById('btnDestacar');
const btnOcultar = document.getElementById('btnOcultar');
const tabla = document.getElementById('tabla');
const campoProyecto = document.getElementById('campoProyecto');
const btnAgregar = document.getElementById('btnAgregar');
const btnQuitar = document.getElementById('btnQuitar');
const btnVaciar = document.getElementById('btnVaciar');
const campoMensaje = document.getElementById('campoMensaje');
const contadorLetras = document.getElementById('contadorLetras');
const formulario = document.getElementById('formulario');
const campoNombre = document.getElementById('campoNombre');
const btnEnviar = document.getElementById('btnEnviar');
const avisoForm = document.getElementById('avisoForm');
const btnTema = document.getElementById('btnTema');


/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */

const colores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa502'];
let indiceColor = 0;


/* ---------- 3. FUNCIONES ---------- */
/* Lo que la página sabe hacer.                            */

// MISIÓN 4: Función para contar elementos en la lista
function actualizarContador() {
  const items = lista.querySelectorAll('li');
  const cantidad = items.length;
  
  if (cantidad === 0) {
    contador.textContent = 'No hay generaciones registradas';
  } else if (cantidad === 1) {
    contador.textContent = '1 generación registrada';
  } else {
    contador.textContent = `${cantidad} generaciones registradas`;
  }
}


/* ---------- 4. EVENTOS ---------- */
/* Cuándo lo hace.                                         */

// MISIÓN 5: Destacar y dejar de destacar
if (btnDestacar && caja) {
  btnDestacar.addEventListener('click', () => {
    caja.classList.toggle('destacada');
  });
}

// MISIÓN 6: Esconder y mostrar, con el botón avisando
if (btnOcultar && caja) {
  btnOcultar.addEventListener('click', () => {
    caja.classList.toggle('oculto');
    const estaOculta = caja.classList.contains('oculto');
    btnOcultar.textContent = estaOculta ? 'Mostrar' : 'Ocultar';
  });
}

// MISIÓN 7: Un color distinto en cada clic
if (btnColor && caja) {
  btnColor.addEventListener('click', () => {
    caja.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
  });
}

// MISIÓN 9: Agregar un elemento que no existe en el HTML
if (btnAgregar && campoProyecto && lista) {
  btnAgregar.addEventListener('click', () => {
    const texto = campoProyecto.value.trim();
    
    if (texto === '') {
      return;
    }
    
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = texto;
    lista.append(nuevoItem);
    
    campoProyecto.value = '';
    campoProyecto.focus();
    
    actualizarContador();
  });
  
  // Permitir agregar con Enter
  campoProyecto.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
      btnAgregar.click();
    }
  });
}

// MISIÓN 10: Quitar el último
if (btnQuitar && lista) {
  btnQuitar.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    
    if (ultimoItem) {
      ultimoItem.remove();
      actualizarContador();
    }
  });
}

// MISIÓN 11: Vaciar de un golpe
if (btnVaciar && lista) {
  btnVaciar.addEventListener('click', () => {
    lista.textContent = '';
    actualizarContador();
  });
}

// MISIÓN 12: Una tabla que responde al clic
if (tabla) {
  const filas = tabla.querySelectorAll('tbody tr');
  filas.forEach((fila) => {
    fila.addEventListener('click', () => {
      filas.forEach((f) => f.classList.remove('fila-marcada'));
      fila.classList.add('fila-marcada');
    });
  });
}

// MISIÓN 13: Contar caracteres mientras se escribe
if (campoMensaje && contadorLetras) {
  campoMensaje.addEventListener('input', () => {
    const cantidad = campoMensaje.value.length;
    contadorLetras.textContent = `${cantidad} caracteres`;
  });
}

// MISIÓN 14: Validar el formulario sin recargar la página
if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const nombre = campoNombre.value.trim();
    const mensaje = campoMensaje.value.trim();
    
    avisoForm.classList.remove('error', 'ok');
    
    if (nombre === '') {
      avisoForm.textContent = 'Por favor, completa tu nombre';
      avisoForm.classList.add('error');
      campoNombre.focus();
      return;
    }
    
    if (mensaje.length < 10) {
      avisoForm.textContent = 'El mensaje debe tener al menos 10 caracteres';
      avisoForm.classList.add('error');
      campoMensaje.focus();
      return;
    }
    
    avisoForm.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido recibido.`;
    avisoForm.classList.add('ok');
    
    campoNombre.value = '';
    campoMensaje.value = '';
    contadorLetras.textContent = '0 caracteres';
  });
}

// MISIÓN 15: Modo oscuro con tres líneas
if (btnTema) {
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('noche');
    const tieneClaseNoche = document.body.classList.contains('noche');
    btnTema.textContent = tieneClaseNoche ? 'Modo claro' : 'Modo oscuro';
  });
}


/* ---------- 5. ARRANQUE ---------- */
/* Lo que pasa apenas carga la página.                     */

// MISIÓN 1: El año que no se escribe a mano
if (anio) {
  anio.textContent = new Date().getFullYear();
}

// MISIÓN 2: Textos escritos desde el código
if (titulo) {
  titulo.textContent = 'Evolución de las Consolas de Videojuegos';
}

if (subtitulo) {
  const anioActual = new Date().getFullYear();
  subtitulo.textContent = `Resumen por generaciones y hitos clave en la historia - ${anioActual}`;
}

// MISIÓN 3: Un enlace que cambia de destino
if (enlaceExterno) {
  enlaceExterno.setAttribute('href', 'https://www.wikipedia.org/wiki/History_of_video_game_consoles');
  enlaceExterno.setAttribute('target', '_blank');
  enlaceExterno.setAttribute('rel', 'noopener');
  enlaceExterno.textContent = 'Más información sobre la historia de consolas';
}

// MISIÓN 4: Contar lo que hay en la página
actualizarContador();

// MISIÓN 8: Pintar las filas alternas de la tabla
if (tabla) {
  const filas = tabla.querySelectorAll('tbody tr');
  filas.forEach((fila, indice) => {
    if (indice % 2 === 1) {
      fila.style.backgroundColor = '#f3f4f6';
    }
  });
}

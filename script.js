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
const avisoForm = document.getElementById('avisoForm');
const btnTema = document.getElementById('btnTema');

const colores = [ '#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa502','#e0c3fc'];
let indiceColor = 0;

function actualizarContador() {
  const total = lista.querySelectorAll('li').length;
  if (total === 0) contador.textContent = 'No hay generaciones registradas';
  else if (total === 1) contador.textContent = '1 generacion registrada';
  else contador.textContent = total + ' generaciones registradas';
}

btnColor.addEventListener('click', () => {
  caja.style.backgroundColor = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
});

btnDestacar.addEventListener('click', () => {
  caja.classList.toggle('destacada');
});

btnOcultar.addEventListener('click', () => {
  caja.classList.toggle('oculto');
  btnOcultar.textContent = caja.classList.contains('oculto') ? 'Mostrar' : 'Ocultar';
});

btnAgregar.addEventListener('click', agregarElemento);
campoProyecto.addEventListener('keydown', e => e.key === 'Enter' && agregarElemento());

function agregarElemento() {
  const texto = campoProyecto.value.trim();
  if (!texto) return;
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
  campoProyecto.value = '';
  actualizarContador();
}

btnQuitar.addEventListener('click', () => {
  if (lista.lastElementChild) {
    lista.lastElementChild.remove();
    actualizarContador();
  }
});

btnVaciar.addEventListener('click', () => {
  lista.innerHTML = '';
  actualizarContador();
});

tabla.querySelectorAll('tbody tr').forEach(fila => {
  fila.addEventListener('click', () => {
    tabla.querySelectorAll('tr').forEach(f => f.classList.remove('fila-marcada'));
    fila.classList.add('fila-marcada');
  });
});

campoMensaje.addEventListener('input', () => {
  contadorLetras.textContent = campoMensaje.value.length + ' caracteres';
});

formulario.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = campoNombre.value.trim();
  const mensaje = campoMensaje.value.trim();
  
  avisoForm.className = 'aviso';
  
  if (!nombre) {
    avisoForm.textContent = 'Por favor, completa tu nombre';
    avisoForm.classList.add('error');
    return;
  }
  if (mensaje.length < 10) {
    avisoForm.textContent = 'El mensaje debe tener al menos 10 caracteres';
    avisoForm.classList.add('error');
    return;
  }
  
  avisoForm.textContent = 'Gracias, ' + nombre + '! Tu mensaje ha sido recibido.';
  avisoForm.classList.add('ok');
  formulario.reset();
  contadorLetras.textContent = '0 caracteres';
});

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('noche');
  btnTema.textContent = document.body.classList.contains('noche') ? 'Modo claro' : 'Modo oscuro';
});

anio.textContent = new Date().getFullYear();
titulo.textContent = 'PlayMarket';
subtitulo.textContent = 'Tu tienda de confianza — ' + new Date().getFullYear();
enlaceExterno.href = 'https://en.wikipedia.org/wiki/History_of_video_game_consoles';
enlaceExterno.target = '_blank';
enlaceExterno.textContent = 'Mas informacion sobre la historia de consolas';

actualizarContador();

tabla.querySelectorAll('tbody tr').forEach((fila, i) => {
  if (i % 2 === 1) fila.style.backgroundColor = '#f3f4f6';
});
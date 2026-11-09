// Menú móvil
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

function toggleMenu(open) {
  menu.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}
btn.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') toggleMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });

// Año del pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario: valida y abre el correo del visitante con el mensaje listo.
const CORREO_DESTINO = 'brotestudioverify@gmail.com';

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { nombre, correo, mensaje } = form.elements;

  if (!nombre.value.trim() || !correo.validity.valid || !mensaje.value.trim()) {
    msg.textContent = 'Completa tu nombre, un correo válido y tu mensaje.';
    return;
  }

  const asunto = encodeURIComponent('Mensaje desde Brote Studio de ' + nombre.value.trim());
  const cuerpo = encodeURIComponent(mensaje.value.trim() + '\n\n' + nombre.value.trim() + ' (' + correo.value.trim() + ')');
  window.location.href = 'mailto:' + CORREO_DESTINO + '?subject=' + asunto + '&body=' + cuerpo;
  msg.textContent = 'Abriendo tu aplicación de correo…';
});

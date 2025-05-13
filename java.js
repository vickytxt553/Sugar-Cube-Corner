let indice = 0;
let intervalo;

function moverSlider(direccion) {
  const slider = document.getElementById('slider');
  const slides = slider.querySelectorAll('.slide');
  const total = slides.length;

  indice += direccion;

  if (indice < 0) {
    indice = total - 1;
  } else if (indice >= total) {
    indice = 0;
  }

  const slideWidth = slider.parentElement.clientWidth;
  slider.style.transform = `translateX(-${indice * slideWidth}px)`;

  reiniciarIntervalo();
}

function avanzarAutomatico() {
  moverSlider(1);
}

function reiniciarIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(avanzarAutomatico, 4000); // cada 4 segundos
}

// Iniciar automáticamente
window.onload = function() {
  intervalo = setInterval(avanzarAutomatico, 4000);
};

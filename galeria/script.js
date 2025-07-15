// Seleccionamos todos los elementos de imagen
const imagenes = document.querySelectorAll('.grid img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const cerrar = document.getElementById('cerrar');

// Al hacer clic en cualquier imagen
imagenes.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';        // Muestra el modal
    modalImg.src = img.src;              // Le pone la imagen clickeada
  });
});

// Al hacer clic en la X de cerrar
cerrar.addEventListener('click', () => {
  modal.style.display = 'none';          // Oculta el modal
});

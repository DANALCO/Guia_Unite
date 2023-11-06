function mostrarNoticia(noticiaId) {
    const oscuridad = document.querySelector(".oscuridada");
    oscuridad.style.display = 'flex';

    // Muestra la noticia seleccionada
    const noticiaSeleccionada = document.getElementById(noticiaId);
    noticiaSeleccionada.style.display = 'flex';

    //evento de clic al botón "Retornar" y oscuridad en la noticia para ocultar la noticia y la oscuridad
    const botonRetornar = noticiaSeleccionada.querySelector(".boton");
    botonRetornar.addEventListener("click", function () {
        oscuridad.style.display = 'none';
        noticiaSeleccionada.style.display = 'none';
    });
    oscuridad.addEventListener("click", function () {
        oscuridad.style.display = 'none';
        noticiaSeleccionada.style.display = 'none';
    });
}
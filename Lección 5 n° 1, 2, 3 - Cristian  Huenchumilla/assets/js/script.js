document.addEventListener("DOMContentLoaded", function () {
  const botonIrArriba = document.getElementById("ir-arriba");

  if (botonIrArriba) {
    botonIrArriba.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

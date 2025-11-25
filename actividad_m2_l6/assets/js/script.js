$(function() {
  
  $("#btn-red").click(function() {
    $("#mi-lista li").removeClass("black").addClass("red");
  });

  $("#btn-black").click(function() {
    $("#mi-lista li").removeClass("red").addClass("black");
  });

  $("#btn-agregar").click(function() {
    if ($("#mi-lista li").length < 4) {
      $("#mi-lista").append("<li>Elemento 4</li>");
      $(this).prop("disabled", true);
    }
  });

  $("#btn-toggle").click(function() {
    $("#mi-lista").toggle(); 
    const estaVisible = $("#mi-lista").is(":visible");
    $(this).text(estaVisible ? "Ocultar lista" : "Mostrar lista");
  });
});

var modal_preguntas = document.getElementById("Modal_preguntas");
var btn_preguntas = document.getElementById("Btn_preguntas");
var span_preguntas = document.getElementsByClassName("cerrar_preguntas")[0];

btn_preguntas.onclick = function() {
  // alert("hola");
  modal_preguntas.style.display = "block";
};

span_preguntas.onclick = function() {
  modal_preguntas.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal_preguntas) {
    modal_preguntas.style.display = "none";
  }
};



var modal_tarifa = document.getElementById("Modal_tarifa");
var btn_tarifa = document.getElementById("Btn_tarifa");
var span_tarifa = document.getElementsByClassName("cerrar_tarifa")[0];

btn_tarifa.onclick = function() {
  modal_tarifa.style.display = "block";
};

span_tarifa.onclick = function() {
  modal_tarifa.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal_tarifa) {
    modal_tarifa.style.display = "none";
  }
};
var modal_reglamento = document.getElementById("Modal_Reglamento");
var btn_reglamento = document.getElementById("Btn_Reglamento");
var span_reglamento = document.getElementsByClassName("cerrar_reglamento")[0];

btn_reglamento.onclick = function() {
  // alert("aqui si jala");
  modal_reglamento.style.display = "block";
};

span_reglamento.onclick = function() {
  modal_reglamento.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_reglamento) {
    modal_reglamento.style.display = "none";
  }
}


var modal_politicas = document.getElementById("Modal_Politicas");
var btn_politicas = document.getElementById("Btn_Politicas");
var span_politicas = document.getElementsByClassName("cerrar_politicas")[0];

btn_politicas.onclick = function() {
  modal_politicas.style.display = "block";
};

span_politicas.onclick = function() {
  modal_politicas.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal_politicas) {
    modal_politicas.style.display = "none";
  };
};


var modal_preguntas = document.getElementById("Modal_preguntas");
var btn_preguntas = document.getElementById("Btn_preguntas");
var span_preguntas = document.getElementsByClassName("cerrar_preguntas")[0];

btn_preguntas.onclick = function() {
  // alert("hola");
  modal_preguntas.style.display = "block";
};

span_preguntas.onclick = function() {
  modal_preguntas.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_preguntas) {
    modal_preguntas.style.display = "none";
  }
}
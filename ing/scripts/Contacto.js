$(document).ready(function(){
	$("#Enviar").unbind('click').bind('click', function () {
		if(validacion_campos()){	
			$.post("Contacto.php", {
				nombre: $("#nombre").val(),
				apellidos: $("#apellidos").val(),
				email: $("#email").val(),
				telefono: $("#telefono").val(),
				mensaje: $("#inputMsg").val(),
			}).then(function () {
				$("#nombre").val(""),
				$("#apellidos").val(""),
				$("#email").val(""),
				$("#telefono").val(""),
				$("#inputMsg").val(""),
				swal("Send"," ", "success");
			});
		}
	});
});
function validacion_campos() {
    var text = "";
    if ($.trim($("#nombre").val()).length === 0) {
        text = text + "Name\n";
    }
    if ($.trim($("#apellidos").val()).length === 0) {
        text = text + "Last Name\n";
    }
    if ($.trim($("#email").val()).length === 0) {
        text = text + "Email\n";
    }
    if ($.trim($("#telefono").val()).length === 0) {
        text = text + "Phone\n";
	}
	if ($.trim($("#inputMsg").val()).length === 0) {
        text = text + "Message\n";
    }
    if (text.length > 0) {
		showWithTitleMessage(text);
        return false;
    } else {
        return true;
    }
}
function showWithTitleMessage(text) {
    swal("There are empty fields", text);
}
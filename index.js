function validarNombre(){
	var nombreField = document.getElementById('nombre');
	var validNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	var errorNombre = document.getElementById('datoNombreInv');

	if( nombreField.value == 0){
		errorNombre.innerHTML = "Rellene este campo.";
		nombreField.classList.add("datoinvalido");
		nombreField.classList.add("datoinvalidoicono");
		return false; }
	else if( validNombre.test(nombreField.value)){
		nombreField.classList.remove("datoinvalido");
		nombreField.classList.remove("datoinvalidoicono");
		errorNombre.innerHTML = "";
		nombreField.classList.add("datovalido");
		nombreField.classList.add("datovalidoicono");
		return true; }
	else {
		errorNombre.innerHTML = "Solo acepta texto.";
		nombreField.classList.add("datoinvalido");
		nombreField.classList.add("datoinvalidoicono");
		return false; }
	}
///////////email.

function validarEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorEmail = document.getElementById('datoEmailInv');

	if( emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo.";
		emailField.classList.add("datoinvalido");
		emailField.classList.add("datoinvalidoicono");
		return false;
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);}
	else if( validEmail.test(emailField.value) ){
		emailField.classList.remove("datoinvalido");
		emailField.classList.remove("datoinvalidoicono");
		errorEmail.innerHTML = "";
		emailField.classList.add("datovalido");
		emailField.classList.add("datovalidoicono");
		return true; }

	else {
		errorEmail.innerHTML = "Email inválido.";
		emailField.classList.add("datoinvalido");
		emailField.classList.add("datoinvalidoicono");
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
		return false; }
} 

function validarClave(){
	var passwordField = document.getElementById('password');
	var validPassword = /^[\s\S]{8,}$/;
	var errorPassword = document.getElementById('datoClaveInv');

	if( passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo.";
		passwordField.classList.add("datoinvalido");
		passwordField.classList.add("datoinvalidoicono");
		return false; }
	else if( validPassword.test(passwordField.value) ){
		passwordField.classList.remove("datoinvalido");
		passwordField.classList.remove("datoinvalidoicono");
		errorPassword.innerHTML = "";
		passwordField.classList.add("datovalido");
		passwordField.classList.add("datovalidoicono");
		return true; }
	else {	
		errorPassword.innerHTML = "Debe tener al menos 8 carácteres.";
		passwordField.classList.add("datoinvalido");
		return false; }
}

function validarClaveConf(){
	var passwordField = document.getElementById('password');
	var confirmaField = document.getElementById('confirma');
	var errorConfirma = document.getElementById('datoClaveConfInv');

	if( confirmaField.value == 0){
		errorConfirma.innerHTML = "Rellene este campo.";
		confirmaField.classList.add("datoinvalido");
		confirmaField.classList.add("datoinvalidoicono");
		return false; }
	else if ( passwordField.value == confirmaField.value ){
		confirmaField.classList.remove("datoinvalido");
		confirmaField.classList.remove("datoinvalidoicono");
		errorConfirma.innerHTML = "";
		confirmaField.classList.add("datovalido");
		confirmaField.classList.add("datovalidoicono");
		return true; }
	else {
		errorConfirma.innerHTML = "Las contraseñas no coinciden.";
		confirmaField.classList.add("datoinvalido");
		confirmaField.classList.add("datoinvalidoicono");
		return false; }
}




function validateForm(){

	if (validarClaveConf() == true && validarClave() == true && validarEmail() == true && validarNombre() == true){
		alert("¡Enhorabuena! La inscripción se ha realizado correctamente.");
		return true; }
	else {
		return false; }
}



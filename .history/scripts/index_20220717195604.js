window.onload = function() {
    getElements();
    submit.onclick = function(e) {
        e.preventDefault();
        if (fieldValidations() == true) {
            modal.classList.add("modal-show");
            modalClose.onclick = function() {

            }
        }
    }
}

function getElements() {
    nombre = document.getElementById("textNombre");
    apellido = document.getElementById("textApellido");
    email = document.getElementById("textEmail");
    emailRepetir = document.getElementById("textEmailRepetir");
    pass = document.getElementById("textPass");
    passRepetir = document.getElementById("textPassRepetir");
    submit = document.getElementById("form-button");
    modal = document.getElementById("sectionModal");
    modalClose = document.getElementById("modal-button-close");

}

function fieldValidations() {
    validate = true;
    if (nombre.value.length <= 2 || isNaN(nombre.value)) {
        nombre.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    if (apellido.value.length <= 2 || isNaN(apellido.value)) {
        apellido.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        email.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    if (emailRepetir != email) {
        email.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    if (pass.value.length < 7) {
        pass.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    if (passRepetir != pass) {
        passRepetir.labels[1].classList.toggle("hidden", false);
        validate = false;
    }
    return validate;
}

function formReset() {
    document.getElementById("main-form").reset();
}
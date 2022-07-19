window.onload = function() {
    getElements();
    submit.onclick = function(e) {
        e.preventDefault();
        if (fieldValidations() == true) {
            modal.classList.add("modal-show");
            modalClose.onclick = function() {
                modal.style.display = "none";
                formReset();
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    formReset();
                }
            }
        }
    }
    hideLabels();
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
    inputList = document.querySelectorAll("input");
}

function fieldValidations() {
    validate = true;
    if (nombre.value === "" || nombre.value === null)
    {
        nombre.labels[1].classList.toggle("hidden", false);
        nombre.labels[1].innerHTML = "Debe ingresar un nombre";
        validate = false;
    }
    else if (nombre.value.length <= 2 || isNaN(nombre.value) == false) {
        nombre.labels[1].classList.toggle("hidden", false);
        nombre.labels[1].innerHTML = "El nombre ingresado no es válido";
        validate = false;
    }
    if (apellido.value === "" || apellido.value === null)
    {
        apellido.labels[1].classList.toggle("hidden", false);
        apellido.labels[1].innerHTML = "Debe ingresar un apellido";
        validate = false;
    }
    else if (apellido.value.length <= 2 || isNaN(apellido.value) == false) {
        apellido.labels[1].classList.toggle("hidden", false);
        apellido.labels[1].innerHTML = "El apellido ingresado no es válido";
        validate = false;
    }
    if (email.value === "" || email.value === null)
    {
        email.labels[1].classList.toggle("hidden", false);
        email.labels[1].innerHTML = "Debe ingresar un email";
        validate = false;
    }
    else if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
        email.labels[1].classList.toggle("hidden", false);
        email.labels[1].innerHTML = "El email ingresado no es válido";
        validate = false;
    }
    if (emailRepetir.value === "" || emailRepetir.value === null)
    {
        emailRepetir.labels[1].classList.toggle("hidden", false);
        emailRepetir.labels[1].innerHTML = "Debe volver a ingresar su email";
        validate = false;
    }
    else if (emailRepetir.value != email.value) {
        emailRepetir.labels[1].classList.toggle("hidden", false);
        emailRepetir.labels[1].innerHTML = "Los emails no coinciden";
        validate = false;
    }
    if (pass.value === "" || pass.value === null)
    {
        pass.labels[1].classList.toggle("hidden", false);
        pass.labels[1].innerHTML = "Debe ingresar una contraseña";
        validate = false;
    }
    else if (pass.value.length < 7) {
        pass.labels[1].classList.toggle("hidden", false);
        pass.labels[1].innerHTML = "La contraseña no es valida";
        validate = false;
    }
    if (passRepetir.value === "" || passRepetir.value === null)
    {
        passRepetir.labels[1].classList.toggle("hidden", false);
        passRepetir.labels[1].innerHTML = "Debe volver a ingresar su contraseña";
        validate = false;
    }
    else if (passRepetir.value != pass.value) {
        passRepetir.labels[1].classList.toggle("hidden", false);
        passRepetir.labels[1].innerHTML = "Las contraseñas no coinciden";
        validate = false;
    }
    return validate;
}

function formReset() {
    document.getElementById("main-form").reset();
}

function hideLabels() {
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].onfocus = function() {
            inputList[i].labels[1].classList.toggle("hidden", true);
        }
    }
}
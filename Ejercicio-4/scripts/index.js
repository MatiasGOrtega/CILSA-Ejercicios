const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');


form.addEventListener('submit',
  (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Por favor, ingresa tu nombre.';
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameError.textContent = '';
      nameInput.classList.remove('is-invalid');
    }

    const nameRegex = /^[a-zA-Z]{2,30}$/;
    if (!nameRegex.test(nameInput.value)) {
      nameError.textContent = 'El nombre debe contener solo letras y tener entre 2 y 30 caracteres.';
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameError.textContent = '';
      nameInput.classList.remove('is-invalid');
    }



    // Validate Email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Ingresa una dirección de correo electrónico válida.';
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('is-invalid');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Por favor, escribe tu mensaje.';
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageError.textContent = '';
      messageInput.classList.remove('is-invalid');
    }

    if (isValid) {
      // Submit the form (potentially using AJAX or other methods)
      alert('Formulario enviado exitosamente!');

      // Clear the form
      form.reset();
    }
  }
);
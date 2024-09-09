window.addEventListener('load', function () {
  const form = document.querySelector('form')
  const validateRegex = {
    name: /^[a-zA-Z]{2,30}$/,
    lastname: /^[a-zA-Z]{2,30}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    country: /^[a-zA-Z]{2,30}$/,
  }

  // Enfocar el primer campo por defecto
  document.getElementById('name').focus();

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    let isValid = true

    // Primero limpiar errores previos si es que los hay
    document.querySelectorAll('.error-message').forEach(el => el.remove())

    // Validar cada campo
    Object.keys(validateRegex).forEach(key => {
      const input = document.getElementById(key) //caputuramos el input por su id
      const regex = validateRegex[key] //capturamos la expresion regular

      // Si el campo no cumple con la expresion regular se muestra un mensaje de error
      if (!regex.test(data[key])) {
        isValid = false // se cambia el valor de isValid a false
        const errorMessage = document.createElement('p') //creamos un elemento p
        errorMessage.classList.add('error-message') //le agregamos una clase al elemento p
        errorMessage.setAttribute('role', 'alert') //le agregamos un atributo al elemento p
        errorMessage.setAttribute('aria-live', 'assertive') //le agregamos un atributo al elemento p
        errorMessage.textContent = `Invalid ${key}` //le agregamos un texto al elemento p
        input.insertAdjacentElement('afterend', errorMessage) //insertamos el elemento p despues del input
      }
    })

    const birthdate = document.getElementById('birthdate')
    // Validar la fecha de nacimiento
    if (!isValidBirthdate(birthdate.value)) {
      isValid = false;
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'You must be at least 18 years old';
      birthdate.insertAdjacentElement('afterend', errorMessage);

    }

    function isValidBirthdate(birthdate) {
      // Regular expression para validar el formato de la fecha (YYYY-MM-DD)
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(birthdate)) {
        return false;
      }

      // Parse de birthdate a un objeto Date
      const [year, month, day] = birthdate.split('-').map(Number);
      const birthDateObj = new Date(year, month - 1, day);
      // Obtenemos la fecha actual
      const currentDate = new Date();

      // Calculamos la edad del usuario
      let age = currentDate.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
        age--;
      }

      // Checamos si el usuario es mayor de edad (18 años)
      return age >= 18;
    }

    if (isValid) {
      // Aquí se puede enviar los datos al servidor o realizar otra acción
      alert('Formulario enviado correctamente')
    }
  })
})

## Ejercicio 2

A partir del formulario elaborado para la tarea 1, se pide:

1- Detallar los pasos que realizan para poder cargar el mismo.      
2- Indicar para cada campo cuales son los valores válidos y cuales inválidos. ¿Se realiza esa validación de alguna forma?

3- Realizar una exploración del formulario y verificar si mediante el lector de pantalla NVDA pueden acceder a cada campo mediante la tecla TAB y completa el mismo. ¿Hay algún campo o acción que no resulte accesible?

---

## 1- El usuario debera clickear en los campos o ir uno por uno miestras se desplaza usanto la tecla "**TAB**"
- Se debera llenar el campo "**Name**" y completarlo.
- Se debera llenar el campo "**Lastname**" y completarlo.
- Se debera llenar el campo "**Email**" y completarlo.
- Se debera llenar el campo "**Birthdate**" y completarlo ingresando la fecha con el teclado, o elegir una fecha desde el selector de fechas.
- Se debera llenar el campo "**Your Country**" y completarlo.
- Clickear el botón "**Sing up**" para realizar el envío del formulario.

## 2- Valores válidos e inválidos para cada campo y validación

1. **Nombre (Name)**
   - **Valores válidos**: Letras únicamente, entre 2 y 30 caracteres, sin espacios ni números.
     - Ejemplo válido: `John`
   - **Valores inválidos**: 
     - `Jo1hn` (contiene un número)
     - `John Doe` (contiene un espacio)
     - `J` (menos de 2 caracteres)
   - **Validación**: El campo se valida mediante el siguiente regex: `/^[a-zA-Z]{2,30}$/`.

2. **Apellido (Lastname)**
   - **Valores válidos**: Letras únicamente, entre 2 y 30 caracteres, sin espacios ni números.
     - Ejemplo válido: `Doe`
   - **Valores inválidos**: 
     - `Doe1` (contiene un número)
     - `Doe Smith` (contiene un espacio)
     - `D` (menos de 2 caracteres)
   - **Validación**: Utiliza el mismo regex que el nombre: `/^[a-zA-Z]{2,30}$/`.

3. **Correo electrónico (Email)**
   - **Valores válidos**: Cualquier dirección de correo electrónico válida con formato estándar.
     - Ejemplo válido: `john.doe@example.com`
   - **Valores inválidos**: 
     - `john.doe@com` (dominio incompleto)
     - `john@.com` (falta nombre de dominio)
     - `john.com` (falta `@`)
   - **Validación**: El campo se valida con el regex: `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/`.

4. **Fecha de nacimiento (Birthdate)**
   - **Valores válidos**: Cualquier fecha seleccionada en el formato estándar `YYYY-MM-DD`.
     - Ejemplo válido: `1990-05-20`
   - **Valores inválidos**: 
     - Campo vacío o fecha no seleccionada.
   - **Validación**: En el script, se verifica que no esté vacío. Si está vacío, muestra un error.

5. **País (Country)**
   - **Valores válidos**: Letras únicamente, entre 2 y 30 caracteres, sin espacios ni números.
     - Ejemplo válido: `Argentina`
   - **Valores inválidos**: 
     - `Argent1na` (contiene números)
     - `United States` (contiene un espacio)
     - `A` (menos de 2 caracteres)
   - **Validación**: Usa el regex `/^[a-zA-Z]{2,30}$/`.


## ¿Se realiza la validación de alguna forma?

Sí, la validación se realiza mediante expresiones regulares (regex) que definen los valores permitidos para cada campo. Cada vez que el usuario intenta enviar el formulario, los datos se validan antes de permitir el envío. Los errores se muestran dinámicamente debajo del campo correspondiente si no pasa la validación.

# 3- Accesibilidad del Formulario

#### Exploración del formulario con NVDA utilizando la tecla **TAB**

1. **Título del Formulario**
   - El título del formulario, etiquetado como `h1`, es adecuado para proporcionar una estructura semántica clara. NVDA puede leer este encabezado correctamente, facilitando la navegación para los usuarios de lectores de pantalla.

2. **Campos del Formulario**
   - Todos los campos están vinculados a sus respectivas etiquetas `label` mediante el atributo `for`, lo que asegura que NVDA los anuncie adecuadamente. Cada campo se puede navegar usando **TAB**, y el foco se mueve en orden lógico a través de los campos.
   - **Enfoque Automático en el Primer Campo**: El primer campo ("Name") recibe el foco de manera automática cuando se carga la página. Esto ayuda a los usuarios a comenzar rápidamente, pero no afecta la navegación con **TAB**.

3. **Mensajes de Error**
   - Los mensajes de error que se generan al enviar el formulario están implementados con los atributos `role="alert"` y `aria-live="assertive"`, lo que hace que NVDA los lea inmediatamente cuando aparecen. Esto asegura que el usuario sepa qué errores han ocurrido en tiempo real.

4. **Validación de la Fecha de Nacimiento**
   - La validación de la fecha de nacimiento también incluye un mensaje de error accesible para NVDA, utilizando los mismos atributos ARIA para garantizar que se anuncie el error.

5. **Botón de Envío**
   - El botón "Sign up" es un botón estándar de tipo `submit`, lo que permite a NVDA identificarlo correctamente como el botón de envío final.

### Análisis
- **Navegación con TAB**: Todos los campos del formulario son accesibles mediante la tecla **TAB** en el orden correcto. No hay campos fuera de secuencia o que no reciban el foco adecuadamente.

- **Contenido Dinámico**: Los mensajes de error se presentan con los atributos ARIA, lo que garantiza que NVDA los lea inmediatamente cuando aparecen. Esto proporciona retroalimentación instantánea al usuario.

- **Contraste del Botón**: Aunque el botón "Cambiar contraste" está disponible, su funcionalidad no afecta directamente la accesibilidad del formulario en términos de navegación con NVDA, pero es importante para usuarios con baja visión.
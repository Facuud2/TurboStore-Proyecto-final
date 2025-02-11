console.log('Escuchando...');

const inputNombre = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputSubmit = document.getElementById('inputSubmit');

const formulario = document.getElementById('formJs');
const errorBlock = document.getElementById('errorBlock');
const successBlock = document.getElementById('sucessBlock');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (inputNombre.value === '') {
        
        inputNombre.style.border = '2px double #EF4444';
        errorBlock.style.display = 'block';
        
        setTimeout(function() {
            inputNombre.style.border = '2px double #000';
            errorBlock.style.display = 'none';
        }, 3600)
    }

    if(inputEmail.value === '') {
        inputEmail.style.border = '2px double #EF4444';
        errorBlock.style.display = 'block';

        setTimeout(function() {
            inputEmail.style.border = '2px double #000';
            errorBlock.style.display = 'none';
        }, 3600)
    }

    function todosLosCamposSonValidos() {
        if (inputNombre.value.trim() === '') {
            return false;
        }
    
        if (inputEmail.value.trim() === '') {
            return false;
        }

        return true;
    }

    if(todosLosCamposSonValidos()) {
        successBlock.style.display = 'block';
        inputNombre.value = ''
        inputEmail.value = ''

        setTimeout(function() {
            successBlock.style.display = 'none';
        }, 3600);
    }
})
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('valid-form');
    const CampoA = document.getElementById('CampoA');
    const CampoB = document.getElementById('CampoB');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    function validarformulario() {

        const valorCampoA = parseFloat(CampoA.value);
        const valorCampoB = parseFloat(CampoB.value);

        if(!(valorCampoA) || !(valorCampoB) ) {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return false;
        }

        if( (valorCampoB) > (valorCampoA)){
            errorMessage.style.display = "none";
            successMessage.style.display = "block";
        } else {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
        }

    }

    form.addEventListener("submit" , function (e) {
        e.preventDefault();
        validarformulario();

    });

    CampoA.addEventListener("input", function()  {
        errorMessage.style.display = "none";
        successMessage.style.display = "none";
    });

    CampoB.addEventListener("input", function()  {
        errorMessage.style.display = "none";
        successMessage.style.display = "none";
    });





} );

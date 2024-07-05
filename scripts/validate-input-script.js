const $form = document.querySelector(".contact-form_form");

const validateInputs = (inputs) => {

   let validate = false;

   const regxInput = [
      RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚ ]*$/g),
      RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚ ]*$/g),
      RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),
      RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚ ]*$/g),
   ];

   inputs.forEach((input, index) => {

      if(input.nextElementSibling.classList.contains("span_error_input")) {
         input.nextElementSibling.remove();
      }

      if(input.value.trim().length === 0) {
         input.outerHTML += `<span class ="span_error_input">Se encuentra vacio</span>`;
         return;
      }

      if(!regxInput[index].test(input.value.trim())) {
         input.outerHTML += `<span class ="span_error_input">Debe agregar un ${input.getAttribute("name")} válido</span>`;
         return;
      }

   });

   if($form.querySelector(".span_error_input") === null){
      validate = true;
   }

   return validate;

};

export default validateInputs;
const d = document;

const validateInputsByFormDetail = (inputs, $form) => {
   let validate = false;

   const regxInput = [
      RegExp(/[A-Za-záéíóúÁÉÍÓÚ ]+/g), /* Nombre   RegExp */
      RegExp(/[A-Za-záéíóúÁÉÍÓÚ ]+/g), /* Apellido RegExp */
      RegExp(/^[0-9]{1,9}$/g),         /* Cédula   RegExp */
      RegExp(/^[0-9]{11,11}$/g),       /* Teléfono RegExp */
      RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),/* Correo RegExp */
      RegExp(/.+/g),                   /* Instagram RegExp */
      RegExp(/[A-Za-záéíóúÁÉÍÓÚ ]+/g), /* Nombre    RegExp */
      RegExp(/^[0-9]{11,11}$/g),       /* Teléfono  RegExp */
      RegExp(/.+/g),                   /* Checkbox Condicion medica RegExp */
      RegExp(/.+/g),                   /* Condicion medica RegExp */
      RegExp(/.+/g),                   /* Checkbox Toma algun medicamento RegExp */
      RegExp(/.+/g),                   /* Toma algun medicamento RegExp */
      RegExp(/.+/g),                   /* Checkbox Alérgico a algún medicamento RegExp */
      RegExp(/.+/g),                   /* Alérgico a algún medicamento RegExp */
      RegExp(/.+/g),                   /* Checkbox Alérgico a algún alimento RegExp */
      RegExp(/.+/g),                   /* Alérgico a algún alimento RegExp */
   ];

   d.querySelectorAll(".span_error_input_form_detail").forEach((el) => el.remove());

   inputs.forEach((input, index) => {

      let typeInput = input.getAttribute("type");      
      
      if(input.value.trim().length === 0) {

         try {

            if(inputs[index - 1] === undefined) {  
               throw new Error('Indice fuera de rango');
            }

            if(inputs[index - 1].getAttribute("type") !== "checkbox") {
               input.outerHTML += `<span class ="span_error_input_form_detail">Se encuentra vacio</span>`  
               return;
            }
            else if(inputs[index - 1].checked) {
               input.outerHTML += `<span class ="span_error_input_form_detail">Se encuentra vacio</span>`
               return;
            }
         }

         catch(err) {
            let { message } = err;

            if(message.includes("Indice fuera de rango")){

               if(input.value.trim().length === 0) {
                  input.outerHTML += `<span class ="span_error_input_form_detail">Se encuentra vacio</span>`;
                  return;

               }

            }
         }

         
      }
      
      if(!regxInput[index].test(input.value.trim())) {
         try {

            if(inputs[index - 1] === undefined) {  
               throw new Error('Indice fuera de rango');
            }

            if(inputs[index - 1].getAttribute("type") !== "checkbox") {
               input.outerHTML += `<span class ="span_error_input_form_detail">Debe agregar un ${input.getAttribute("name")} válido</span>`;
               return;
            }
            else if(inputs[index - 1].checked) {
               input.outerHTML += `<span class ="span_error_input_form_detail">Debe agregar un ${input.getAttribute("name")} válido</span>`;
               return;
            }
         }

         catch(err) {
            let { message } = err;

            if(message.includes("Indice fuera de rango")){

               if(!regxInput[0].test(input.value.trim())) {
                  input.outerHTML += `<span class ="span_error_input_form_detail">Debe agregar un ${input.getAttribute("name")} válido</span>`;

                  return;

               }

            }
         }
      }

      if(typeInput === "checkbox" && !input.checked && inputs[index + 1].value.trim().length !== 0) {
         inputs[index + 1].outerHTML += `<span class ="span_error_input_form_detail">Debe estar marcado la casilla para colocar información aquí</span>`;
         return;
      }


   });

   if($form.querySelector(".span_error_input_form_detail") === null){
      validate = true;
   }

   return validate;

}

export default validateInputsByFormDetail;
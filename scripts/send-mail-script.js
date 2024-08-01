const d = document;
const URL = 'https://formsubmit.co/ajax/migueleonrojas@gmail.com';

const sendMailContact = async (
   $loaderElement,
   $formElement,
   $spanElement,
   bodyJsonMsg
) => {
   $loaderElement.classList.remove("hide");

   try {
      let res = await fetch(URL,{
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json',
             'Accept' : 'application/json'
         },
         body: JSON.stringify(bodyJsonMsg)
      }),
      json = await res.json();
      $spanElement.classList.add("span_success_send");
      $loaderElement.classList.add("hide");
      $spanElement.innerHTML = 'Se ha mandado el correo con éxito';
      $spanElement.classList.remove("hide");
      $formElement.reset();
      $spanElement.classList.add("span_success_send");

      setTimeout(() => { 
         $spanElement.classList.add("hide");
      },3000);

      if(json.err) throw {status:res.status, statusText: res.statusText }

   }
   catch(err){
      let message = err.statusText || "El correo no se pudo enviar, intente más tarde";
      $spanElement.classList.remove("span_success_send");
      $spanElement.classList.add("span_error_input");
      $loaderElement.classList.add("hide");
      $spanElement.innerHTML = message;
      $spanElement.classList.remove("hide");
      setTimeout(() => { 
         $spanElement.classList.add("hide"); 
         $spanElement.classList.remove("span_error_input");
      },3000);
      $formElement.reset();
      
   }

};

export {
   sendMailContact
};
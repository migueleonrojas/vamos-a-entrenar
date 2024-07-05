const d = document;

const sendMail = async () => {
   let $loader = d.querySelector(".contact-form_loader");
   let $form = d.querySelector(".contact-form_form");
   let $span = d.querySelector(".span_success_send");
   $loader.classList.remove("hide");

   try {
      let res = await fetch('https://formsubmit.co/ajax/migueleonrojas@gmail.com',{
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json',
             'Accept' : 'application/json'
         },
         body: JSON.stringify({
             name: `Nombre: ${$form.nombre.value} | Correo: ${$form.correo.value}`,
             message: `Asunto: ${$form.asunto.value}\nComentario:\n${$form.comentario.value}`,
         })
      }),
      json = await res.json();
      $span.classList.add("span_success_send");
      $loader.classList.add("hide");
      $span.innerHTML = 'Se ha mandado el correo con éxito';
      $span.classList.remove("hide");
      $form.reset();
      $span.classList.add("span_success_send");

      setTimeout(() => { 
         $span.classList.add("hide");
      },3000);

      if(json.err) throw {status:res.status, statusText: res.statusText }

   }
   catch(err){
      let message = err.statusText || "El correo no se pudo enviar, intente más tarde";
      $span.classList.remove("span_success_send");
      $span.classList.add("span_error_input");
      $loader.classList.add("hide");
      $span.innerHTML = message;
      $span.classList.remove("hide");
      setTimeout(() => { 
         $span.classList.add("hide"); 
         $span.classList.remove("span_error_input");
      },3000);
      $form.reset();
   }

};

export default sendMail;
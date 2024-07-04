import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import db  from "./firebase.js";

const d = document;

const $form = d.querySelector(".contact-form_form");

const countUserVisit = async () => {

   let date = new Date();

   const userDoc = collection(db, "users");

   try {
      await addDoc(userDoc, {
         'info': `${date.toISOString().slice(0, 10)} - ${date.toLocaleTimeString()} - ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
      });
   }
   catch (error) {
      console.log(error);
      await addDoc(userDoc, {
         'info': `${error}`
      });
   }

};

const canCountVisit = () => {

   let canCountVisitUser = false;
   let l = localStorage;

   if(l.getItem('user') === null) {
      l.setItem("user", "");
      canCountVisitUser = true;
   }
   else{
      
   }

   return canCountVisitUser;

}

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


d.addEventListener("DOMContentLoaded", () => {

   if(!canCountVisit()) {
      return false;
   }
   countUserVisit();
   
});



$form.addEventListener("submit", (e) => {

   e.preventDefault();
   let allInputs = Array.from($form.querySelectorAll("* [name]")).filter(el => el);
   if(!validateInputs([...allInputs])) {
      return false;
   }
   window.scroll(0, d.body.offsetHeight);
   sendMail();


});








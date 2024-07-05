import validateInputs from "./scripts/validate-input-script.js";
import { canCountVisit, countUserVisit } from "./scripts/count-visit-script.js";
import getCountVisitTotal from "./scripts/get-count-visit.js";
import sendMail from "./scripts/send-mail-script.js";

const d = document;
const $form = d.querySelector(".contact-form_form");
const $btn_hamburguer = d.querySelector(".btn-hamburguer");


d.addEventListener("DOMContentLoaded", () => {

   getCountVisitTotal();

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


d.addEventListener("click", (e) => {


   if(e.target.matches(`.btn-hamburguer`) || e.target.matches(`.btn-hamburguer *`)) {

      let $btn_hamburguer_menu_movil = $btn_hamburguer.querySelector(".btn-hamburguer_menu_movil");

      $btn_hamburguer_menu_movil.classList.toggle("hide");

   }

});








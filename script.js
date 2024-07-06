import validateInputs from "./scripts/validate-input-script.js";
import toggleMenuMovil from "./scripts/toggle-menu-script.js";
import { canCountVisit, countUserVisit } from "./scripts/count-visit-script.js";
import getCountVisitTotal from "./scripts/get-count-visit-script.js";
import sendMail from "./scripts/send-mail-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "./scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"

const d = document;
const $form = d.querySelector(".contact-form_form");


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

      toggleMenuMovil();

   }

   if(e.target.matches(`.menu-movil_content > a`)) {

      toggleMenuMovil();

   }

   if(e.target.matches(`.menu-movil_sub_menu_content > a`)) {
      toggleMenuMovil();
   }

});


waitForAnimationMenuMovilByChangeCurrentUrl();
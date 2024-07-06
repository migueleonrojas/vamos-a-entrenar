import validateInputs from "./scripts/validate-input-script.js";
import toggleMenuMovil from "./scripts/toggle-menu.js";
import { canCountVisit, countUserVisit } from "./scripts/count-visit-script.js";
import getCountVisitTotal from "./scripts/get-count-visit.js";
import sendMail from "./scripts/send-mail-script.js";

const d = document;
const $form = d.querySelector(".contact-form_form");
const $ancoreOtherSide = d.querySelectorAll(".other-page")



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


/* console.log($ancoreOtherSide.entries()) */


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

$ancoreOtherSide.forEach((el) => {
   el.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
            window.location.href = e.target.getAttribute("href");
         }, 
         300
      );
   })
})










import RouteState from "../../../state/route-state/route-state.js"
import toggleMenuMovil from "../../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js";
import { hideLoader } from "../../../scripts/loader.js";
import renderListTextAndSubtext from "../../../scripts/list-text-subtext.js";
import buildInputsCode from "../../../scripts/build-inputs-code.js";
import validateInputsByFormDetail from "../../../scripts/validate-form-detail.js";
import validateTerms from "../../../scripts/validate-terms.js";
import generateTicketInPdf from "../../../scripts/generate-ticket.js";
import { topOffSetElement } from "../../../utils/offset-element.js";
import { generateCodeTwoFactor, validateCode } from "../../../scripts/generate-two-factor.js";
import { requestPermissionNotification, showNotification } from "../../../scripts/generate-notification.js"

const d = document;
const w = window;
let code = '';
let inputCode = '';
let lastInput = d.querySelectorAll(".auth-by-code_input_number")[4]
const $form = d.querySelector(".reservation-form_form");


lastInput.addEventListener('input', (e) => {
   if(e.data === null) return false;

   inputCode = Array.from(d.querySelectorAll(".auth-by-code_input_number")).map(el => el.value.trim()).join("");

   if(!validateCode(code, inputCode)) {
      showNotification('Código Errado', `El código que ingreso esta errado.`);
      return false;
   }

   showNotification('Código Exitoso', `El código que ingreso es correcto.`);
   
   
})

$form.addEventListener("submit", async (e) => {
   e.preventDefault();
   let allInputs = Array.from($form.querySelectorAll("* [name]")).filter(el => el);
   if(!validateInputsByFormDetail(
      [...allInputs], 
      d.querySelector(".reservation-form_form"))
   ) {

      window.scroll({
         top: topOffSetElement(
            d.querySelector(".span_error_input_form_detail")
         ),
         left: 0,
         behavior: "smooth"
       });
 
      return false;
   }

   if(!validateTerms(
      d.getElementById("terms-and-condition"),
      d.querySelector(".terms-and-condition_error")
   )){

      window.scroll({
         top: topOffSetElement(
            d.querySelector(".terms-and-condition_error")
         ),
         left: 0,
         behavior: "smooth"
      });
      return false;
   }

   code = generateCodeTwoFactor(0, 99999);

   if(!requestPermissionNotification()) {
      return false;
   }

   d.querySelector(".auth-by-code").classList.remove("hide-by-height");


   showNotification('Código', `Su código es: ${code}`);


});



d.addEventListener("DOMContentLoaded", e => {

   let route = new RouteState();

   let { terms_and_conditions } = route.route;

   renderListTextAndSubtext(
      terms_and_conditions, 
      ".terms-and-condition_text_content",
      "itinerary-section_item",
      "itinerary-section_text",
      "itinerary-section_sub_text"
   );

   buildInputsCode(".auth-by-code_input_number");



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

   if(e.target.matches(`.terms-and-condition_heading`)) {
      d.querySelector(".terms-and-condition_text").classList.toggle("hide-by-height");
   }

});
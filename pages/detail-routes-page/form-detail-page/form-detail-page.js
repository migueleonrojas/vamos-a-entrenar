import RouteState from "../../../state/route-state/route-state.js"
import TicketDetailState from "../../../state/ticket-datail-state/ticket-detail-state.js"
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
import { generateRandomIdCode } from "../../../utils/generate-random-id.js";
const d = document;
const w = window;
let code = '';
let inputCode = '';
let canClick = true;
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

   const formData = new FormData($form);

   let ticketDetail = new TicketDetailState(); 
   
   ticketDetail.ticketDetail = {
      id: generateRandomIdCode(),
      date_route: new RouteState().route.main_information.start_date,
      name_route: new RouteState().route.main_information.description,
      name_competitor: formData.get("nombre"),
      last_name_competitor: formData.get("apellido"),
      identification_card: formData.get("cédula"),
      telephone_competitor: formData.get("teléfono"),
      email_competitor: formData.get("correo"),
      instagram_competitor: formData.get("instagram"),
      name_emergency: formData.get("nombre emergencia"),
      telephone_emergency: formData.get("teléfono emergencia"),
      medical_condition: formData.get("condición médica"),
      medication_take: formData.get("medicamento que toma"),
      allergic_medication: formData.get("medicamento al que es alérgico"),
      allergic_food: formData.get("alimento al que es alérgico"),
      terms_and_conditions: new RouteState().route.terms_and_conditions

   };
   window.location.href = "./ticket-detail-page/ticket-detail-page.html";
   
})

$form.addEventListener("submit", async (e) => {
   e.preventDefault();

   if(!canClick) return;

   

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

   canClick = false;

   d.querySelector(".auth-by-code").classList.remove("hide-by-height");

   setTimeout(() => {
      code = generateCodeTwoFactor(0, 99999);

      if(!requestPermissionNotification()) {
         return false;
      }

      showNotification('Código', `Su código es: ${code}`);

      canClick = true;
   }, 1000)

});



d.addEventListener("DOMContentLoaded", e => {

   let route = new RouteState();

   let { terms_and_conditions, main_information } = route.route;

   d.querySelector(".reservation-form_name_route").innerHTML = main_information.description;

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
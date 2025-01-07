import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"

const d = document;



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

d.addEventListener("DOMContentLoaded", () => {
   waitForAnimationMenuMovilByChangeCurrentUrl();
});
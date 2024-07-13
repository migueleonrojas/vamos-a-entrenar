import { getDocRouteById } from "../../scripts/routes.script.js"
import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
const d = document;
const w = window;

const getRouteById = async () => {

   let hashId = w.location.hash.slice(1);

   const readerRouteById = getDocRouteById(hashId).getReader();
   while (true) {
      let {done, value} = await readerRouteById.read();
      console.log(value);
   }
}


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
   getRouteById();

})







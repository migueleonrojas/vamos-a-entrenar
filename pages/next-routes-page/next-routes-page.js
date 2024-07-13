import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
import { moveMouseScroll, changeImage} from "../../scripts/move-scroll-with-mouse.js";
import { getDocsRoutesByLimit } from "../../scripts/routes.script.js"

const d = document;

const insertRoutes = (routes) => {
   let $fragment = document.createDocumentFragment();
   let $next_routes_cards_content = document.querySelector(".next-routes_cards_content");

   routes.forEach(route => {
      let $articleNextRoutesCard = document.createElement("article");
      $articleNextRoutesCard.classList.add("next-routes_card");
      $articleNextRoutesCard.setAttribute("data-id", route['id']);
      $articleNextRoutesCard.setAttribute("data-name", route['main_information']['name']);
      $articleNextRoutesCard.setAttribute("style", route['image']);

      let $clone = document.importNode($articleNextRoutesCard, true);
      $fragment.appendChild($clone);
   });
   $next_routes_cards_content.appendChild($fragment);
   moveMouseScroll();
   changeImage();
   
}

const getRoutes = async () => {
   const readerRoutes = getDocsRoutesByLimit().getReader();
   while (true) {
      let {done, value} = await readerRoutes.read();
      insertRoutes(value);
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

   if(e.target.matches(`.next-routes_image`)) {
      e.preventDefault();
   }

});

waitForAnimationMenuMovilByChangeCurrentUrl();
getRoutes();




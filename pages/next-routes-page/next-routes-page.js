import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
import { moveMouseScroll, changeImage} from "../../scripts/move-scroll-with-mouse.js";
import { getDocsRoutesByLimit, addDocsRoutesByLots } from "../../scripts/routes.script.js"
import { hideLoader } from "../../scripts/loader.js";

const d = document;

const insertRoutes = (routes) => {
   let $fragment = document.createDocumentFragment();
   let $next_routes_cards_content = document.querySelector(".next-routes_cards_content");
   d.querySelectorAll(".next-routes_card").forEach(el => el.remove());

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
   setDefaultRoute();
   hideLoader();
}

const getRoutes = async () => {
   const readerRoutes = getDocsRoutesByLimit().getReader();
   while (true) {
      let {done, value} = await readerRoutes.read();
      insertRoutes(value);
   }
}

const setDefaultRoute = () => {
   const $next_routes_image = d.querySelector(".next-routes_image");
   const $first_next_routes_card =  d.querySelector(".next-routes_card");

   $next_routes_image.setAttribute("style", $first_next_routes_card.getAttribute("style"));
   $next_routes_image.querySelector(".next-routes_image_name_route").innerHTML = $first_next_routes_card.getAttribute("data-name").toUpperCase();

   $next_routes_image.setAttribute("href", `${$next_routes_image.getAttribute('href')}#${$first_next_routes_card.getAttribute("data-id")}`);

   $next_routes_image.classList.remove("pi-none");

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

d.addEventListener("DOMContentLoaded", () => {

   waitForAnimationMenuMovilByChangeCurrentUrl();
   getRoutes();
   
})




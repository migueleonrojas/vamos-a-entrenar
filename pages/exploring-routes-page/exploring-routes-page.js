import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
import { moveMouseScroll, changeImage} from "../../scripts/move-scroll-with-mouse.js";
import { getDocsRoutesByLimit, addDocsRoutesByLots } from "../../scripts/routes.script.js"
import { hideLoader } from "../../scripts/loader.js";

const d = document;

const insertRoutes = (routes) => {
   let $fragment = document.createDocumentFragment();
   let $next_routes_cards_content = document.querySelector(".exploring-routes_cards_content");
   
   d.querySelectorAll(".exploring-routes_card").forEach(el => el.remove());

   if(routes.length === 0) {
      d.querySelector(".exploring-routes_image").style.backgroundImage = `url(../../assets/logo/mountain.png)`;
      d.querySelector(".exploring-routes_image_name_route").innerHTML = "ACTUALMENTE NO HAY RUTAS A EXPLORAR.";
      hideLoader();
      return;
   }

   routes.forEach((route, i) => {
      let $articleNextRoutesCard = document.createElement("article");
      $articleNextRoutesCard.classList.add("exploring-routes_card");
      $articleNextRoutesCard.setAttribute("data-id", route['id']);
      $articleNextRoutesCard.setAttribute("data-name", route['main_information']['name']);
      $articleNextRoutesCard.style.backgroundImage = `url(${route['image']})`;
   
      let $clone = document.importNode($articleNextRoutesCard, true);
      $fragment.appendChild($clone);
   });
   $next_routes_cards_content.appendChild($fragment);
   
   moveMouseScroll(
      ".exploring-routes_card", 
      ".exploring-routes_cards_content",
      ".exploring-routes_button.to-the-right",
      ".exploring-routes_button.to-the-left",
   );
   changeImage(
      ".exploring-routes_card", 
      ".exploring-routes_cards_content", 
      ".exploring-routes_image_name_route",
      ".exploring-routes_image"
   );
   setDefaultRoute(routes[0]['image']);
   hideLoader();
   d.querySelectorAll(".exploring-routes_button").forEach(el => el.classList.remove("hide"));
}

const getRoutes = async () => {
   const readerRoutes = getDocsRoutesByLimit('exploring-route').getReader();
   while (true) {
      let {done, value} = await readerRoutes.read();
      insertRoutes(value);
   }
}

const setDefaultRoute = (image) => {
   const $next_routes_image = d.querySelector(".exploring-routes_image");
   const $first_next_routes_card =  d.querySelector(".exploring-routes_card");
   $next_routes_image.style.backgroundImage = `url(${image})`;
   $next_routes_image.querySelector(".exploring-routes_image_name_route").innerHTML = $first_next_routes_card.getAttribute("data-name").toUpperCase();
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

   if(e.target.matches(`.exploring-routes_image`)) {
      e.preventDefault();
   }

});

d.addEventListener("DOMContentLoaded", () => {

   /* addDocsRoutesByLots(); */

   getRoutes();
   waitForAnimationMenuMovilByChangeCurrentUrl();
   
});
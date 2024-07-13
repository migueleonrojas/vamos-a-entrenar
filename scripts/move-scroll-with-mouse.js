import RouteState from "../state/route-state/route-state.js"

const d = document;
const $next_routes_image = d.querySelector(".next-routes_image");
const HREF_DETAILS = $next_routes_image.getAttribute("href")


const $next_routes_cards_content = d.querySelector(".next-routes_cards_content");
const $right_button_cards = d.querySelector(".next-routes_button.to-the-right");
const $left_button_cards = d.querySelector(".next-routes_button.to-the-left");

const moveMouseScroll = () => {
   const $next_routes_card = d.querySelectorAll(".next-routes_card");
   const DISTACE_X_SCROLL = $next_routes_card[0].getBoundingClientRect().width;


   $left_button_cards.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollPosition = $next_routes_cards_content.scrollLeft;
      $next_routes_cards_content.scrollLeft = scrollPosition - DISTACE_X_SCROLL;
   });

   $right_button_cards.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollPosition = $next_routes_cards_content.scrollLeft;
      $next_routes_cards_content.scrollLeft = scrollPosition + DISTACE_X_SCROLL;
   });

};

const changeImage = () => {
   
   const $next_routes_card = d.querySelectorAll(".next-routes_card");

   $next_routes_cards_content.addEventListener("click", (e) => {
      e.preventDefault();
   })

   $next_routes_card.forEach(el => {
      el.addEventListener("click", (e) => {
         e.preventDefault();
         $next_routes_image.setAttribute("style", e.target.getAttribute("style"));
         $next_routes_image.querySelector(".next-routes_image_name_route").innerHTML = el.getAttribute("data-name").toUpperCase();
         $next_routes_image.setAttribute("href", `${HREF_DETAILS}#${el.getAttribute("data-id")}`);
      });
   });
};

export { 
   moveMouseScroll,
   changeImage
};



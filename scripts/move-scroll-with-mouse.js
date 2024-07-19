import RouteState from "../state/route-state/route-state.js"

const d = document;

const moveMouseScroll = (
   routes_card, 
   routes_card_content,
   routes_button_to_the_right,
   routes_button_to_the_left
) => {

   const $routes_card = d.querySelectorAll(routes_card);
   const $routes_cards_content = d.querySelector(routes_card_content);
   const DISTACE_X_SCROLL = $routes_card[0].getBoundingClientRect().width;
   const $right_button_cards = d.querySelector(routes_button_to_the_right);
   const $left_button_cards = d.querySelector(routes_button_to_the_left);

   $left_button_cards.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollPosition = $routes_cards_content.scrollLeft;
      $routes_cards_content.scrollLeft = scrollPosition - DISTACE_X_SCROLL;
   });

   $right_button_cards.addEventListener("click", (e) => {
      e.preventDefault();
      let scrollPosition = $routes_cards_content.scrollLeft;
      $routes_cards_content.scrollLeft = scrollPosition + DISTACE_X_SCROLL;
   });

};

const changeImage = (routes_card, routes_card_content, routes_image_name_route, routes_image) => {
   
   const $routes_card = d.querySelectorAll(routes_card);
   const $routes_cards_content = d.querySelector(routes_card_content);
   const $routes_image = d.querySelector(routes_image);
   const HREF_DETAILS = $routes_image.getAttribute("href")

   $routes_cards_content.addEventListener("click", (e) => {
      e.preventDefault();
   })

   $routes_card.forEach(el => {
      el.addEventListener("click", (e) => {
         e.preventDefault();
         $routes_image.setAttribute("style", e.target.getAttribute("style"));
         $routes_image.querySelector(routes_image_name_route).innerHTML = el.getAttribute("data-name").toUpperCase();
         $routes_image.setAttribute("href", `${HREF_DETAILS}#${el.getAttribute("data-id")}`);
      });
   });
};

export { 
   moveMouseScroll,
   changeImage
};



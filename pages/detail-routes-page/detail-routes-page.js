import { getDocRouteById } from "../../scripts/routes.script.js"
import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
import { renderCalendar } from "../../scripts/calendar.js";
import { renderHours } from "../../scripts/hours.js";
import renderLocation from "../../scripts/location.js";
import renderListTextAndSubtext from "../../scripts/list-text-subtext.js";
import loadIframeMapWikiloc from "../../scripts/load-iframe-map.js"
import { hideLoader } from "../../scripts/loader.js";
const d = document;
const w = window;


const setBodyBackGround = (urlImg) => {

   const $main = d.querySelector(".main");
   $main.setAttribute("style", urlImg);
};

const renderMainInformation = (main_information) => {

   const {
      name,
      description,
      location,
      start_date,
      end_date,
      meeting_point
   } = main_information;

   const $main_information_name = d.querySelector(".main-information_name");
   const $main_information_description = d.querySelector(".main-information_description");
   const $main_information_location = d.querySelector(".main-information_location");

   $main_information_name.innerHTML = name;
   $main_information_description.innerHTML = description;
   $main_information_location.innerHTML = location;
   

   renderCalendar(start_date, end_date);
   renderHours(start_date, end_date);
   renderLocation(meeting_point)

   
   
}

const renderItinerary = (itinerary) => {

   renderListTextAndSubtext(
      itinerary, 
      ".itinerary-section_content",
      "itinerary-section_item",
      "itinerary-section_text",
      "itinerary-section_sub_text"
   );

}

const getRouteById = async () => {

   let hashId =  parseInt(w.location.hash.slice(1));

   const readerRouteById = getDocRouteById(hashId).getReader();
   while (true) {
      let {done, value} = await readerRouteById.read();

      const {
         difficulty,
         image,
         main_information, 
         itinerary, 
         climate_and_vegetation,
         places_to_visit,
         the_marked_route,
         feeding,
         important_information,
         prohibited,
         terms_and_conditions,
         our_networks
      } = value;

      setBodyBackGround(image);
      renderMainInformation(main_information);
      renderItinerary(itinerary);
      loadIframeMapWikiloc(the_marked_route, ".marked-route_iframe")
      hideLoader();
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







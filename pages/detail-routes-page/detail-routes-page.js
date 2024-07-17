import { getDocRouteById } from "../../scripts/routes.script.js"
import toggleMenuMovil from "../../scripts/toggle-menu-script.js";
import waitForAnimationMenuMovilByChangeCurrentUrl from "../../scripts/wait-for-animation-menu-movil-by-change-current-url-script.js"
import { renderCalendar } from "../../scripts/calendar.js";
import { renderHours } from "../../scripts/hours.js";
import renderLocation from "../../scripts/location.js";
import renderListTextAndSubtext from "../../scripts/list-text-subtext.js";
import loadIframeMapWikiloc from "../../scripts/load-iframe-map.js"
import renderClimate from "../../scripts/climate.js"
import settingSocialMedia from "../../scripts/set-social-media.js"
import { hideLoader } from "../../scripts/loader.js";
const d = document;
const w = window;


const setBodyBackGround = (urlImg) => {

   const $main = d.querySelector(".main");
   $main.style.backgroundImage = `url(${urlImg})`;
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
         equipment_required,
         feeding,
         important_information,
         prohibited,
         terms_and_conditions,
         our_networks
      } = value;

      setBodyBackGround(image);
      renderMainInformation(main_information);
      renderListTextAndSubtext(
         itinerary, 
         ".itinerary-section_content",
         "itinerary-section_item",
         "itinerary-section_text",
         "itinerary-section_sub_text"
      );
      loadIframeMapWikiloc(the_marked_route, ".marked-route_iframe")
      renderClimate(
         climate_and_vegetation['climate'],
         ".climate-and-vegetation-section_climate_card_chance_of_rain",
         ".climate-and-vegetation-section_climate_card_humidity",
         ".climate-and-vegetation-section_climate_card_summary",
         ".climate-and-vegetation-section_climate_card_temperature",
         ".climate-and-vegetation-section_climate_card_wind"
      );

      renderListTextAndSubtext(
         climate_and_vegetation['vegetation'], 
         ".climate-and-vegetation-section_vegetation_content",
         "climate-and-vegetation-section_vegetation_content_item",
         "climate-and-vegetation-section_vegetation_content_text",
         "climate-and-vegetation-section_vegetation_content_sub_text"
      );
      renderListTextAndSubtext(
         places_to_visit, 
         ".places-to-visit_content",
         "places-to-visit_content_item",
         "places-to-visit_content_text",
         "places-to-visit_content_sub_text"
      );

      renderListTextAndSubtext(
         equipment_required,
         ".equipment-required_content",
         "equipment-required_content_item",
         "equipment-required_content_text",
         "equipment-required_content_sub_text"
      );

      renderListTextAndSubtext(
         feeding,
         ".feeding_content",
         "feeding_content_item",
         "feeding_content_text",
         "feeding_content_sub_text"
      );

      renderListTextAndSubtext(
         important_information,
         ".important-instructions_content",
         "important-instructions_content_item",
         "important-instructions_content_text",
         "important-instructions_content_sub_text"
      );

      renderListTextAndSubtext(
         prohibited,
         ".prohibited_content",
         "prohibited_content_item",
         "prohibited_content_text",
         "prohibited_content_sub_text"
      );

      renderListTextAndSubtext(
         terms_and_conditions,
         ".terms-and-conditions_content",
         "prohibited_content_item",
         "prohibited_content_text",
         "prohibited_content_sub_text"
      );

      settingSocialMedia(
         ".our-networks_link",
         our_networks[0]['profile'],
         our_networks[0]['link']
      );


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







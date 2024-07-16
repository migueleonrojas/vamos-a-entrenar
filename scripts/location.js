const d = document;

const renderLocation = (textLocation) => {

   const $main_information_meeting_point_location = d.querySelector(".main-information_meeting_point_location");

   $main_information_meeting_point_location.innerHTML = textLocation;
   /* 
   main-information_meeting_point_location */

}

export default renderLocation;
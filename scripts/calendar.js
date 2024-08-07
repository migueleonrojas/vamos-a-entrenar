import getNameOfMonth from "../scripts/get-name-moth.js"

const d = document;

const renderDayOfMonth = (start, end, start_selected, end_selected) => {

   let $fragment = document.createDocumentFragment();
   let $main_information_calendar_content = document.querySelector(".main-information_calendar_content");
   d.querySelectorAll(".main-information_calendar_number_of_week").forEach(el => el.remove());
   for(let i = -start; i <= end; i++) {

      let $main_information_calendar_number_of_week = document.createElement("span");
      $main_information_calendar_number_of_week.classList.add("main-information_calendar_number_of_week");
      $main_information_calendar_number_of_week.innerHTML = i;
      
      if(i >= 1) {
         
         if(i >= start_selected && i <= end_selected) {
            $main_information_calendar_number_of_week.classList.add("main-information_calendar_number_of_week_selected");
         }
      }
      else {
         $main_information_calendar_number_of_week.classList.add("hide");

      }
      
      let $clone = document.importNode($main_information_calendar_number_of_week, true);
      $fragment.appendChild($clone); 

   }
   $main_information_calendar_content.appendChild($fragment);
}

const renderCalendar = (start_date, end_date) => {

   const $main_information_calendar_name_month = d.querySelector(".main-information_calendar_name_month");

   const sd = new Date(start_date['seconds'] * 1000);
   const ed = new Date(end_date['seconds'] * 1000);

   const days_of_moth = new Date(sd.getFullYear(), sd.getMonth() + 1, 0).getDate();
   const day_of_week_start = new Date(sd.getFullYear(), sd.getMonth(), 0).getDay();
   const day_sd = sd.getDate();
   const month_sd = sd.getMonth() + 1;
   const year_sd = sd.getFullYear();
   const day_ed = ed.getDate();
   const month_ed = ed.getMonth() + 1;
   const year_ed = ed.getFullYear();

   const nameMoth = getNameOfMonth(month_sd);

   renderDayOfMonth(day_of_week_start, days_of_moth, day_sd, day_ed);
 
   $main_information_calendar_name_month.innerHTML = nameMoth; 
   
}

export {
   renderCalendar
}
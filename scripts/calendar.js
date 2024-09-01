import getNameOfMonth from "../scripts/get-name-moth.js"

const d = document;

const renderDayOfMonth = (start, end, start_selected, end_selected, selectorCalendarContent) => {

   let $fragment = document.createDocumentFragment();
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
   selectorCalendarContent.appendChild($fragment);
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

   d.querySelectorAll(".main-information_calendar_number_of_week").forEach(el => el.remove());
   if(d.querySelectorAll(".main-information_calendar_content")[1] !== undefined) {
      d.querySelectorAll(".main-information_calendar_content")[1].remove();
   }
   
   if((day_sd < day_ed) || (day_sd === day_ed)) {
      const nameMoth = getNameOfMonth(month_sd);
      renderDayOfMonth(day_of_week_start, days_of_moth, day_sd, day_ed, document.querySelector(".main-information_calendar_content"));
      $main_information_calendar_name_month.innerHTML = nameMoth; 
   }

   else {
      const nameMoth = getNameOfMonth(month_sd);
      renderDayOfMonth(day_of_week_start, days_of_moth, day_sd, days_of_moth, document.querySelector(".main-information_calendar_content"));
      $main_information_calendar_name_month.innerHTML = nameMoth; 

      const $anotherCalendar = d.querySelector(".main-information_calendar_content").cloneNode(true);
      $anotherCalendar.querySelectorAll(".main-information_calendar_number_of_week").forEach(el => el.remove());


      const another_days_of_moth = new Date(sd.getFullYear(), sd.getMonth() + 2, 0).getDate();
      const another_day_of_week_start = new Date(sd.getFullYear(), sd.getMonth() + 1, 0).getDay();
      
      const nextNameMoth = getNameOfMonth(month_sd + 1 === 13 ? 1: month_sd);
      renderDayOfMonth(another_day_of_week_start, another_days_of_moth, 1, day_ed, $anotherCalendar);
      $anotherCalendar.querySelector(".main-information_calendar_name_month").innerHTML = nextNameMoth;


      d.querySelector(".main-information_calendar").insertAdjacentElement("beforeend", $anotherCalendar)


   }

   
}

export {
   renderCalendar
}
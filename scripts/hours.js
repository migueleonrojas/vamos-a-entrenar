import getNameOfWeek from "../scripts/get-name-week.js";

const d = document;

const renderHours = (start_date, end_date) => {

   let sd = new Date(start_date.seconds * 1000),
      year_sd = sd.getFullYear(),
      month_sd = ("0" + (sd.getMonth() + 1)).slice(-2),
      day_sd = ("0" + sd.getDate()).slice(-2),
      hours_sd = ("0" + ((sd.getHours() + 24) % 12 || 12)).slice(-2),
      minutes_sd = ("0" + sd.getMinutes()).slice(-2),
      ampm_sd = sd.getHours() >= 12 ? 'p.m' : 'a.m';


   let ed = new Date(end_date.seconds * 1000),
      year_ed = ed.getFullYear(),
      month_ed = ("0" + (ed.getMonth() + 1)).slice(-2),
      day_ed = ("0" + ed.getDate()).slice(-2),
      hours_ed = ("0" + ((ed.getHours() + 24) % 12 || 12)).slice(-2),
      minutes_ed = ("0" + ed.getMinutes()).slice(-2),
      ampm_ed = ed.getHours() >= 12 ? 'p.m' : 'a.m';


   const $main_information_time_departure_time = d.querySelector(".main-information_time_departure_time");
   const $main_information_time_return_time = d.querySelector(".main-information_time_return_time");

   const daysOfWeekDeparture = getNameOfWeek(sd.getDay());
   const daysOfWeekReturn = getNameOfWeek(ed.getDay());

   $main_information_time_departure_time.innerHTML = `Salida el día ${daysOfWeekDeparture} ${day_sd}/${month_sd}/${year_sd} ${hours_sd}:${minutes_sd} ${ampm_sd}`;
   $main_information_time_return_time.innerHTML = `Retorno el día ${daysOfWeekReturn} ${day_ed}/${month_ed}/${year_ed} ${hours_ed}:${minutes_ed} ${ampm_ed}`;


}

export {
   renderHours
}
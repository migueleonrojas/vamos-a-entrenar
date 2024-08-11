import TicketDetailState from "../../../../state/ticket-datail-state/ticket-detail-state.js";

const d = document;

const fillTicketDetail = (arrayData) => {

   if(arrayData.constructor.name !== "Array") {
      throw Error("Solo se permite un array como parametro");
   }

   arrayData.forEach(el => {
      
      let { classSelector, data } = el;

      if(classSelector === undefined || data === undefined) {
         throw Error(`Cada elemento del array debe tener el siguiente objeto:\n{\n  classSelector: "",\n  data:""\n}`);
      }

      if(d.querySelector(classSelector) === null) {
         throw Error(`El selector "${classSelector}" no existe.`);
      }
      
      d.querySelector(classSelector).innerHTML = data;
      
   });
}


d.addEventListener("DOMContentLoaded", (e) => {

   let ticketDetailState = new TicketDetailState();

   fillTicketDetail([
      {
         classSelector: ".ticket-article_id",
         data: ticketDetailState.ticketDetail.id
      },
      {
         classSelector: ".ticket-article_date",
         data: new Date(ticketDetailState.ticketDetail.date_route.seconds * 1000).toLocaleString("es-VE")
      },
      {
         classSelector: ".ticket-article_name",
         data: ticketDetailState.ticketDetail.name_competitor
      },
      {
         classSelector: ".ticket-article_lastname",
         data: ticketDetailState.ticketDetail.last_name_competitor
      },
      {
         classSelector: ".ticket-article_identification_card",
         data: ticketDetailState.ticketDetail.identification_card
      },
      {
         classSelector: ".ticket-article_telephone",
         data: ticketDetailState.ticketDetail.telephone_competitor
      },
      {
         classSelector: ".ticket-article_email",
         data: ticketDetailState.ticketDetail.email_competitor
      },
      {
         classSelector: ".ticket-article_instagram",
         data: ticketDetailState.ticketDetail.instagram_competitor
      },
      {
         classSelector: ".ticket-article_emergency_name",
         data: ticketDetailState.ticketDetail.name_emergency
      },
      {
         classSelector: ".ticket-article_emergency_telephone",
         data: ticketDetailState.ticketDetail.telephone_emergency
      },
      {
         classSelector: ".ticket-article_medic_condition",
         data: ticketDetailState.ticketDetail.medical_condition === "" ? "N/A": ticketDetailState.ticketDetail.medical_condition
      },
      {
         classSelector: ".ticket-article_medics",
         data: ticketDetailState.ticketDetail.medication_take === "" ? "N/A": ticketDetailState.ticketDetail.medication_take
      },
      {
         classSelector: ".ticket-article_allergic_medic",
         data: ticketDetailState.ticketDetail.allergic_medication === "" ? "N/A": ticketDetailState.ticketDetail.allergic_medication
      },
      {
         classSelector: ".ticket-article_allergic_food",
         data: ticketDetailState.ticketDetail.allergic_food === "" ? "N/A": ticketDetailState.ticketDetail.allergic_food
      },


   ]);

});


d.querySelector(".controls_btn").addEventListener("click", (e) => {

   alert("Se va a generar un PDF que debe guardar en digital y mostrar el día de la actividad.");

   window.print();


});


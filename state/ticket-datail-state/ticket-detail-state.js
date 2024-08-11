export default class TicketDetailState {

   constructor(ticketDetail) {
      const l = localStorage;
      if(l.getItem("ticket-detail") !== null) {
         this.#ticketDetail = JSON.parse(l.getItem("ticket-detail"));
      }
      else {
         this.ticketDetail = ticketDetail;
      }
   }

   #ticketDetail = {
      "id": "",
      "date_route": "",
      "name_route": "",
      "name_competitor": "",
      "last_name_competitor": "",
      "identification_card": "",
      "telephone_competitor": "",
      "email_competitor": "",
      "instagram_competitor": "",
      "name_emergency": "",
      "telephone_emergency":"",
      "medical_condition": "",
      "medication_take": "",
      "allergic_medication": "",
      "allergic_food": "",
      "terms_and_conditions": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
   }

   set ticketDetail(newTicketDetail) {
      const l = localStorage;
      this.#ticketDetail = newTicketDetail;
      l.setItem("ticket-detail",JSON.stringify(this.#ticketDetail));
   }

   get ticketDetail() {
      return this.#ticketDetail;
   }
}
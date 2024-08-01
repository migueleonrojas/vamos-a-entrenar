export default class RouteState {

   constructor(route){
      const l = localStorage;
      if(l.getItem("route") !== null) {
         this.#route = JSON.parse(l.getItem("route"));
      }
      else {
         this.route = route;
      }
   }

   #route = {
      "id": "",
      "active": false,
      "difficulty": 0,
      "type": "",
      "modality": "",
      "enviroment": "",
      "image": "",
      "main_information": {
			"name": "",
			"description": "",
			"location": "",
			"start_date": new Date(),
			"end_date": new Date(),
			"meeting_point": ""
		},
      "itinerary": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
      "climate_and_vegetation": {
			"climate": {
				"chance_of_rain": "",
				"temperature": "",
				"humidity": "",
				"wind": "",
				"summary": ""
			},
			"vegetation": [
				{
					"text": "",
					"sub_text": [""]
				},
				
         ]
		},
      "places_to_visit": [
         {
				"text": "",
				"sub_text": [""]
			},
			
      ],
      "the_marked_route": "",
      "equipment_required": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
      "feeding": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
      "important_information": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
      "prohibited": [
         {
				"text": "",
				"sub_text": [""]
			}
      ],
      "terms_and_conditions": [
         {
				"text": "",
				"sub_text": [""]
			},
      ],
      "our_networks": [
			{
				"name": "",
				"profile": "",
				"link": ""
			},
		]
   }

   set route(newRoute) {
      const l = localStorage;
      this.#route = newRoute;
      l.setItem("route",JSON.stringify(this.#route));
   }

   get route() {
      return this.#route;
   }
   
}

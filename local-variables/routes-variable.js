const routes = [
   {
      "id": "1",
      "difficulty": 5,
      "type": "next-route",
      "modality": "Excursión",
      "enviroment": "Montaña",
      "image": "--image-card:url(../../assets/routes-imgs/piedra-del-indio.webp);",
      "main_information": {
			"name": "Piedra del Indio y Pozos de Paraiso",
			"description": "Excursión a Piedra del Indio y a los Pozos de Paraiso.",
			"location": "Ubicado en el Parque Nacional Waraira Repano. sector Sebucan y sector Estribo Duarte.⛰️",
			"start_date": new Date(2024, 6, 13, 8, 0, 0, 0),// [13/07/2024  8:00 a.m],
			"end_date": new Date(2024, 6, 13, 16, 0, 0, 0),//[13/07/2024  8:00 a.m]
			"meeting_point": "En la estación de Metro de Los Dos Caminos en Frente de los Torniquetes"
		},
      "itinerary": [
         {
				"text": `
					Desde el Metro de Los Dos Caminos se puede tomar una camioneta que nos puede dejar en la parte alta de la
					Av Principal de Boleíta. (Pasaje de la camioneta 15bs a 20bs)
				`,
				"sub_text": []
			},
			{
				"text": `
					Desde el Puesto de Guarda Parques hasta Piedra del Indio se estima un tiempo máximo de 2 horas.
				`,
				"sub_text": []
			},
			{
				"text": `
					Se pudiera evaluar la idea de ir a unos pozos que quedan como a 40 minutos de piedra del indio, los cuales son:
				`,
				"sub_text": [
					"Los Jacuzzis",
					"Pozo Negro"
				]
			},
			{
				"text": `
					Desde los pozos, expecificamente desde Pozo Negro a Estribo Duarte son como máximo 2 horas.
				`,
				"sub_text": []
			},
			{
				"text": `
					Bajariamos por el Sector de Estribo Duarte
				`,
				"sub_text": []
			},
			{
				"text": `
					Y caminariamos un tramo de la cota mil para llegar al Marques, donde los participantes pueden optar por la 
					opción de irse en camioneta que los lleva a los Dos Caminos.
				`,
				"sub_text": []
			},
			{
				"text": `
					Y caminariamos un tramo de la cota mil para llegar al Marques, donde los participantes pueden optar por la 
					opción de irse en camioneta que los lleva a los Dos Caminos.
				`,
				"sub_text": []
			},
			{
				"text": `
					Si no se va a los pozos, entonces el regreso va ser por donde vinimos, bajaremos por toda la Av. Sucre 
					hasta el metro de Los Dos Caminos.
				`,
				"sub_text": []
			}
      ],
      "climate_and_vegetation": {
			"climate": {
				"chance_of_rain": "El clima para la fecha convocada: 40% de probabilidades de Lluvia",
				"temperature": "Temperatura: 19º a 28º 🌡.",
				"humidity": "Humedad: 76% 💧.",
				"wind": "Viento: a 8 km/h 🌫.",
				"summary": "Chaparrones dispersos 🌧."
			},
			"vegetation": [
				{
					"text": `
						Estaremos la gran parte de la ruta protegidos de los rayos del sol por árboles.
					`,
					"sub_text": []
				},
				{
					"text": `
						Caminos de tierra con algunos tramos con roca suelta, tierra resbalidiza y tramos angostos cerca 
						de acantilados.
					`,
					"sub_text": []
				},
				{
					"text": `
						El tramo de los pozos hay piedras inestables y resbalosas.
					`,
					"sub_text": []
				},
				{
					"text": `
						El tramo de la bajada de Estribo Duarte hay rocas altas, la zona esta expuesta al sol y una inclinación algo 
						considerable.
					`,
					"sub_text": []
				}
         ]
		},
      "places_to_visit": [
         {
				"text": `
					PGP Sebucán
				`,
				"sub_text": []
			},
			{
				"text": `
					Piedra del Indio
				`,
				"sub_text": []
			},
			{
				"text": `
					Los Jacuzzis
				`,
				"sub_text": []
			},
			{
				"text": `
					Pozo Negro
				`,
				"sub_text": []
			},
			{
				"text": `
					Estribo de Duarte
				`,
				"sub_text": []
			},
      ],
      "the_marked_route": "https://es.wikiloc.com/wikiloc/embedv2.do?id=176963019&elevation=off&images=off&maptype=H",
      "equipment_required": [
         {
				"text": `
					Sólo llevar morral 🎒 (no llevar bolsos de costado o maletas para una mayor comodidad).
				`,
				"sub_text": []
			},
			{
				"text": `
					Gorra o sombrero 🧢👒.
				`,
				"sub_text": []
			},
			{
				"text": `
					Zapatos montañeros 👟🥾.
				`,
				"sub_text": []
			},
			{
				"text": `
					Franela Deportiva de Secado Rápido que sea manga larga preferiblemente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Pantalon deportivo.
				`,
				"sub_text": []
			},
			{
				"text": `
					Protector solar.
				`,
				"sub_text": []
			},
			{
				"text": `
					Repelente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Llevar impermeable ya que el clima varía sin previo aviso.
				`,
				"sub_text": []
			},
			{
				"text": `
					Lentes de sol 🕶.
				`,
				"sub_text": []
			},
			{
				"text": `
					Llevar bolsas plásticas (para proteger la ropa y aparatos electrónicos📲📷🔦).
				`,
				"sub_text": []
			},
			{
				"text": `
					Traje de Baño.
				`,
				"sub_text": []
			},
			{
				"text": `
					Alguna chaqueta ligera colores que reflejen los rayos del sol (por ejemplo color blanco).(opcional)
				`,
				"sub_text": []
			},
      ],
      "feeding": [
         {
				"text": `
					Aliméntese adecuadamente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Frutas 🍌🍉🍊.
				`,
				"sub_text": []
			},
			{
				"text": `
					Snacks: chocolate, barras energéticas, frutos secos.🍭🍬🍫
				`,
				"sub_text": []
			},
			{
				"text": `
					Lleve agua entre 1.5 litros a 3 litros.
				`,
				"sub_text": []
			},
      ],
      "important_information": [
         {
				"text": `
					Debe indicar de donde viene para saber que tan lejos esta del punto de encuentro.
				`,
				"sub_text": []
			},
			{
				"text": `
					Si padece alguna enfermedad, condición médica de importancia o esta tomando algún medicamento, 
					infórmelo con anterioridad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Cualquier duda sobre la actividad consulte cuando lo requiera, con gusto le será respondido.
				`,
				"sub_text": []
			},
			{
				"text": `
					Menores de edad deben asistir con su representante. 
				`,
				"sub_text": []
			},
			{
				"text": `
					Ruta con dificultad media.
				`,
				"sub_text": []
			},
      ],
      "prohibited": [
         {
				"text": `
					🤸🏼‍♂️ Actos imprudentes que coloquen el riesgo su integridad física o la de otros participantes, 
					recuerde no contamos con paramédico ni seguro para la actividad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Desviarse de la ruta demarcada.
				`,
				"sub_text": []
			},
			{
				"text": `
					Ingesta de sustancias alcohólicas, estupefacientes y psicotrópicas.
				`,
				"sub_text": []
			},
			{
				"text": `
					🚯Arrojar basura en el trayecto de la ruta, cualquier desperdicio debe guardarlo en su mochila 
					para ser depositado solo en los sitios adecuados para ello.
				`,
				"sub_text": []
			},
			{
				"text": `
					El ritmo de caminata grupal es suave, por lo que no debe adelantarse, atrasarse o alejarse del grupo.
				`,
				"sub_text": []
			},
      ],
      "terms_and_conditions": [
         {
				"text": `
					Si usted confirma su participación está aceptando cada uno de los términos y condiciones.
				`,
				"sub_text": []
			},
			{
				"text": `
					Cumplir cada una de las recomendaciones, prohibiciones dadas para la actividad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Datos que debe suministrar: Nombres, Apellidos, N- cédula, un número de contacto de familiar 
					o persona cercana (Solo será usado en caso de emergencia).
				`,
				"sub_text": []
			},
			{
				"text": `
					Debe estar siempre atento y cumplir las indicaciones.
				`,
				"sub_text": []
			},
      ],
      "our_networks": [
			{
				"name":"Intagram",
				"profile": "@migueleonrojas",
				"link": "https://www.instagram.com/migueleonrojas/"
			},
		]
   },
   {
      "id": "2",
      "difficulty": 6,
      "type": "next-route",
      "modality": "Excursión",
      "enviroment": "Montaña",
      "image": "--image-card:url(../../assets/routes-imgs/sabas-nieves-humboldt.webp);",
      "main_information": {
			"name": "Humboldt desde Sabas Nieves",
			"description": "Excursión al Humboldt desde Sabas Nieves",
			"location": "Ubicado en el Parque Nacional Waraira Repano. sector Sabas Nieves.⛰️",
			"start_date": new Date(2024, 6, 14, 8, 0, 0, 0),// [13/07/2024  8:00 a.m],
			"end_date": new Date(2024, 6, 14, 18, 0, 0, 0),//[13/07/2024  8:00 a.m]
			"meeting_point": "Plaza Francia de Altamira"
		},
      "itinerary": [
         {
				"text": `
					Desde plaza Francia se toma transporte público el cual esta como entre 15bs a 20bs
				`,
				"sub_text": []
			},
			{
				"text": `
					Desde donde nos deja el transporte accedemos por el sector Sabas Nieves.
				`,
				"sub_text": []
			},
			{
				"text": `
					De Sabas Nieves 1 a Sabas Nieves 2 son como máximo 1 hora.
				`,
				"sub_text": []
			},
			{
				"text": `
					De Sabas Nieves 2 a El Banquito son como máximo 1 hora y 30 minutos.
				`,
				"sub_text": []
			},
			{
				"text": `
					Del Banquito al Refugio No te Apures son como máximo 50 minutos.
				`,
				"sub_text": []
			},
			{
				"text": `
					Del Banquito a la Silla de Caracas son como máximo 1 hora y 30 minutos.
				`,
				"sub_text": []
			},
			{
				"text": `
					De la Silla de Caracas a Lagunazo son como máximo 2 horas.
				`,
				"sub_text": []
			},
			{
				"text": `
					De Lagunazo hasta el Hotel Humboldt son como máximo 2 horas.
				`,
				"sub_text": []
			},
			{
				"text": `
					Desde el Hotel Humboldt se baja en teleférico gratis por ser senderistas, igualmente llevar como 
               12$ por el costo de la bajada por si acaso, y desde Mariperez se toma una camioneta hasta la estación
               Colegio de Ingenieros o Bellas Artes.
				`,
				"sub_text": []
			},
         {
            "text": "En total la ruta se estima realizarse en un tiempo de 9 horas a ritmo lento.",
            "sub_text": []
         }
      ],
      "climate_and_vegetation": {
			"climate": {
				"chance_of_rain": "El clima para la fecha convocada: 20% de probabilidades de Lluvia.",
				"temperature": "Temperatura: 19º a 28º 🌡.",
				"humidity": "Humedad: 74% 💧.",
				"wind": "Viento: a 8 km/h 🌫.",
				"summary": "Parcialmente nublado 🌧"
			},
			"vegetation": [
				{
					"text": `
						Estaremos la gran parte de la ruta protegidos de los rayos del sol por árboles.
					`,
					"sub_text": []
				},
				{
					"text": `
						Caminos de tierra con algunos tramos con roca suelta, tierra resbalidiza y tramos angostos cerca 
                  de acantilados.
					`,
					"sub_text": []
				},
				{
					"text": `
						Tramos con rocas muy altas, raices grandes y resbaladizas.
					`,
					"sub_text": []
				},
				{
					"text": `
						Llegaremos a un clima de subparamo en la zona más alta de la ruta.
					`,
					"sub_text": []
				}
         ]
		},
      "places_to_visit": [
         {
				"text": `
					PGP Sabas Nieves.
				`,
				"sub_text": []
			},
			{
				"text": `
					El Banquito.
				`,
				"sub_text": []
			},
			{
				"text": `
					Refugio No te Apures.
				`,
				"sub_text": []
			},
			{
				"text": `
					La Silla de Caracas.
				`,
				"sub_text": []
			},
			{
				"text": `
					Piedras Flotantes.
				`,
				"sub_text": []
			},
			{
				"text": `
					Pico Occidental.
				`,
				"sub_text": []
			},
			{
				"text": `
					Lagunazo.
				`,
				"sub_text": []
			},
			{
				"text": `
					Hotel Humboldt.
				`,
				"sub_text": []
			},
      ],
      "the_marked_route": "https://es.wikiloc.com/rutas-senderismo/avila-sabasnieves-humboldt-2397311",
      "equipment_required": [
         {
				"text": `
					Sólo llevar morral 🎒 (no llevar bolsos de costado o maletas para una mayor comodidad).
				`,
				"sub_text": []
			},
			{
				"text": `
					Gorra o sombrero 🧢👒.
				`,
				"sub_text": []
			},
			{
				"text": `
					Zapatos montañeros 👟🥾.
				`,
				"sub_text": []
			},
			{
				"text": `
					Franela Deportiva de Secado Rápido que sea manga larga preferiblemente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Pantalon deportivo.
				`,
				"sub_text": []
			},
			{
				"text": `
					Protector solar.
				`,
				"sub_text": []
			},
			{
				"text": `
					Repelente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Llevar impermeable ya que el clima varía sin previo aviso.
				`,
				"sub_text": []
			},
			{
				"text": `
					Lentes de sol 🕶.
				`,
				"sub_text": []
			},
			{
				"text": `
					Llevar bolsas plásticas (para proteger la ropa y aparatos electrónicos📲📷🔦).
				`,
				"sub_text": []
			},
			{
				"text": `
					Traje de Baño.
				`,
				"sub_text": []
			},
			{
				"text": `
					Alguna chaqueta ligera colores que reflejen los rayos del sol (por ejemplo color blanco).(opcional)
				`,
				"sub_text": []
			},
      ],
      "feeding": [
         {
				"text": `
					Aliméntese adecuadamente.
				`,
				"sub_text": []
			},
			{
				"text": `
					Frutas 🍌🍉🍊.
				`,
				"sub_text": []
			},
			{
				"text": `
					Snacks: chocolate, barras energéticas, frutos secos.🍭🍬🍫
				`,
				"sub_text": []
			},
			{
				"text": `
					Lleve agua entre 2 litros a 4 litros.
				`,
				"sub_text": []
			},
      ],
      "important_information": [
         {
				"text": `
					Debe indicar de donde viene para saber que tan lejos esta del punto de encuentro.
				`,
				"sub_text": []
			},
			{
				"text": `
					Si padece alguna enfermedad, condición médica de importancia o esta tomando algún medicamento, 
					infórmelo con anterioridad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Cualquier duda sobre la actividad consulte cuando lo requiera, con gusto le será respondido.
				`,
				"sub_text": []
			},
			{
				"text": `
					Menores de edad deben asistir con su representante. 
				`,
				"sub_text": []
			},
			{
				"text": `
					Ruta con dificultad media.
				`,
				"sub_text": []
			},
      ],
      "prohibited": [
         {
				"text": `
					🤸🏼‍♂️ Actos imprudentes que coloquen el riesgo su integridad física o la de otros participantes, 
					recuerde no contamos con paramédico ni seguro para la actividad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Desviarse de la ruta demarcada.
				`,
				"sub_text": []
			},
			{
				"text": `
					Ingesta de sustancias alcohólicas, estupefacientes y psicotrópicas.
				`,
				"sub_text": []
			},
			{
				"text": `
					🚯Arrojar basura en el trayecto de la ruta, cualquier desperdicio debe guardarlo en su mochila 
					para ser depositado solo en los sitios adecuados para ello.
				`,
				"sub_text": []
			},
			{
				"text": `
					El ritmo de caminata grupal es suave, por lo que no debe adelantarse, atrasarse o alejarse del grupo.
				`,
				"sub_text": []
			},
      ],
      "terms_and_conditions": [
         {
				"text": `
					Si usted confirma su participación está aceptando cada uno de los términos y condiciones.
				`,
				"sub_text": []
			},
			{
				"text": `
					Cumplir cada una de las recomendaciones, prohibiciones dadas para la actividad.
				`,
				"sub_text": []
			},
			{
				"text": `
					Datos que debe suministrar: Nombres, Apellidos, N- cédula, un número de contacto de familiar 
					o persona cercana (Solo será usado en caso de emergencia).
				`,
				"sub_text": []
			},
			{
				"text": `
					Debe estar siempre atento y cumplir las indicaciones.
				`,
				"sub_text": []
			},
      ],
      "our_networks": [
			{
				"name":"Intagram",
				"profile": "@migueleonrojas",
				"link": "https://www.instagram.com/migueleonrojas/"
			},
		]
   },
];

export default routes;
export const site = {
	business: {
		name: "Frisør Sofie",
		tagline: "Din lokale frisør i hjertet af Aarhus",
		phone: "+45 22 33 44 55",
		email: "kontakt@frisoersofie.dk",
		address: {
			street: "Vestergade 12",
			postalCode: "8000",
			city: "Aarhus C",
		},
		openingHours: [
			{ days: "Mandag", hours: "Lukket" },
			{ days: "Tirsdag - Fredag", hours: "09:00 - 17:30" },
			{ days: "Lørdag", hours: "09:00 - 14:00" },
			{ days: "Søndag", hours: "Lukket" },
		],
	},

	services: [
		{
			name: "Dameklip",
			description: "Klip og styling tilpasset dit ansigt og hverdag, inkl. vask og føn.",
			priceFrom: 450,
		},
		{
			name: "Herreklip",
			description: "Præcisionsklip med maskine og saks, inkl. vask og styling.",
			priceFrom: 320,
		},
		{
			name: "Farve & Balayage",
			description: "Fra diskrete highlights til fuld farveforandring — skræddersyet i konsultationen.",
			priceFrom: 850,
		},
		{
			name: "Opsætning",
			description: "Perfekt til bryllup, konfirmation eller fest. Book gerne en prøveopsætning i forvejen.",
			priceFrom: 600,
		},
		{
			name: "Skægtrimning",
			description: "Formklip og trimning af skæg, afsluttet med varmt håndklæde.",
			priceFrom: 180,
		},
		{
			name: "Børneklip",
			description: "Tålmodig og hurtig klipning til de mindste, op til 12 år.",
			priceFrom: 220,
		},
	],

	testimonials: [
		{
			name: "Mette H.",
			quote: "Bedste frisør jeg har fundet i Aarhus! Sofie lytter altid til hvad jeg ønsker, og resultatet er perfekt hver gang.",
		},
		{
			name: "Anders K.",
			quote: "Hyggelig salon og professionel betjening. Jeg har fast tid hver 6. uge og bliver aldrig skuffet.",
		},
		{
			name: "Louise P.",
			quote: "Fik lavet balayage til min datters konfirmation — helt fantastisk resultat og super rådgivning undervejs.",
		},
	],

	social: {
		facebook: "https://facebook.com/frisoersofie",
		instagram: "https://instagram.com/frisoersofie",
	},

	theme: {
		primaryColor: "#9c4f3c",
		accentColor: "#e8c07d",
		headingFont: "Playfair Display",
		bodyFont: "Inter",
	},
};

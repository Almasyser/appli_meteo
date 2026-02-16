Codes d'interprétation météorologique de l’OMM (WW)
Code	Description
0	Ciel dégagé
1, 2, 3	Principalement clair, partiellement nuageux et couvert
45, 48	Brouillard et brouillard givrant déposant du givre
51, 53, 55	Bruine : intensité faible, modérée et forte
56, 57	Bruine verglaçante : intensité faible et forte
61, 63, 65	Pluie : intensité faible, modérée et forte
66, 67	Pluie verglaçante : intensité faible et forte
71, 73, 75	Chutes de neige : intensité faible, modérée et forte
77	Grains de neige
80, 81, 82	Averses de pluie : intensité faible, modérée et violente
85, 86	Averses de neige : intensité faible et forte
95*	Orage : faible ou modéré
96, 99*	Orage avec grêle faible ou forte

(*) Les prévisions d’orages avec grêle sont uniquement disponibles en Europe centrale.

https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,cloud_cover&daily=weather_code,sunrise,sunset&timezone=GMT
const ommCode=[
	{code: 0, text:""},
	{1},
	{2},
	{3},
	{45},
	{48},
	{51},
	{53},
	{55},
	{56},
	{57},
	{61},
	{63},
	{65},
	{66},
	{67},
	{71},
	{73},
	{75},
	{77},
	{80},
	{81},
	{82},
	{85},
	{86},
	{95},
	{96},
	{99}
]
		
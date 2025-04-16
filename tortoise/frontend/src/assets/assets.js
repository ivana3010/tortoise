import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import header from './header.jpg'
import logobr1 from './logobr1.png'
import logobr2 from './logobr2.png'
import tortoise from './tortoise.svg'
import futer from './futer.png'
import futer2 from './futer2.png'

import indian from './indian.jpg'
import herman from './her.jpg'
import spider from './spider.jpg'
import galapagos from './galapagos.jpg'
import leopard from './leopard.jpg'
import redf from './redf.jpg'
import yellowf from './yellowf.jpg'
import sulcata from './sulcata.jpg'
import egyp from './egyp.jpg'
import russian from './russian.jpg'
import greek from './greek.jpg'
import radiated from './radiated.jpg'
import desert from './desert.jpg'
import plough from './plough.jpg'
import pancake from './pancake.jpg'


import hermannMap from './hermannMap.png'
import leopardMap from './leopardMap.png'
import sulcataMap from './sulcataMap.png'
import desertMap from './desertMap.png'
import egyptMap from './egyptMap.png'
import galapagosMap from './galapagosMap.png'
import greekMap from './greekMap.png'
import indianMap from './indianMap.png'
import pancakeMap from './pancakeMap.png'
import ploughMap from './ploughMap.png'
import radiatedMap from './radiatedMap.png'
import redfootedMap from './redfootedMap.png'
import russianMap from './russianMap.png'
import spiderMap from './spiderMap.png'
import yellowfootedMap from './yellowfootedMap.png'

import hermann1 from './hermann1.jpg'
import hermann2 from './hermann2.jpg'
import hermann4 from './hermann4.jpg'
import leopard1 from './leopard1.jpg'
import leopard2 from './leopard2.jpg'
import leopard3 from './leopard3.jpg'
import leopard4 from './leopard4.jpg'
import redf1 from './redf1.png'
import redf2 from './redf2.jpg'
import redf3 from './redf3.jpg'
import redf4 from './redf4.jpg'
import indian1 from './indian1.jpg'
import indian2 from './indian2.jpg'
import indian3 from './indian3.jpg'
import sulcata1 from './sulcata1.jpg'
import sulcata2 from './sulcata2.jpg'
import sulcata3 from './sulcata3.jpg'
import sulcata4 from './sulcata4.jpg'
import egypt1 from './egypt1.jpg'
import egypt2 from './egypt2.jpg'
import egypt3 from './egypt3.jpg'
import galapagos1 from './galapagos1.jpg'
import galapagos2 from './galapagos2.jpg'
import galapagos3 from './galapagos3.jpg'
import galapagos4 from './galapagos4.jpg'
import russian1 from './russian1.jpg'
import russian2 from './russian2.jpg'
import russian3 from './russian3.jpg'
import russian4 from './russian4.jpg'
import greek1 from './greek1.jpg'
import greek2 from './greek2.jpg'
import greek3 from './greek3.jpg'
import greek4 from './greek4.jpg'
import radiant1 from './radiant1.jpg'
import radiant2 from './radiant2.jpg'
import radiant3 from './radiant3.jpeg'
import radiant4 from './radiant4.jpg'
import desert1 from './desert1.jpeg'
import desert2 from './desert2.jpg'
import desert3 from './desert3.png'
import spider1 from './spider1.jpg'
import spider2 from './spider2.jpg'
import spider3 from './spider3.jpg'
import spider4 from './spider4.jpg'
import yellowf1 from './yellowf1.jpg'
import yellowf2 from './yellowf2.jpg'
import yellowf3 from './yellowf3.jpg'
import yellowf4 from './yellowf4.jpg'
import plough1 from './plough1.jpg'
import plough2 from './plough2.jpeg'
import plough3 from './plough3.png'
import plough4 from './plough4.jpg'
import pancake1 from './pancake1.jpeg'
import pancake2 from './pancake2.jpg'
import pancake3 from './pancake3.png'
import pancake4 from './pancake4.jpg'
import fruitveg from './fruitveg.png'
import grassflow from './grassflow.jpg'

import desertShop from './desertShop.jpg'
import egypShop from './egypShop.jpg'
import galapagosShop from './galapagosShop.jpg'
import greekShop from './greekShop.jpg'
import hermannShop from './hermannShop.jpg'
import indianShop from './indianShop.jpg'
import leopardShop from './leopardShop.jpg'
import pancakeShop from './pancakeShop.jpg'
import ploughshareShop from './ploughshareShop.jpg'
import radiantShop from './radiantShop.jpg'
import redfShop from './redfShop.jpg'
import russianShop from './russianShop.jpg'
import spiderShop from './spiderShop.jpg'
import sulcataShop from './sulcataShop.jpg'
import yellowfShop from './yellowfShop.jpg'





export const assets = {
    logobr1,
    logobr2,
    menu_icon,
    cross_icon,
    dropdown_icon,
    header,
    tortoise,
    futer,
    futer2,
    fruitveg,
    grassflow
}

export const tortoises = [
    {
        _id: 'tor1',
        name: 'Hermann tortoise',
        image: herman,
        images:[herman, hermann1, hermann2, hermann4],
        imagePlace: hermannMap,
        imageShop: hermannShop,
        scientificName: 'Testudo hermanni',
        lifespan: '50-100 years',
        size: '15-30 cm',
        location: 'Hermann’s tortoises live in southern Europe, from Balkan to southern France, southern and western Italy, Romania, and Turkey. They have also made their home on several islands in the Mediterranean, the Balearics, Sardinia, Sicily, and Corsica among them. They prefer evergreen Mediterranean oak forest, however, this forest in great part has disappeared.',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Testudo",
            Species: "Testudo hermanni"
        },
        diet: "Herbivore",
        conservationStatus: "Near Threatened",
        habitatType: "Forests",
        weight: "2-3 kg",
        price: "70 €"
    },
    {
        _id: "2",
        name: "Leopard Tortoise",
        image: leopard,
        images:[leopard1, leopard2, leopard3, leopard4],
        imagePlace: leopardMap,
        imageShop: leopardShop,
        description: "The Aldabra giant tortoise is native to the Aldabra Atoll in the Seychelles.",
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Stigmochelys",
            Species: "Stigmochelys pardalis"
        },
        scientificName: 'Stigmochelys pardalis',
        lifespan: '40-80 years',
        size: '30-50 cm',
        location: 'Sub-Saharan Africa-Sudan, Namibia',
        diet: "Herbivore",
        conservationStatus: "Least Concern",
        habitatType: "Savannas",
        weight: "15-20 kg",
        price: "90 €"
    },
    {
        _id: 'tor3',
        name: 'Red Footed tortoise',
        image: redf,
        images:[redf1, redf2, redf3, redf4],
        imagePlace: redfootedMap,
        imageShop: redfShop,
        scientificName: 'Chelonoidis carbonarius',
        lifespan: '50-60 years',
        size: '30-40 cm',
        location: 'South America - Amazon Basin, Grasslands, Forests',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Chelonoidis",
            Species: "Chelonoidis carbonarius"
        },
        diet: "Omnivore",
        conservationStatus: "Vulnerable",
        habitatType: "Tropical Forests",
        weight: "10-15 kg",
        price: "110 €"


    },
    {
        _id: 'tor4',
        name: 'Indian Star tortoise',
        image: indian,
        images:[indian, indian1, indian2, indian3],
        imagePlace: indianMap,
        imageShop: indianShop,
        scientificName: 'Geochelone elegans',
        lifespan: '35-80 years',
        size: '25-30 cm',
        location: 'India, Sri Lanka, Pakistan',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Geochelone",
            Species: "Geochelone elegans"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Dry Forests",
        weight: "3-6 kg",
        price: "100 €"

    },
    {
        _id: 'tor5',
        name: 'Sulcata tortoise',
        image: sulcata,
        images:[sulcata1, sulcata2, sulcata3, sulcata4],
        imagePlace: sulcataMap,
        imageShop: sulcataShop,
        scientificName: 'Centrochelys sulcata',
        lifespan: '70-100 years',
        size: '60-80 cm',
        location: 'Sub-Saharan Africa - Sahara Desert, Sahel',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Centrochelys",
            Species: "Centrochelys sulcata"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Savannahs",
        weight: "30-50 kg",
        price: "150 €"
    },
    {
        _id: 'tor6',
        name: 'Egyptian tortoise',
        image: egyp,
        images:[egyp, egypt1, egypt2, egypt3],
        imagePlace: egyptMap,
        imageShop: egypShop,
        scientificName: 'Testudo kleinmanni',
        lifespan: '50-70 years',
        size: '10-15 cm',
        location: 'Egypt, Libya, Israel',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Testudo",
            Species: "Testudo kleinmanni"
        },
        diet: "Herbivore",
        conservationStatus: "Critically Endangered",
        habitatType: "Arid Desert",
        weight: "0.5 kg",
        price: "90 €"



    },
    {
        _id: 'tor7',
        name: 'Galapagos Tortoise',
        image: galapagos,
        images:[galapagos1, galapagos2, galapagos3, galapagos4],
        imagePlace: galapagosMap,
        imageShop: galapagosShop,
        scientificName: 'Chelonoidis nigra',
        lifespan: '100-150 years',
        size: '120-150 cm',
        location: 'Galapagos Islands, Ecuador',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Chelonoidis",
            Species: "Chelonoidis nigra"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Volcanic Grasslands",
        weight: "250-300 kg",
        price: "200 €"

    },
    {
        _id: 'tor8',
        name: 'Russian Tortoise',
        image: russian,
        images:[russian3, russian2, russian1, russian4],
        imagePlace: russianMap,
        imageShop: russianShop,
        scientificName: 'Agrionemys horsfieldii',
        lifespan: '40-50 years',
        size: '15-25 cm',
        location: 'Central Asia - Russia, Afghanistan, Iran, Pakistan',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Testudo",
            Species: "Testudo horsfieldii"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Arid Regions",
        weight: "1-2 kg",
        price: "70 €"

    },
    {
        _id: 'tor9',
        name: 'Greek Tortoise',
        image: greek,
        images:[greek1, greek2, greek3, greek4],
        imagePlace: greekMap,
        imageShop: greekShop,
        scientificName: 'Testudo graeca',
        lifespan: '50-90 years',
        size: '20-30 cm',
        location: 'Mediterranean Basin - North Africa, Europe, Middle East',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Testudo",
            Species: "Testudo graeca"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Mediterranean Forests",
        weight: "1-3 kg",
        price: "70 €"

    },
    {
        _id: 'tor10',
        name: 'Radiated Tortoise',
        image: radiated,
        images:[radiant2, radiant3, radiant4, radiant1],
        imagePlace: radiatedMap,
        imageShop: radiantShop,
        scientificName: 'Astrochelys radiata',
        lifespan: '50-100 years',
        size: '30-40 cm',
        location: 'Madagascar',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Astrochelys",
            Species: "Astrochelys radiata"
        },
        diet: "Herbivore",
        conservationStatus: "Critically Endangered",
        habitatType: "Dry Forests",
        weight: "12-15 kg",
        price: "150 €"

    },
    {
        _id: 'tor11',
        name: 'Desert Tortoise',
        image: desert,
        images:[desert, desert1, desert2, desert3],
        imagePlace: desertMap,
        imageShop: desertShop,
        scientificName: 'Gopherus agassizii',
        lifespan: '50-80 years',
        size: '25-40 cm',
        location: 'Southwestern United States, Mexico',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Gopherus",
            Species: "Gopherus agassizii"
        },
        diet: "Herbivore",
        conservationStatus: "Vulnerable",
        habitatType: "Deserts",
        weight: "5-7 kg",
        price: "100 €"

    },
    {
        _id: 'tor12',
        name: 'Spider Tortoise',
        image: spider,
        images:[spider1, spider2, spider3, spider4], 
        imagePlace: spiderMap,
        imageShop: spiderShop,
        scientificName: 'Pyxis arachnoides',
        lifespan: '40-70 years',
        size: '15-20 cm',
        location: 'Madagascar',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Pyxis",
            Species: "Pyxis arachnoides"
        },
        diet: "Herbivore",
        conservationStatus: "Critically Endangered",
        habitatType: "Dry Forests",
        weight: "0.4-0.6 kg",
        price: "180 €"

    },
    {
        _id: 'tor13',
        name: 'Yellow-Footed Tortoise',
        image: yellowf,
        images:[yellowf1, yellowf2, yellowf3, yellowf4],
        imagePlace: yellowfootedMap,
        imageShop: yellowfShop,
        scientificName: 'Chelonoidis denticulatus',
        lifespan: '50-60 years',
        size: '35-45 cm',
        location: 'Amazon Basin, South America',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Chelonoidis",
            Species: "Chelonoidis denticulatus"
        },
        diet: "Omnivore",
        conservationStatus: "Vulnerable",
        habitatType: "Tropical Rainforests",
        weight: "15-20 kg",
        price: "120 €"

    },
    {
        _id: 'tor14',
        name: 'Ploughshare Tortoise',
        image: plough,
        images:[plough2, plough1, plough3, plough4],
        imagePlace: ploughMap,
        imageShop: ploughshareShop,
        scientificName: 'Astrochelys yniphora',
        lifespan: '80-100 years',
        size: '40-50 cm',
        location: 'Madagascar',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Astrochelys",
            Species: "Astrochelys yniphora"
        },
        diet: "Herbivore",
        conservationStatus: "Critically Endangered",
        habitatType: "Dry Forests",
        weight: "8-10 kg",
        price: "190 €"

    },
    {
        _id: 'tor15',
        name: 'Pancake Tortoise',
        image: pancake,
        images:[pancake1, pancake2, pancake3, pancake4],
        imagePlace: pancakeMap,
        imageShop: pancakeShop,
        scientificName: 'Malacochersus tornieri',
        lifespan: '30-50 years',
        size: '15-20 cm',
        location: 'Kenya, Tanzania',
        taxonomy: {
            Kingdom: "Animalia",
            Phylum: "Chordata",
            Class: "Reptilia",
            Order: "Testudines",
            Family: "Testudinidae",
            Genus: "Malacochersus",
            Species: "Malacochersus tornieri"
        },
        diet: "Herbivore",
        conservationStatus: "Critically Endangered",
        habitatType: "Rocky Outcrops",
        weight: "0.5-1 kg",
        price: "160 €"

    },
]
import { LOCATIONS } from "./locations";
import Audi from '../Images/audi-a6.jpg'; //fixing the images is a work in progress
/* Schema:
license plate: {License:"e plate", Model,carGroup,Color,fuelType,fuelStatus,Locatoin,Doors,Status,RelStatus,Image}
 */

export let CARS = {
    FC12345: {License:"FC12345", Model:"Fiat Puto",carGroup:'A',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Available",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    FM23456: {License:"FM23456", Model:"Fiat Puto",carGroup:'A',Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    HM23456: {License:"HM23456", Model:"Skoda Fabia",carGroup:'B',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Rented",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    HM12345: {License:"HM12345", Model:"Ford Mondeo",carGroup:'B',Color: "BLU",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Service",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    IH12345: {License:"IH12345", Model:"Skoda Fabia",carGroup:'B',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    IH94302: {License:"IH94302", Model:"Renault Capture",carGroup:'C',Color: "BLK",fueType:'G',fuelStatus:75, Location:LOCATIONS.AHN,Doors:2,Status:"Unavailable",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    IH23456: {License:"IH23456", Model:"VW Passat",carGroup:'E',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Returned",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    FC56789: {License:"FC56789", Model:"Audi A6",carGroup:'F',Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Rented",relStatus: "Released", Image: <Audi alt="FC56789" title = "FC56789"/>},
    JB12789: {License:"JB12789", Model:"Honda CR V",carGroup:'H',Color: "BLU",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Unavailable",relStatus: "Released", Image: "https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    JF94837: {License:"JF94837", Model:"Honda CR V",carGroup:'H',Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Transfer",relStatus: "Released", Image: "https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    JF19386: {License:"JF19386", Model:"Fiat 500",carGroup:'I',Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS.CPC,Doors:2,Status:"Unavailable",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"}
}


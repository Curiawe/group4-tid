import { LOCATIONS } from "./locations";
import Audi from '../Images/audi-a6.jpg'; //fixing the images is a work in progress
import Fiat500 from '../Images/fiat-500.jpg';
import Ford from '../Images/ford-mondeo.jpg';
import Honda from '../Images/honda-crv.jpg';
import Renault from '../Images/renault-captur.jpg';
import VW from '../Images/vw-passat.jpg'
import { CARGROUPS } from "./carGroups";
/* Schema:
license plate: {License:"e plate", Model,carGroup,Color,fuelType,fuelStatus,Locatoin,Doors,Status,RelStatus,Image}
 */

export let CARS = [
    {License:"FC12345", Model:"Fiat Puto",carGroup:CARGROUPS[0],Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Available",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    {License:"FM23456", Model:"Fiat Puto",carGroup:CARGROUPS[0],Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Transfer",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    {License:"HM23456", Model:"Skoda Fabia",carGroup:CARGROUPS[1],Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[1],Doors:2,Status:"Rented",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    {License:"HM12345", Model:"Ford Mondeo",carGroup:CARGROUPS[1],Color: "BLU",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[1],Doors:2,Status:"Service",relStatus: "Released", Image: Ford},
    {License:"IH12345", Model:"Skoda Fabia",carGroup:CARGROUPS[1],Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[2],Doors:2,Status:"Available",relStatus: "Released", Image:"https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    {License:"IH94302", Model:"Renault Captur",carGroup:CARGROUPS[2],Color: "BLK",fuelType:'G',fuelStatus:75, Location:LOCATIONS[3],Doors:2,Status:"Unavailable",relStatus: "Released", Image: Renault},
    {License:"IH23456", Model:"VW Passat",carGroup:CARGROUPS[4],Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Returned",relStatus: "Released", Image: VW},
    {License:"FC56789", Model:"Audi A6",carGroup:CARGROUPS[5],Color: "BLK",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[3],Doors:2,Status:"Available",relStatus: "Released", Image: Audi},
    {License:"JB12789", Model:"Honda CR V",carGroup:CARGROUPS[6],Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Unavailable",relStatus: "Released", Image: Honda},
    {License:"JF94837", Model:"Honda CR V",carGroup:CARGROUPS[6],Color: "SLV",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Transfer",relStatus: "Released", Image: "https://da.wikipedia.org/wiki/Fiat_Punto_(type_188)#/media/Fil:Fiat_Punto_II_front_20100509.jpg"},
    {License:"JF19386", Model:"Fiat 500",carGroup:CARGROUPS[7],Color: "RED",fuelType:'P',fuelStatus: 100,Location: LOCATIONS[0],Doors:2,Status:"Unavailable",relStatus: "Released", Image: Fiat500}
]
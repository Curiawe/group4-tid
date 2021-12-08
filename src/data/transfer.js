import { CARS } from "./cars"
import { LOCATIONS } from "./locations"

export let TRANSFERS = [
    {ID: 20211,Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:"25.11.2021", Car:CARS.JF94837},
    {ID: 20212,Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:"25.11.2021", Car:CARS.FM23456},
    {ID: 20213,Incoming:LOCATIONS.CPA, Outgoing:LOCATIONS.CPC, Date:"25.11.2021", Car:CARS.IH12345},
    {ID: 20214,Incoming:LOCATIONS.AHN, Outgoing:LOCATIONS.AHA, Date:"25.11.2021", Car:CARS.HM23456},
    {ID: 20215,Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHC, Date:"25.11.2021", Car:CARS.HM12345},
    {ID: 20216,Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHS, Date:"25.10.2021", Car:CARS.IH23456},
    {ID: 20217,Incoming:LOCATIONS.AHS, Outgoing:LOCATIONS.AHN, Date:"26.10.2021", Car:CARS.FC56789}
]

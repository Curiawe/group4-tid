import { CARS } from "cars.js"
import { LOCATIONS } from "location.js"

export let TRANSFERS = [
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:"25.11.2021", Car:CARS.JF94837},
    {Incoming:LOCATIONS.CPC, Outgoing:LOCATIONS.CPA, Date:"25.11.2021", Car:CARS.FM23456},
    {Incoming:LOCATIONS.CPA, Outgoing:LOCATIONS.CPC, Date:"25.11.2021", Car:CARS.IH12345},
    {Incoming:LOCATIONS.AHN, Outgoing:LOCATIONS.AHA, Date:"25.11.2021", Car:CARS.HM23456},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHC, Date:"25.11.2021", Car:CARS.HM12345},
    {Incoming:LOCATIONS.AHA, Outgoing:LOCATIONS.AHS, Date:"25.10.2021", Car:CARS.IH23456},
    {Incoming:LOCATIONS.AHS, Outgoing:LOCATIONS.AHN, Date:"26.10.2021", Car:CARS.FC56789}
]

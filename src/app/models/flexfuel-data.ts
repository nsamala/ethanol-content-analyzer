import { Vehicle } from './devices'

export interface FlexFuelData {
    ethanol?: number
    fuelPressure?: number
    vehicle: Vehicle
}
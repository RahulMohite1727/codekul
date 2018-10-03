import { gpsListener } from "./gps-listener";

 
export class Car implements gpsListener{
    private speed: number
    private brand: string

    incSpeed(){
        this.speed++
    }
    dscSpeed(){
        this.speed--
    }

    purchDate(){
        return  new Date()
    }
    location(): void{

    }
}

let cr: Car = new Car() //cris ORV(Object refrence variable)
cr.incSpeed()
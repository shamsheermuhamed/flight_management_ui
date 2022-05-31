
import Airline from "./airline";

export class Flight {
    flightid:number=0;
    flightfrom:string="";
    flightto:string="";
    starttime:string="";
    endtime:string="";
    seats:number=0;
    price:number=0;
    status:boolean=false;
    airline:string="";
    airlinefull:Airline=new Airline
    
}

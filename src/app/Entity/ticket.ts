import User from "./user";
import Passeneger from "./passenger";

export class Ticket {
    ticketid: number=0;
    passengers:Passeneger[]=[]
    userdetails:number=0;
    totalseats:number=0;
    pnr:number=0;
    totalprice:number=0;
    flightid:number=0;
    coupon:string=""
}
